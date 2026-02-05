'use client'

import { useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search } from 'lucide-react'
import { CATEGORIES, getCategoryColor, ActivityCategory } from '@/types/workshop'
import { AgendaItemTemplate } from '@/types/workshop'
import { AGENDA_ITEM_LIBRARY } from '@/lib/templates'
import { cn } from '@/lib/utils'

// ── Prefix used to distinguish library drags from agenda-item drags ──
export const LIBRARY_PREFIX = 'library::'

export function libraryDragId(index: number) {
  return `${LIBRARY_PREFIX}${index}`
}

export function isLibraryDragId(id: string) {
  return id.startsWith(LIBRARY_PREFIX)
}

export function libraryIndexFromDragId(id: string) {
  return Number(id.slice(LIBRARY_PREFIX.length))
}

// ── Single draggable library row (entire row is the drag handle) ──
function DraggableLibraryItem({
  item,
  globalIndex,
  catColor,
}: {
  item: AgendaItemTemplate
  globalIndex: number
  catColor: string
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: libraryDragId(globalIndex),
    data: { template: item },
  })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={cn(
        'flex w-full cursor-grab items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 transition-all hover:border-white/10 hover:bg-secondary/50 active:cursor-grabbing',
        isDragging && 'opacity-40',
      )}
    >
      <div
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: catColor }}
      />
      <span className="min-w-0 flex-1 truncate text-sm text-foreground">{item.title}</span>
      <span className="shrink-0 text-xs text-muted-foreground">{item.defaultDuration}m</span>
    </div>
  )
}

// ── Shared list content ──
// Always renders draggable items — must live inside a DndContext.
interface ActivityLibraryContentProps {
  onSelectItem: (item: AgendaItemTemplate) => void
}

export function ActivityLibraryContent({ onSelectItem }: ActivityLibraryContentProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | 'all'>('all')

  const filteredItems = AGENDA_ITEM_LIBRARY.filter(item => {
    const matchesSearch =
      search === '' ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Build a global-index lookup so drag IDs stay stable per library entry
  const globalIndexMap = new Map<AgendaItemTemplate, number>()
  AGENDA_ITEM_LIBRARY.forEach((t, i) => globalIndexMap.set(t, i))

  // Group by category
  const grouped = filteredItems.reduce<Record<string, AgendaItemTemplate[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Search */}
      <div className="relative shrink-0 px-1 pb-2">
        <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search activities..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="h-9 border-white/10 bg-secondary/50 pl-9 text-sm"
        />
      </div>

      {/* Category Filter */}
      <div className="flex shrink-0 flex-wrap gap-1.5 px-1 pb-2">
        <Badge
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          className={cn(
            'cursor-pointer text-xs transition-colors',
            selectedCategory === 'all'
              ? 'bg-primary/20 text-primary hover:bg-primary/30'
              : 'border-white/10 hover:bg-white/5',
          )}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </Badge>
        {CATEGORIES.map(cat => (
          <Badge
            key={cat.id}
            variant="outline"
            className={cn(
              'cursor-pointer text-xs transition-colors',
              selectedCategory === cat.id
                ? 'border-transparent'
                : 'border-white/10 hover:bg-white/5',
            )}
            style={
              selectedCategory === cat.id
                ? { backgroundColor: `${cat.color}20`, color: cat.color, borderColor: `${cat.color}40` }
                : undefined
            }
            onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
          >
            {cat.label}
          </Badge>
        ))}
      </div>

      {/* Scrollable items list */}
      <div className="flex-1 overflow-y-auto px-1 pb-4">
        <div className="space-y-3">
          {Object.entries(grouped).map(([category, items]) => {
            const catColor = getCategoryColor(category as ActivityCategory)
            const catInfo = CATEGORIES.find(c => c.id === category)

            return (
              <div key={category}>
                <h4
                  className="mb-1 text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: catColor }}
                >
                  {catInfo?.label || category}
                </h4>
                <div className="space-y-0.5">
                  {items.map((item) => {
                    const gIdx = globalIndexMap.get(item) ?? 0
                    return (
                      <DraggableLibraryItem
                        key={`${item.title}-${gIdx}`}
                        item={item}
                        globalIndex={gIdx}
                        catColor={catColor}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}

          {Object.keys(grouped).length === 0 && (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No activities found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

