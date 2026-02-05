'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Workshop, LocationType } from '@/types/workshop'

interface WorkshopSettingsDialogProps {
  workshop: Workshop
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (changes: Partial<Workshop>) => void
}

export function WorkshopSettingsDialog({
  workshop,
  open,
  onOpenChange,
  onSave,
}: WorkshopSettingsDialogProps) {
  const [name, setName] = useState(workshop.name)
  const [clientName, setClientName] = useState(workshop.clientName || '')
  const [locationType, setLocationType] = useState<LocationType | ''>(workshop.locationType || '')
  const [locationDetails, setLocationDetails] = useState(workshop.locationDetails || '')
  const [startDate, setStartDate] = useState(workshop.startDate || '')

  useEffect(() => {
    setName(workshop.name)
    setClientName(workshop.clientName || '')
    setLocationType(workshop.locationType || '')
    setLocationDetails(workshop.locationDetails || '')
    setStartDate(workshop.startDate || '')
  }, [workshop])

  const handleSave = () => {
    onSave({
      name,
      clientName: clientName || undefined,
      locationType: (locationType as LocationType) || undefined,
      locationDetails: locationDetails || undefined,
      startDate: startDate || undefined,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Workshop Settings</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Workshop Name</Label>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              className="border-white/10 bg-secondary/50"
              placeholder="Workshop name"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Client Name</Label>
            <Input
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              className="border-white/10 bg-secondary/50"
              placeholder="Optional"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Start Date</Label>
            <Input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="border-white/10 bg-secondary/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Location Type</Label>
              <Select
                value={locationType}
                onValueChange={v => setLocationType(v as LocationType)}
              >
                <SelectTrigger className="border-white/10 bg-secondary/50">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-card">
                  <SelectItem value="offline">Offline</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Location Details</Label>
              <Input
                value={locationDetails}
                onChange={e => setLocationDetails(e.target.value)}
                className="border-white/10 bg-secondary/50"
                placeholder="Address or URL"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
