'use client'

import { use, useState, useCallback, useRef, useMemo } from 'react'
import Link from 'next/link'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  pointerWithin,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  useDroppable,
  DragOverlay,
  type CollisionDetection,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Settings,
  Plus,
  Calendar,
  Clock,
  Users,
  MapPin,
  Trash2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWorkshopEditor } from '@/hooks/use-workshops'
import { DayColumn } from '@/components/day-column'
import {
  ActivityLibraryContent,
  isLibraryDragId,
} from '@/components/activity-library'
import { EditItemSheet } from '@/components/edit-item-sheet'
import { WorkshopSettingsDialog } from '@/components/workshop-settings-dialog'
import { AgendaItem, AgendaItemTemplate, ActivityCategory, getCategoryColor } from '@/types/workshop'
import { AGENDA_ITEM_LIBRARY } from '@/lib/templates'
import { cn, generateId } from '@/lib/utils'

// ── Constants ─────────────────────────────────────────────
const TRASH_ZONE_ID = '__trash__'

// ── Insertion-indicator state ─────────────────────────────
interface InsertIndicator {
  dayId: string
  index: number
}

// ── Trash drop-zone that appears at the bottom during a drag ──
function TrashDropZone() {
  const { setNodeRef, isOver } = useDroppable({ id: TRASH_ZONE_ID })
  return (
    <motion.div
      ref={setNodeRef}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 60, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 border-t py-4 transition-colors duration-150',
        isOver
          ? 'border-destructive/50 bg-destructive/20 text-destructive'
          : 'border-white/10 bg-card/80 text-muted-foreground backdrop-blur',
      )}
    >
      <Trash2 className={cn('h-5 w-5 transition-transform', isOver && 'scale-125')} />
      <span className="text-sm font-medium">
        {isOver ? 'Release to delete' : 'Drag here to delete'}
      </span>
    </motion.div>
  )
}

