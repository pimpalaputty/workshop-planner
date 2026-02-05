'use client'

import { useMemo } from 'react'
import { useDroppable } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Plus, Trash2, Clock } from 'lucide-react'
import { WorkshopDay, AgendaItem } from '@/types/workshop'
import { addMinutesToTime, cn } from '@/lib/utils'
import { AgendaItemCard, EmptyDayPlaceholder } from './agenda-item-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// ── Constants — must match agenda-item-card.tsx ──────────
const PX_PER_MIN = 1.5
const MIN_CARD_HEIGHT = 28
const ITEM_GAP = 4   // gap-1 = 0.25rem = 4px
const CONTAINER_PAD = 4 // p-1 = 0.25rem = 4px

// ── Time-grid helpers ────────────────────────────────────

interface TimeTick {
  label: string
  px: number
  isEnd?: boolean
}

/**
 * Compute pixel positions for hour boundaries and the end-of-day marker,
 * accounting for item heights, minimum card heights, and inter-item gaps.
 */
function computeTimeTicks(startTime: string, items: AgendaItem[]): TimeTick[] {
  if (items.length === 0) return []

  const [h, m] = startTime.split(':').map(Number)
  const startTotal = h * 60 + m
  const totalDuration = items.reduce((s, i) => s + i.durationMinutes, 0)
  const endTotal = startTotal + totalDuration

  // Build cumulative minute → pixel boundaries at each item edge
  const boundaries: { min: number; px: number }[] = [{ min: 0, px: 0 }]
  let cumMin = 0
  let cumPx = 0

  items.forEach((item, i) => {
    const itemPx = Math.max(item.durationMinutes * PX_PER_MIN, MIN_CARD_HEIGHT)
    cumMin += item.durationMinutes
    cumPx += itemPx
    boundaries.push({ min: cumMin, px: cumPx })
    if (i < items.length - 1) cumPx += ITEM_GAP
  })

  // Interpolate any minute offset → pixel position
  function toPx(min: number): number {
    for (let i = 0; i < boundaries.length - 1; i++) {
      const a = boundaries[i], b = boundaries[i + 1]
      if (min >= a.min && min <= b.min) {
        const range = b.min - a.min
        if (range === 0) return a.px
        return a.px + ((min - a.min) / range) * (b.px - a.px)
      }
    }
    const last = boundaries[boundaries.length - 1]
    return last.px + (min - last.min) * PX_PER_MIN
  }

  const ticks: TimeTick[] = []

  // Start time label
  const startLabel = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
  ticks.push({ label: startLabel, px: 0 })

  // Hour ticks
  const firstHour = Math.ceil(startTotal / 60) * 60
  for (let t = firstHour; t < endTotal; t += 60) {
    const offset = t - startTotal
    if (offset <= 0) continue
    const hr = Math.floor(t / 60) % 24
    ticks.push({ label: `${hr.toString().padStart(2, '0')}:00`, px: toPx(offset) })
  }

  // End-of-day marker
  const endHr = Math.floor(endTotal / 60) % 24
  const endMn = endTotal % 60
  const endLabel = `${endHr.toString().padStart(2, '0')}:${endMn.toString().padStart(2, '0')}`
  const endPx = toPx(totalDuration)

  // If end coincides with an hour tick, mark that tick as 'end' instead of adding a duplicate
  const existingHourTick = ticks.find(t => t.label === endLabel)
  if (existingHourTick) {
    existingHourTick.isEnd = true
  } else {
    ticks.push({ label: endLabel, px: endPx, isEnd: true })
  }

  return ticks
}

// ── Sub-components ───────────────────────────────────────

/** Thin glowing line that indicates where a dragged item will land */
function InsertionIndicator() {
  return (
    <div className="relative flex h-1 items-center" aria-hidden>
      <div className="absolute inset-x-0 h-[2px] rounded-full bg-primary shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
      <div className="absolute -left-0.5 h-2 w-2 rounded-full bg-primary shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
    </div>
  )
}

// ── Main component ───────────────────────────────────────

interface DayColumnProps {
  day: WorkshopDay
  dayIndex: number
  totalDays: number
  insertAtIndex?: number | null
  onAddItem: () => void
  onEditItem: (item: AgendaItem) => void
  onDeleteItem: (itemId: string) => void
  onResizeItem: (itemId: string, newDuration: number) => void
  onDeleteDay: () => void
  onUpdateStartTime: (time: string) => void
}

