'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Layers, Zap, Clock, GripVertical, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
            <Layers className="h-4 w-4 text-primary" />
          </div>
          <span className="text-lg font-semibold text-foreground">Workshop Planner</span>
        </div>
        <Link href="/dashboard">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Dashboard
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-20 text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Visual Workshop Agenda Builder
          </div>
        </motion.div>

        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Design better{' '}
          <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
            workshops
          </span>
        </motion.h1>

        <motion.p
          className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Plan and organize service design workshops with an intuitive visual agenda builder.
          Drag, drop, and resize activities on a time grid — from templates or from scratch.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/dashboard">
            <Button size="lg" className="gap-2 glow-sm px-8 text-base">
              Start Planning
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mt-24 grid w-full gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            {
              icon: Calendar,
              title: 'Multi-day Planning',
              description: 'Plan single or multi-day workshops with side-by-side day views.',
            },
            {
              icon: GripVertical,
              title: 'Drag & Drop',
              description: 'Easily reorder and move activities between days with intuitive drag and drop.',
            },
            {
              icon: Clock,
              title: 'Time Grid',
              description: 'Visual time grid shows proportional activity durations at a glance.',
            },
            {
              icon: Layers,
              title: 'Activity Library',
              description: 'Choose from a rich library of categorized workshop activities.',
            },
            {
              icon: Zap,
              title: 'Templates',
              description: 'Start fast with built-in templates: Design Sprint, Brand Sprint, LDJ, and more.',
            },
            {
              icon: Sparkles,
              title: 'Auto-save',
              description: 'Changes save automatically to your browser — no account needed.',
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group rounded-xl border border-white/10 bg-card/50 p-6 text-left backdrop-blur-sm transition-all hover:border-white/20 hover:bg-card/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
