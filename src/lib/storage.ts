'use client'

import { Workshop } from '@/types/workshop'

const STORAGE_KEY = 'workshop-planner-workshops'

export function loadWorkshops(): Workshop[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveWorkshops(workshops: Workshop[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workshops))
}

export function loadWorkshop(id: string): Workshop | null {
  const workshops = loadWorkshops()
  return workshops.find(w => w.id === id) || null
}

export function saveWorkshop(workshop: Workshop): void {
  const workshops = loadWorkshops()
  const index = workshops.findIndex(w => w.id === workshop.id)
  const updated = { ...workshop, updatedAt: new Date().toISOString() }
  if (index >= 0) {
    workshops[index] = updated
  } else {
    workshops.push(updated)
  }
  saveWorkshops(workshops)
}

export function deleteWorkshop(id: string): void {
  const workshops = loadWorkshops().filter(w => w.id !== id)
  saveWorkshops(workshops)
}