export function DayColumn({
  day,
  dayIndex,
  totalDays,
  insertAtIndex,
  onAddItem,
  onEditItem,
  onDeleteItem,
  onResizeItem,
  onDeleteDay,
  onUpdateStartTime,
}: DayColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: day.id })

  const getItemStartTime = (index: number) => {
    let currentTime = day.startTime
    for (let i = 0; i < index; i++) {
      currentTime = addMinutesToTime(currentTime, day.items[i].durationMinutes)
    }
    return currentTime
  }

  const totalMinutes = day.items.reduce((acc, item) => acc + item.durationMinutes, 0)
  const endTime = addMinutesToTime(day.startTime, totalMinutes)

  const showIndicator = insertAtIndex != null

  const timeTicks = useMemo(
    () => computeTimeTicks(day.startTime, day.items),
    [day.startTime, day.items],
  )

  const hasItems = day.items.length > 0

  return (
    <div className="flex min-w-[300px] flex-1 flex-col md:min-w-[350px]">
      {/* Day Header — sticky so it stays visible while scrolling */}
      <div className="sticky top-0 z-10 mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-card px-4 py-3 backdrop-blur-sm">
        <div>
          <h3 className="font-semibold text-foreground">Day {dayIndex + 1}</h3>
          <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 shrink-0 text-muted-foreground/80" />
              <Input
                type="time"
                value={day.startTime}
                onChange={(e) => onUpdateStartTime(e.target.value)}
                className="h-5 w-[70px] border-none bg-transparent p-0 text-xs text-muted-foreground [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden"
                style={{ colorScheme: 'dark' }}
              />
              <span>— {endTime}</span>
            </span>
            <span>{totalMinutes} min total</span>
          </div>
        </div>
        {totalDays > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-destructive"
            onClick={onDeleteDay}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>

      {/* Items area with optional time ruler */}
      <div className="flex flex-1">
        {/* Time ruler — left column with hour labels */}
        {hasItems && (
          <div className="relative mr-1 w-10 shrink-0 select-none" aria-hidden>
            {timeTicks.map((tick) => (
              <div
                key={tick.label}
                className="absolute right-0 -translate-y-1/2"
                style={{ top: `${CONTAINER_PAD + tick.px}px` }}
              >
                <span
                  className={cn(
                    'text-[10px] leading-none',
                    tick.isEnd
                      ? 'font-medium text-primary/70'
                      : 'text-muted-foreground/60',
                  )}
                >
                  {tick.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Droppable items container */}
        <div
          ref={setNodeRef}
          className={cn(
            'relative flex flex-1 flex-col gap-1 rounded-xl border border-transparent p-1 transition-colors',
            (isOver || showIndicator) && 'border-primary/30 bg-primary/5',
          )}
        >
          {/* Hour lines overlay (behind items via z-0) */}
          {hasItems &&
            timeTicks.map((tick) => (
              <div
                key={'line-' + tick.label}
                className={cn(
                  'pointer-events-none absolute left-1 right-1 z-0',
                  tick.isEnd
                    ? 'border-t border-dashed border-primary/20'
                    : 'border-t border-dashed border-white/[0.06]',
                )}
                style={{ top: `${CONTAINER_PAD + tick.px}px` }}
              />
            ))}

          <SortableContext
            items={day.items.map(i => i.id)}
            strategy={verticalListSortingStrategy}
          >
            {day.items.length === 0 ? (
              showIndicator ? <InsertionIndicator /> : <EmptyDayPlaceholder />
            ) : (
              <>
                {day.items.map((item, index) => (
                  <div key={item.id} className="relative z-[1]">
                    {showIndicator && insertAtIndex === index && <InsertionIndicator />}
                    <AgendaItemCard
                      item={item}
                      startTime={getItemStartTime(index)}
                      onEdit={onEditItem}
                      onDelete={onDeleteItem}
                      onResize={onResizeItem}
                    />
                  </div>
                ))}
                {showIndicator && insertAtIndex === day.items.length && <InsertionIndicator />}
              </>
            )}
          </SortableContext>

          {/* Add item button */}
          <button
            onClick={onAddItem}
            className="relative z-[1] flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/10 py-2.5 text-xs text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Activity
          </button>
        </div>
      </div>
    </div>
  )
}
