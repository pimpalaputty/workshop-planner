'use client'

import { useState, useEffect, useCallback } from 'react'
import { Workshop, WorkshopDay, AgendaItem } from '@/types/workshop'
import { loadWorkshops, saveWorkshop, deleteWorkshop as removeWorkshop } from '@/lib/storage'
import { generateId } from '@/lib/utils'

export function useWorkshops() {
  const [workshops, setWorkshops] = useState<Workshop[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setWorkshops(loadWorkshops())
    setIsLoaded(true)
  }, [])

  const createWorkshop = useCallback((name?: string, days?: WorkshopDay[]): Workshop => {
    const now = new Date().toISOString()
    const workshop: Workshop = {
      id: generateId(),
      name: name || 'Untitled Workshop',
      days: days || [
        {
          id: generateId(),
          dateOffset: 0,
          startTime: '09:00',
          items: [],
        },
      ],
      createdAt: now,
      updatedAt: now,
    }
    saveWorkshop(workshop)
    setWorkshops(prev => [...prev, workshop])
    return workshop
  }, [])

  const updateWorkshop = useCallback((workshop: Workshop) => {
    saveWorkshop(workshop)
    setWorkshops(prev => prev.map(w => (w.id === workshop.id ? { ...workshop, updatedAt: new Date().toISOString() } : w)))
  }, [])

  const deleteWorkshop = useCallback((id: string) => {
    removeWorkshop(id)
    setWorkshops(prev => prev.filter(w => w.id !== id))
  }, [])

  return { workshops, isLoaded, createWorkshop, updateWorkshop, deleteWorkshop }
}

// Hook for a single workshop in the editor
export function useWorkshopEditor(id: string) {
  const [workshop, setWorkshop] = useState<Workshop | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const workshops = loadWorkshops()
    const found = workshops.find(w => w.id === id) || null
    setWorkshop(found)
    setIsLoaded(true)
  }, [id])

  const save = useCallback((updated: Workshop) => {
    saveWorkshop(updated)
    setWorkshop({ ...updated, updatedAt: new Date().toISOString() })
  }, [])

  // Add an agenda item to a specific day
  const addItem = useCallback((dayId: string, item: AgendaItem, index?: number) => {
    if (!workshop) return
    const updated = {
      ...workshop,
      days: workshop.days.map(day => {
        if (day.id !== dayId) return day
        const newItems = [...day.items]
        if (index !== undefined) {
          newItems.splice(index, 0, item)
        } else {
          newItems.push(item)
        }
        return { ...day, items: newItems }
      }),
    }
    save(updated)
  }, [workshop, save])

  // Remove an agenda item
  const removeItem = useCallback((dayId: string, itemId: string) => {
    if (!workshop) return
    const updated = {
      ...workshop,
      days: workshop.days.map(day => {
        if (day.id !== dayId) return day
        return { ...day, items: day.items.filter(i => i.id !== itemId) }
      }),
    }
    save(updated)
  }, [workshop, save])

  // Update an agenda item
  const updateItem = useCallback((dayId: string, itemId: string, changes: Partial<AgendaItem>) => {
    if (!workshop) return
    const updated = {
      ...workshop,
      days: workshop.days.map(day => {
        if (day.id !== dayId) return day
        return {
          ...day,
          items: day.items.map(i => (i.id === itemId ? { ...i, ...changes } : i)),
        }
      }),
    }
    save(updated)
  }, [workshop, save])

  // Reorder items within a day
  const reorderItems = useCallback((dayId: string, items: AgendaItem[]) => {
    if (!workshop) return
    const updated = {
      ...workshop,
      days: workshop.days.map(day => {
        if (day.id !== dayId) return day
        return { ...day, items }
      }),
    }
    save(updated)
  }, [workshop, save])

  // Move item between days
  const moveItem = useCallback((fromDayId: string, toDayId: string, itemId: string, toIndex: number) => {
    if (!workshop) return
    const fromDay = workshop.days.find(d => d.id === fromDayId)
    if (!fromDay) return
    const item = fromDay.items.find(i => i.id === itemId)
    if (!item) return

    const updated = {
      ...workshop,
      days: workshop.days.map(day => {
        if (day.id === fromDayId) {
          return { ...day, items: day.items.filter(i => i.id !== itemId) }
        }
        if (day.id === toDayId) {
          const newItems = [...day.items]
          newItems.splice(toIndex, 0, item)
          return { ...day, items: newItems }
        }
        return day
      }),
    }
    save(updated)
  }, [workshop, save])

  // Add a new day
  const addDay = useCallback(() => {
    if (!workshop) return
    const newDay: WorkshopDay = {
      id: generateId(),
      dateOffset: workshop.days.length,
      startTime: workshop.days[0]?.startTime || '09:00',
      items: [],
    }
    const updated = { ...workshop, days: [...workshop.days, newDay] }
    save(updated)
  }, [workshop, save])

  // Remove a day
  const removeDay = useCallback((dayId: string) => {
    if (!workshop || workshop.days.length <= 1) return
    const updated = {
      ...workshop,
      days: workshop.days
        .filter(d => d.id !== dayId)
        .map((d, i) => ({ ...d, dateOffset: i })),
    }
    save(updated)
  }, [workshop, save])

  // Update workshop metadata
  const updateMeta = useCallback((changes: Partial<Omit<Workshop, 'id' | 'days' | 'createdAt' | 'updatedAt'>>) => {
    if (!workshop) return
    const updated = { ...workshop, ...changes }
    save(updated)
  }, [workshop, save])

  // Update day metadata  
  const updateDay = useCallback((dayId: string, changes: Partial<Omit<WorkshopDay, 'id' | 'items'>>) => {
    if (!workshop) return
    const updated = {
      ...workshop,
      days: workshop.days.map(day => {
        if (day.id !== dayId) return day
        return { ...day, ...changes }
      }),
    }
    save(updated)
  }, [workshop, save])

  return {
    workshop,
    isLoaded,
    save,
    addItem,
    removeItem,
    updateItem,
    reorderItems,
    moveItem,
    addDay,
    removeDay,
    updateMeta,
    updateDay,
  }
}
