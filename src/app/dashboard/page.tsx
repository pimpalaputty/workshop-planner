'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Layers, Calendar, Clock, Trash2, MoreVertical, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useWorkshops } from '@/hooks/use-workshops'
import { NewWorkshopDialog } from '@/components/new-workshop-dialog'

export default function DashboardPage() {
  const { workshops, isLoaded, deleteWorkshop } = useWorkshops()
  const [showNewDialog, setShowNewDialog] = useState(false)
  const router = useRouter()

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground">Workshop Planner</span>
          </Link>
          <Button onClick={() => setShowNewDialog(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            New Workshop
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Your Workshops</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {workshops.length === 0
              ? 'Get started by creating your first workshop.'
              : `${workshops.length} workshop${workshops.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {workshops.length === 0 ? (
          /* Empty State */
          <motion.div
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 py-24"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 rounded-2xl bg-primary/10 p-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">No workshops yet</h2>
            <p className="mb-6 max-w-sm text-center text-sm text-muted-foreground">
              Create your first workshop from scratch or pick a template to get started quickly.
            </p>
            <Button onClick={() => setShowNewDialog(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Create Workshop
            </Button>
          </motion.div>
        ) : (
          /* Workshop Grid */
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {workshops
                .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
                .map((workshop, i) => {
                  const totalItems = workshop.days.reduce((acc, d) => acc + d.items.length, 0)
                  const totalMinutes = workshop.days.reduce(
                    (acc, d) => acc + d.items.reduce((a, item) => a + item.durationMinutes, 0),
                    0
                  )

                  return (
                    <motion.div
                      key={workshop.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <Card
                        className="group relative cursor-pointer border-white/10 bg-card/80 p-5 transition-all hover:border-white/20 hover:bg-card"
                        onClick={() => router.push(`/workshop/${workshop.id}`)}
                      >
                        {/* Actions dropdown */}
                        <div className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="border-white/10 bg-card">
                              <DropdownMenuItem
                                className="gap-2 text-destructive focus:text-destructive"
                                onClick={e => {
                                  e.stopPropagation()
                                  deleteWorkshop(workshop.id)
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <h3 className="mb-1 pr-8 font-semibold text-foreground">{workshop.name}</h3>

                        {workshop.clientName && (
                          <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3.5 w-3.5" />
                            {workshop.clientName}
                          </div>
                        )}

                        <div className="mt-3 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <Calendar className="h-3 w-3" />
                            {workshop.days.length} {workshop.days.length === 1 ? 'day' : 'days'}
                          </Badge>
                          {totalItems > 0 && (
                            <Badge variant="secondary" className="gap-1 text-xs">
                              {totalItems} activities
                            </Badge>
                          )}
                          {totalMinutes > 0 && (
                            <Badge variant="secondary" className="gap-1 text-xs">
                              <Clock className="h-3 w-3" />
                              {Math.round(totalMinutes / 60 * 10) / 10}h
                            </Badge>
                          )}
                        </div>

                        <p className="mt-3 text-xs text-muted-foreground">
                          Updated {new Date(workshop.updatedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </Card>
                    </motion.div>
                  )
                })}
            </AnimatePresence>
          </div>
        )}
      </main>

      <NewWorkshopDialog open={showNewDialog} onOpenChange={setShowNewDialog} />
    </div>
  )
}
