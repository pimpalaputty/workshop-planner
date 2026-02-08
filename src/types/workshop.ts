// Location type for workshops
export type LocationType = 'offline' | 'online'

// Activity categories for agenda items
export type ActivityCategory =
  | 'discovery'
  | 'ideation'
  | 'decision'
  | 'break'
  | 'presentation'
  | 'ice-breaker'
  | 'placeholder'
  | 'other'

// Basic building block of an agenda
export interface AgendaItem {
  id: string
  title: string
  category: ActivityCategory
  durationMinutes: number
  description?: {
    short: string
    objectives?: string[]
    outcomes?: string[]
  }
  instructions?: string
  tools?: string[]
  links?: string[]
  isFixed?: boolean
  isPlaceholder?: boolean
}

// A single day's structure in a workshop
export interface WorkshopDay {
  id: string
  dateOffset: number // 0 for first day, 1 for second, etc.
  startTime: string // "09:00"
  items: AgendaItem[]
}

// Complete workshop structure
export interface Workshop {
  id: string
  name: string
  clientName?: string
  locationType?: LocationType
  locationDetails?: string
  startDate?: string // ISO Date string
  days: WorkshopDay[]
  createdAt: string
  updatedAt: string
}

// Template structure (similar to workshop but without dates)
export interface WorkshopTemplate {
  id: string
  name: string
  description: string
  defaultStartTime: string
  days: {
    dayIndex: number
    items: Omit<AgendaItem, 'id'>[]
  }[]
}

// Predefined agenda item library
export interface AgendaItemTemplate {
  title: string
  category: ActivityCategory
  defaultDuration: number
  description?: {
    short: string
    objectives?: string[]
    outcomes?: string[]
  }
  instructions?: string
  tools?: string[]
}

// Category metadata for UI
export interface CategoryInfo {
  id: ActivityCategory
  label: string
  color: string
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'discovery', label: 'Discovery', color: 'var(--discovery)' },
  { id: 'ideation', label: 'Ideation', color: 'var(--ideation)' },
  { id: 'decision', label: 'Decision', color: 'var(--decision)' },
  { id: 'break', label: 'Break', color: 'var(--break)' },
  { id: 'presentation', label: 'Presentation', color: 'var(--presentation)' },
  { id: 'ice-breaker', label: 'Ice-breaker', color: 'var(--ice-breaker)' },
  { id: 'placeholder', label: 'Placeholder', color: 'var(--muted)' },
  { id: 'other', label: 'Other', color: 'var(--other)' },
]

export function getCategoryColor(category: ActivityCategory): string {
  const found = CATEGORIES.find(c => c.id === category)
  return found?.color || 'var(--other)'
}

export function getCategoryLabel(category: ActivityCategory): string {
  const found = CATEGORIES.find(c => c.id === category)
  return found?.label || 'Other'
}
