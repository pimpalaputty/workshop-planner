'use client'

import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Clock, X, Plus, LinkIcon, Wrench } from 'lucide-react'
import { AgendaItem, ActivityCategory, CATEGORIES, getCategoryColor } from '@/types/workshop'
import { cn } from '@/lib/utils'

interface EditItemSheetProps {
  item: AgendaItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (changes: Partial<AgendaItem>) => void
}

export function EditItemSheet({ item, open, onOpenChange, onSave }: EditItemSheetProps) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<ActivityCategory>('other')
  const [durationMinutes, setDurationMinutes] = useState(15)
  const [shortDescription, setShortDescription] = useState('')
  const [objectives, setObjectives] = useState('')
  const [outcomes, setOutcomes] = useState('')
  const [instructions, setInstructions] = useState('')
  const [tools, setTools] = useState<string[]>([])
  const [links, setLinks] = useState<string[]>([])
  const [newTool, setNewTool] = useState('')
  const [newLink, setNewLink] = useState('')

  useEffect(() => {
    if (item) {
      setTitle(item.title)
      setCategory(item.category)
      setDurationMinutes(item.durationMinutes)

      if (typeof item.description === 'string') {
        setShortDescription(item.description)
        setObjectives('')
        setOutcomes('')
      } else {
        setShortDescription(item.description?.short || '')
        setObjectives(item.description?.objectives?.join('\n') || '')
        setOutcomes(item.description?.outcomes?.join('\n') || '')
      }

      setInstructions(item.instructions || '')
      setTools(item.tools || [])
      setLinks(item.links || [])
    }
  }, [item])

  const handleSave = () => {
    onSave({
      title,
      category,
      durationMinutes,
      description: {
        short: shortDescription,
        objectives: objectives.split('\n').filter(line => line.trim().length > 0),
        outcomes: outcomes.split('\n').filter(line => line.trim().length > 0),
      },
      instructions: instructions || undefined,
      tools: tools.length > 0 ? tools : undefined,
      links: links.length > 0 ? links : undefined,
    })
    onOpenChange(false)
  }

  const addTool = () => {
    if (newTool.trim()) {
      setTools(prev => [...prev, newTool.trim()])
      setNewTool('')
    }
  }

  const addLink = () => {
    if (newLink.trim()) {
      setLinks(prev => [...prev, newLink.trim()])
      setNewLink('')
    }
  }

  if (!item) return null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full border-white/10 bg-card sm:max-w-md"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="pb-4">
          <SheetTitle className="text-lg">Edit Activity</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 overflow-y-auto px-4 pb-24 h-[calc(100vh-80px)]">
          {/* Title */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Title</Label>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="border-white/10 bg-secondary/50"
              placeholder="Activity name"
            />
          </div>

          {/* Category & Duration row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Category</Label>
              <Select value={category} onValueChange={(v) => setCategory(v as ActivityCategory)}>
                <SelectTrigger className="border-white/10 bg-secondary/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-card">
                  {CATEGORIES.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        {cat.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                Duration (min)
              </Label>
              <Input
                type="number"
                min={5}
                step={5}
                value={durationMinutes}
                onChange={e => setDurationMinutes(Math.max(5, parseInt(e.target.value) || 5))}
                className="border-white/10 bg-secondary/50"
              />
            </div>
          </div>

          {/* Quick duration buttons */}
          <div className="flex flex-wrap gap-1.5">
            {[5, 10, 15, 20, 30, 45, 60, 90, 120].map(d => (
              <Button
                key={d}
                variant="outline"
                size="sm"
                className={cn(
                  'h-7 border-white/10 px-2.5 text-xs',
                  durationMinutes === d && 'border-primary/50 bg-primary/10 text-primary'
                )}
                onClick={() => setDurationMinutes(d)}
              >
                {d}m
              </Button>
            ))}
          </div>

          <Separator className="bg-white/10" />

          {/* Short Description */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Short Description</Label>
            <Textarea
              value={shortDescription}
              onChange={e => setShortDescription(e.target.value)}
              className="min-h-[80px] border-white/10 bg-secondary/50"
              placeholder="Brief summary..."
            />
          </div>

          {/* Objectives */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Objectives (one per line)</Label>
            <Textarea
              value={objectives}
              onChange={e => setObjectives(e.target.value)}
              className="min-h-[60px] border-white/10 bg-secondary/50"
              placeholder="- Understand the problem..."
            />
          </div>

          {/* Outcomes */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Outcomes (one per line)</Label>
            <Textarea
              value={outcomes}
              onChange={e => setOutcomes(e.target.value)}
              className="min-h-[60px] border-white/10 bg-secondary/50"
              placeholder="- Problem statement defined..."
            />
          </div>

          <Separator className="bg-white/10" />

          {/* Instructions */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Instructions (Markdown)</Label>
            <Textarea
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              className="min-h-[120px] border-white/10 bg-secondary/50 font-mono text-sm"
              placeholder="Step-by-step instructions..."
            />
          </div>

          <Separator className="bg-white/10" />

          {/* Tools */}
          <div className="space-y-2">
            <Label className="flex items-center gap-1 text-xs text-muted-foreground">
              <Wrench className="h-3 w-3" />
              Required Tools
            </Label>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((tool, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="gap-1 pr-1"
                >
                  {tool}
                  <button
                    onClick={() => setTools(prev => prev.filter((_, idx) => idx !== i))}
                    className="rounded-full p-0.5 hover:bg-white/10"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newTool}
                onChange={e => setNewTool(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addTool()}
                className="h-8 border-white/10 bg-secondary/50 text-sm"
                placeholder="post-it, whiteboard..."
              />
              <Button variant="outline" size="sm" className="h-8 border-white/10" onClick={addTool}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <Label className="flex items-center gap-1 text-xs text-muted-foreground">
              <LinkIcon className="h-3 w-3" />
              Links
            </Label>
            <div className="space-y-1">
              {links.map((link, i) => (
                <div key={i} className="flex items-center gap-2 rounded-md bg-secondary/30 px-2 py-1">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 flex-1 truncate text-xs text-primary hover:underline"
                  >
                    {link}
                  </a>
                  <button
                    onClick={() => setLinks(prev => prev.filter((_, idx) => idx !== i))}
                    className="rounded-full p-0.5 hover:bg-white/10"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addLink()}
                className="h-8 border-white/10 bg-secondary/50 text-sm"
                placeholder="https://..."
              />
              <Button variant="outline" size="sm" className="h-8 border-white/10" onClick={addLink}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Save button */}
        <SheetFooter className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-card p-4">
          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
