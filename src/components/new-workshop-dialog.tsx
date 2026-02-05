'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { FileText, Calendar, Clock, ArrowRight } from 'lucide-react'
import { Workshop, WorkshopDay, AgendaItem } from '@/types/workshop'
import { WORKSHOP_TEMPLATES } from '@/lib/templates'
import { generateId } from '@/lib/utils'
import { saveWorkshop } from '@/lib/storage'

interface NewWorkshopDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated?: (workshop: Workshop) => void
}

export function NewWorkshopDialog({ open, onOpenChange, onCreated }: NewWorkshopDialogProps) {
  const router = useRouter()
  const [step, setStep] = useState<'choose' | 'templates'>('choose')

  const createBlank = () => {
    const now = new Date().toISOString()
    const workshop: Workshop = {
      id: generateId(),
      name: 'Untitled Workshop',
      days: [
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
    onCreated?.(workshop)
    onOpenChange(false)
    setStep('choose')
    router.push(`/workshop/${workshop.id}`)
  }

  const createFromTemplate = (templateId: string) => {
    const template = WORKSHOP_TEMPLATES.find(t => t.id === templateId)
    if (!template) return

    const now = new Date().toISOString()
    const days: WorkshopDay[] = template.days.map(td => ({
      id: generateId(),
      dateOffset: td.dayIndex,
      startTime: template.defaultStartTime,
      items: td.items.map(
        (item): AgendaItem => ({
          id: generateId(),
          ...item,
        })
      ),
    }))

    const workshop: Workshop = {
      id: generateId(),
      name: template.name,
      days,
      createdAt: now,
      updatedAt: now,
    }
    saveWorkshop(workshop)
    onCreated?.(workshop)
    onOpenChange(false)
    setStep('choose')
    router.push(`/workshop/${workshop.id}`)
  }

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open)
    if (!open) setStep('choose')
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl border-white/10 bg-card sm:max-w-2xl">
        {step === 'choose' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Create New Workshop</DialogTitle>
              <DialogDescription>Start from scratch or use a proven template.</DialogDescription>
            </DialogHeader>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <button
                onClick={createBlank}
                className="group flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-secondary/50 p-5 text-left transition-all hover:border-primary/50 hover:bg-secondary"
              >
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Blank Workshop</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Start with an empty single-day agenda and build from scratch.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setStep('templates')}
                className="group flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-secondary/50 p-5 text-left transition-all hover:border-primary/50 hover:bg-secondary"
              >
                <div className="rounded-lg bg-pink-500/10 p-2.5">
                  <Calendar className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">From Template</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Use a pre-built template like Design Sprint, LDJ, or Brand Sprint.
                  </p>
                </div>
              </button>
            </div>
          </>
        )}

        {step === 'templates' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Choose a Template</DialogTitle>
              <DialogDescription>
                Select a workshop template to get started quickly.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="mt-4 max-h-[400px] pr-4">
              <div className="space-y-3">
                {WORKSHOP_TEMPLATES.map(template => {
                  const totalItems = template.days.reduce((acc, d) => acc + d.items.length, 0)
                  const totalMinutes = template.days.reduce(
                    (acc, d) => acc + d.items.reduce((a, i) => a + i.durationMinutes, 0),
                    0
                  )
                  const totalHours = Math.round(totalMinutes / 60 * 10) / 10

                  return (
                    <button
                      key={template.id}
                      onClick={() => createFromTemplate(template.id)}
                      className="group flex w-full items-start justify-between rounded-xl border border-white/10 bg-secondary/30 p-4 text-left transition-all hover:border-primary/50 hover:bg-secondary/60"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{template.name}</h3>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {template.description}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <Calendar className="h-3 w-3" />
                            {template.days.length} {template.days.length === 1 ? 'day' : 'days'}
                          </Badge>
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <Clock className="h-3 w-3" />
                            ~{totalHours}h
                          </Badge>
                          <Badge variant="secondary" className="gap-1 text-xs">
                            {totalItems} activities
                          </Badge>
                        </div>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  )
                })}
              </div>
            </ScrollArea>
            <Separator className="bg-white/10" />
            <div className="flex justify-start">
              <Button variant="ghost" size="sm" onClick={() => setStep('choose')}>
                Back
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