export default function WorkshopEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const {
    workshop,
    isLoaded,
    addItem,
    removeItem,
    updateItem,
    reorderItems,
    moveItem,
    addDay,
    removeDay,
    updateMeta,
    updateDay,
  } = useWorkshopEditor(id)

  const [editingItem, setEditingItem] = useState<{ dayId: string; item: AgendaItem } | null>(null)
  const [showSettings, setShowSettings] = useState(false)
  const [activeDayForAdd, setActiveDayForAdd] = useState<string | null>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [insertIndicator, setInsertIndicator] = useState<InsertIndicator | null>(null)

  // Keep indicator in a ref so handleDragEnd always reads the latest value
  const insertIndicatorRef = useRef<InsertIndicator | null>(null)
  insertIndicatorRef.current = insertIndicator

  // DnD sensors
  // MouseSensor for desktop (activates after 8px movement).
  // TouchSensor for mobile with a longer delay so quick swipes scroll
  // the list / day columns instead of starting a drag.
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 300, tolerance: 8 } }),
  )

  // Set of day-container IDs — used to distinguish "day" droppables from
  // "agenda-item" sortables inside the custom collision detection.
  const dayIdSet = useMemo(
    () => new Set(workshop?.days.map(d => d.id) ?? []),
    [workshop?.days],
  )

  // Map every agenda-item ID → its parent day ID so the collision detection
  // can scope closestCenter to only the day the pointer is actually inside.
  const itemToDayMap = useMemo(() => {
    const map = new Map<string, string>()
    workshop?.days.forEach(day => {
      day.items.forEach(item => map.set(item.id, day.id))
    })
    return map
  }, [workshop?.days])

  // Custom collision detection: pointerWithin first, then closestCenter
  // (scoped to the hovered day) when the pointer lands in the CSS-gap.
  const collisionDetection: CollisionDetection = useCallback(
    (args) => {
      const pw = pointerWithin(args)

      // Did pointerWithin hit an actual agenda-item (not just a day container)?
      const itemHits = pw.filter(c => !dayIdSet.has(String(c.id)))
      if (itemHits.length > 0) return itemHits

      // Pointer is inside a day container but in the gap between cards →
      // use closestCenter, but scoped to items inside THAT day only.
      if (pw.length > 0) {
        // Which day container did the pointer land in?
        const dayHit = pw.find(c => dayIdSet.has(String(c.id)))
        const targetDayId = dayHit ? String(dayHit.id) : null

        const cc = closestCenter(args)
        const ccItems = cc.filter(c => {
          const cId = String(c.id)
          // Skip day containers themselves
          if (dayIdSet.has(cId)) return false
          // Keep only items that belong to the detected day
          if (targetDayId && itemToDayMap.get(cId) !== targetDayId) return false
          return true
        })
        if (ccItems.length > 0) return ccItems

        // No items in that day (empty day) → return the day container
        return pw
      }

      // Pointer is completely outside every day container →
      // return nothing so `over` becomes null and the drop is cancelled.
      return []
    },
    [dayIdSet, itemToDayMap],
  )

  // ── helpers ──────────────────────────────────────────────

  const handleAddFromLibrary = useCallback(
    (template: AgendaItemTemplate, dayId?: string) => {
      const targetDayId = dayId || activeDayForAdd || workshop?.days[0]?.id
      if (!targetDayId) return
      const item: AgendaItem = {
        id: generateId(),
        title: template.title,
        category: template.category,
        durationMinutes: template.defaultDuration,
        description: template.description,
        instructions: template.instructions,
        tools: template.tools,
      }
      addItem(targetDayId, item)
      setActiveDayForAdd(null)
    },
    [workshop, activeDayForAdd, addItem],
  )

  const findDayContainingItem = useCallback(
    (itemId: string) => {
      if (!workshop) return null
      return workshop.days.find(day => day.items.some(item => item.id === itemId))
    },
    [workshop],
  )

  // ── DnD handlers ────────────────────────────────────────

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
    setInsertIndicator(null)
    // NOTE: we do NOT unmount the bottom-sheet here — we only hide it via
    // CSS (see render). Unmounting would destroy the DraggableLibraryItem
    // node and dnd-kit would cancel the drag. The sheet is unmounted later
    // in handleDragEnd / handleDragCancel.
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over || !workshop) {
      setInsertIndicator(null)
      return
    }

    const activeIdStr = active.id as string
    const overId = over.id as string

    // Hovering over the trash zone → clear indicator, nothing else to do
    if (overId === TRASH_ZONE_ID) {
      setInsertIndicator(null)
      return
    }

    // Is the dragged item from the library?
    const isFromLibrary = isLibraryDragId(activeIdStr)
    // Source day of an existing agenda item
    const sourceDayOfActive = isFromLibrary ? null : findDayContainingItem(activeIdStr)

    let targetDayId: string | null = null
    let insertIndex = 0

    // Hovering over a day container?
    const dayTarget = workshop.days.find(d => d.id === overId)
    if (dayTarget) {
      targetDayId = dayTarget.id
      insertIndex = dayTarget.items.length
    } else {
      // Hovering over an existing agenda item
      const dayContaining = findDayContainingItem(overId)
      if (dayContaining) {
        targetDayId = dayContaining.id
        const idx = dayContaining.items.findIndex(i => i.id === overId)

        // Determine before / after by comparing the translated active rect
        // center-Y against the over element's midpoint
        const overRect = over.rect
        const translated = active.rect.current.translated
        if (translated && overRect) {
          const activeCenterY = translated.top + translated.height / 2
          const overCenterY = overRect.top + overRect.height / 2
          insertIndex = activeCenterY < overCenterY ? idx : idx + 1
        } else {
          insertIndex = idx
        }
      }
    }

    // For within-day reordering dnd-kit/sortable already provides visual
    // feedback (items shift apart), so we skip the manual indicator.
    if (!isFromLibrary && sourceDayOfActive?.id === targetDayId) {
      setInsertIndicator(null)
      return
    }

    if (targetDayId != null) {
      setInsertIndicator({ dayId: targetDayId, index: insertIndex })
    } else {
      setInsertIndicator(null)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const indicator = insertIndicatorRef.current
    setActiveId(null)
    setInsertIndicator(null)
    // Now that the drag is finished we can safely unmount the bottom sheet
    setActiveDayForAdd(null)
    if (!over || !workshop) return

    const activeIdStr = active.id as string
    const overId = over.id as string

    // ── Dropped on the trash zone → delete existing item, ignore library items ──
    if (overId === TRASH_ZONE_ID) {
      if (!isLibraryDragId(activeIdStr)) {
        const sourceDay = findDayContainingItem(activeIdStr)
        if (sourceDay) {
          removeItem(sourceDay.id, activeIdStr)
        }
      }
      return
    }

    // ── Drop from library ──
    if (isLibraryDragId(activeIdStr)) {
      const template = active.data.current?.template as AgendaItemTemplate | undefined
      if (!template) return

      let targetDayId: string | null = null
      let insertIndex: number | undefined

      // Prefer the tracked indicator position for accuracy
      if (indicator) {
        targetDayId = indicator.dayId
        insertIndex = indicator.index
      } else {
        // Fallback: derive from `over`
        const dayTarget = workshop.days.find(d => d.id === overId)
        if (dayTarget) {
          targetDayId = dayTarget.id
        } else {
          const dayContaining = findDayContainingItem(overId)
          if (dayContaining) {
            targetDayId = dayContaining.id
            const idx = dayContaining.items.findIndex(i => i.id === overId)
            insertIndex = idx >= 0 ? idx : undefined
          }
        }
      }

      if (!targetDayId) targetDayId = workshop.days[0]?.id
      if (!targetDayId) return

      const newItem: AgendaItem = {
        id: generateId(),
        title: template.title,
        category: template.category,
        durationMinutes: template.defaultDuration,
        description: template.description,
        instructions: template.instructions,
        tools: template.tools,
      }
      addItem(targetDayId, newItem, insertIndex)
      return
    }

    // ── Reorder / cross-day move existing items ──
    const sourceDay = findDayContainingItem(activeIdStr)
    if (!sourceDay) return

    // Cross-day move using the precise indicator position
    if (indicator && indicator.dayId !== sourceDay.id) {
      moveItem(sourceDay.id, indicator.dayId, activeIdStr, indicator.index)
      return
    }

    // Dropped on a day container (empty day)?
    const targetDay = workshop.days.find(d => d.id === overId)
    if (targetDay && targetDay.id !== sourceDay.id) {
      moveItem(sourceDay.id, targetDay.id, activeIdStr, targetDay.items.length)
      return
    }

    // Within-day reorder
    const destDay = findDayContainingItem(overId)
    if (destDay && sourceDay.id === destDay.id) {
      const oldIndex = sourceDay.items.findIndex(i => i.id === activeIdStr)
      const newIndex = sourceDay.items.findIndex(i => i.id === overId)
      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        reorderItems(sourceDay.id, arrayMove(sourceDay.items, oldIndex, newIndex))
      }
    } else if (destDay) {
      const overIndex = destDay.items.findIndex(i => i.id === overId)
      moveItem(sourceDay.id, destDay.id, activeIdStr, overIndex >= 0 ? overIndex : destDay.items.length)
    }
  }

  const handleDragCancel = () => {
    setActiveId(null)
    setInsertIndicator(null)
    setActiveDayForAdd(null)
  }

  const handleResizeItem = useCallback(
    (dayId: string, itemId: string, newDuration: number) => {
      updateItem(dayId, itemId, { durationMinutes: newDuration })
    },
    [updateItem],
  )

  // ── Overlay data for the item currently being dragged ───
  const getOverlayData = (): {
    title: string
    duration: number
    category: ActivityCategory
  } | null => {
    if (!activeId) return null
    if (isLibraryDragId(activeId)) {
      const idx = Number(activeId.split('::')[1])
      const t = AGENDA_ITEM_LIBRARY[idx]
      if (!t) return null
      return { title: t.title, duration: t.defaultDuration, category: t.category }
    }
    const item = workshop?.days.flatMap(d => d.items).find(i => i.id === activeId)
    if (!item) return null
    return { title: item.title, duration: item.durationMinutes, category: item.category }
  }

  // ── Loading / not-found states ──────────────────────────

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!workshop) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h1 className="mb-4 text-xl font-bold text-foreground">Workshop not found</h1>
        <Link href="/dashboard">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    )
  }

  const totalItems = workshop.days.reduce((acc, d) => acc + d.items.length, 0)
  const totalMinutes = workshop.days.reduce(
    (acc, d) => acc + d.items.reduce((a, i) => a + i.durationMinutes, 0),
    0,
  )

  // ── Render ──────────────────────────────────────────────

  return (
    <div className="h-screen overflow-auto bg-background">
      {/* Header — sticky left-0 keeps it pinned horizontally while
           it scrolls out of view vertically */}
      <header className="sticky left-0 border-b border-white/10 bg-background">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-foreground">{workshop.name}</h1>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowSettings(true)}>
                  <Settings className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                {workshop.clientName && (
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" />{workshop.clientName}</span>
                )}
                {workshop.startDate && (
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(workshop.startDate).toLocaleDateString()}</span>
                )}
                {workshop.locationDetails && (
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{workshop.locationDetails}</span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {workshop.days.length} {workshop.days.length === 1 ? 'day' : 'days'} · {totalItems} activities · {Math.round(totalMinutes / 60 * 10) / 10}h
                </span>
              </div>
            </div>
          </div>

          <div />

        </div>
      </header>

      {/* DndContext wraps BOTH the agenda columns AND the desktop sidebar */}
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        {/* Agenda columns */}
        <div className="mx-auto flex w-fit gap-4 p-4 md:p-6">
            {workshop.days.map((day, index) => (
              <motion.div
                key={day.id}
                className="flex min-w-[300px] max-w-[480px] flex-1 md:min-w-[350px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <DayColumn
                  day={day}
                  dayIndex={index}
                  totalDays={workshop.days.length}
                  insertAtIndex={insertIndicator?.dayId === day.id ? insertIndicator.index : null}
                  onAddItem={() => setActiveDayForAdd(day.id)}
                  onEditItem={(item) => setEditingItem({ dayId: day.id, item })}
                  onDeleteItem={(itemId) => removeItem(day.id, itemId)}
                  onResizeItem={(itemId, dur) => handleResizeItem(day.id, itemId, dur)}
                  onDeleteDay={() => removeDay(day.id)}
                  onUpdateStartTime={(t) => updateDay(day.id, { startTime: t })}
                />
              </motion.div>
            ))}

            {/* Add Day button — appears as a slim column after the last day */}
            <motion.div
              className="flex min-w-[120px] shrink-0 flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: workshop.days.length * 0.1 }}
            >
              <button
                onClick={addDay}
                className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/10 px-6 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                <Plus className="mr-1.5 h-4 w-4" />
                Add Day
              </button>
            </motion.div>
          </div>

        {/* Bottom-sheet picker (for a specific day's "Add Activity")
             Lives INSIDE DndContext so library items are draggable from here too.
             During an active drag (activeId != null) we hide it via CSS rather
             than unmounting — unmounting would destroy the draggable source node
             and dnd-kit would cancel the drag. */}
        {activeDayForAdd && (
          <div
            className={cn(
              'fixed inset-0 z-50 transition-opacity duration-150',
              activeId ? 'pointer-events-none opacity-0' : 'bg-black/50',
            )}
            onClick={() => setActiveDayForAdd(null)}
          >
            <motion.div
              className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-hidden rounded-t-2xl border-t border-white/10 bg-card p-4"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Add Activity</h3>
                <Button variant="ghost" size="sm" onClick={() => setActiveDayForAdd(null)}>Close</Button>
              </div>
              <div className="h-[50vh]">
                <ActivityLibraryContent
                  onSelectItem={(item) => handleAddFromLibrary(item, activeDayForAdd)}
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Trash drop zone — shown at the bottom during any drag */}
        {activeId && <TrashDropZone />}

        {/* FAB — opens the activity library bottom sheet */}
        {!activeDayForAdd && !activeId && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => setActiveDayForAdd(workshop.days[0]?.id ?? null)}
            className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
          >
            <Plus className="h-6 w-6" />
          </motion.button>
        )}

        {/* Drag overlay — shows a mini preview card */}
        <DragOverlay dropAnimation={null}>
          {(() => {
            const data = getOverlayData()
            if (!data) return null
            const catColor = getCategoryColor(data.category)
            return (
              <div className="pointer-events-none relative flex items-center rounded-lg border border-primary/30 bg-card/95 py-1.5 pl-4 pr-3 shadow-lg shadow-primary/20 backdrop-blur">
                {/* Category color bar */}
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-l-lg"
                  style={{ backgroundColor: catColor }}
                />
                <span className="truncate text-sm font-medium text-foreground">{data.title}</span>
                <span className="ml-2 shrink-0 text-xs text-muted-foreground">{data.duration}m</span>
              </div>
            )
          })()}
        </DragOverlay>
      </DndContext>

      {/* Edit Item Sheet */}
      <EditItemSheet
        item={editingItem?.item || null}
        open={!!editingItem}
        onOpenChange={(open) => { if (!open) setEditingItem(null) }}
        onSave={(changes) => { if (editingItem) updateItem(editingItem.dayId, editingItem.item.id, changes) }}
      />

      {/* Workshop Settings Dialog */}
      <WorkshopSettingsDialog
        workshop={workshop}
        open={showSettings}
        onOpenChange={setShowSettings}
        onSave={(changes) => updateMeta(changes)}
      />
    </div>
  )
}
