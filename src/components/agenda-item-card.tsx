'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Trash2 } from 'lucide-react'
import { AgendaItem, getCategoryColor } from '@/types/workshop'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

// 1 minute = 1.5px height — tweak this to taste
const PX_PER_MIN = 1.5
const MIN_HEIGHT = 28 // minimum card height in px
const STEP = 5 // snap to 5-minute increments

function heightForDuration(minutes: number) {
  return Math.max(minutes * PX_PER_MIN, MIN_HEIGHT)
}

interface AgendaItemCardProps {
  item: AgendaItem
  startTime: string
  onEdit: (item: AgendaItem) => void
  onDelete: (itemId: string) => void
  onResize?: (itemId: string, newDuration: number) => void
}

export function AgendaItemCard({ item, startTime, onEdit, onDelete, onResize }: AgendaItemCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id })

  const [isResizing, setIsResizing] = useState(false)
  const [previewDuration, setPreviewDuration] = useState<number | null>(null)

  // Track whether a drag or resize just completed so we can suppress the
  // click that the browser fires after pointerup on the same element.
  const suppressClickRef = useRef(false)
  useEffect(() => {
    if (isDragging) {
      suppressClickRef.current = true
    }
  }, [isDragging])
  useEffect(() => {
    if (isResizing) {
      suppressClickRef.current = true
    }
  }, [isResizing])

  const handleClick = () => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false
      return
    }
    onEdit(item)
  }

  const displayDuration = previewDuration ?? item.durationMinutes
  const cardHeight = heightForDuration(displayDuration)

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isResizing ? 'none' : transition,
    height: `${cardHeight}px`,
  }

  const categoryColor = getCategoryColor(item.category)

  // ---- resize by dragging bottom edge ----
  const handleResizeStart = useCallback(
    (e: React.PointerEvent) => {
      if (!onResize) return
      e.preventDefault()
      e.stopPropagation()
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)

      setIsResizing(true)
      const startY = e.clientY
      const startDuration = item.durationMinutes

      const onMove = (me: PointerEvent) => {
        const dy = me.clientY - startY
        const rawMinutes = startDuration + dy / PX_PER_MIN
        // snap to nearest STEP, minimum STEP
        const snapped = Math.max(STEP, Math.round(rawMinutes / STEP) * STEP)
        setPreviewDuration(snapped)
      }

      const onUp = () => {
        setIsResizing(false)
        const final = previewDurationRef.current ?? item.durationMinutes
        setPreviewDuration(null)
        if (final !== item.durationMinutes) onResize(item.id, final)
        document.removeEventListener('pointermove', onMove)
        document.removeEventListener('pointerup', onUp)
      }

      document.addEventListener('pointermove', onMove)
      document.addEventListener('pointerup', onUp)
    },
    [item.id, item.durationMinutes, onResize],
  )

  // keep a ref so the onUp closure always reads the latest preview
  const previewDurationRef = useRef<number | null>(null)
  previewDurationRef.current = previewDuration

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={handleClick}
      className={cn(
        'group relative flex cursor-grab flex-col overflow-hidden rounded-lg border border-white/10 bg-secondary/60 transition-colors active:cursor-grabbing',
        isDragging && 'z-50 opacity-50 shadow-lg shadow-primary/20',
        isResizing && 'z-50 border-primary/40',
        !isDragging && !isResizing && 'hover:border-white/20 hover:bg-secondary/80',
      )}
    >
      {/* Category color bar */}
      <div
        className="absolute left-0 top-0 h-full w-1 rounded-l-lg"
        style={{ backgroundColor: categoryColor }}
      />

      {/* Content row */}
      <div className="flex min-h-0 flex-1 items-start overflow-hidden pl-3">
        {/* Title + duration */}
        <div className="min-w-0 flex-1 py-1 px-1">
          <span className={cn(
            'text-sm leading-tight text-foreground',
            cardHeight <= 36 ? 'line-clamp-1' : 'line-clamp-3',
          )}>
            {item.title}
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">{displayDuration}m</span>
        </div>

        {/* Delete button — hidden on mobile, visible on desktop hover */}
        <div className="hidden shrink-0 items-center pr-2 pt-1 opacity-0 transition-opacity group-hover:opacity-100 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-destructive hover:text-destructive"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation()
              onDelete(item.id)
            }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Resize handle at bottom — hidden on mobile (touch conflicts with scroll) */}
      {onResize && (
        <div
          onPointerDown={handleResizeStart}
          className={cn(
            'absolute bottom-0 left-1 right-0 hidden h-3 cursor-s-resize items-end justify-center pb-0.5 transition-opacity md:flex',
            isResizing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
          )}
        >
          <div className="h-[2px] w-10 rounded-full bg-white/30" />
        </div>
      )}
    </div>
  )
}

// Droppable placeholder for empty days
export function EmptyDayPlaceholder() {
  return (
    <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-white/10 text-sm text-muted-foreground">
      Drag activities here or click + to add
    </div>
  )
}
