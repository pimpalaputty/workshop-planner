# Workshop Planner

A visual agenda builder for service design workshops. Plan single or multi-day workshops with an intuitive drag-and-drop interface, time grid visualization, and a rich activity library.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)

## Features

- **Visual Time Grid** — Agenda items are proportionally sized to their duration with hour markers and end-of-day indicators
- **Drag & Drop** — Reorder activities within a day, move them across days, or drag from the activity library
- **Activity Library** — 30+ categorized workshop activities (Discovery, Ideation, Decision, etc.) available via a floating action button
- **Multi-day Planning** — Side-by-side day columns with horizontal scrolling
- **Resize by Dragging** — Adjust activity duration by dragging the bottom edge (desktop)
- **Workshop Templates** — Start from scratch or use built-in templates (Lightning Decision Jam, Brand Sprint, Design Sprint, and more)
- **Mobile Optimized** — Touch-friendly with long-press drag, sticky day headers, bottom sheets, and swipe navigation
- **Trash Drop Zone** — Delete items by dragging them to the bottom of the screen
- **Auto-save** — All changes persist automatically to localStorage
- **Dark Theme** — Railway-inspired dark UI with vibrant purple accents

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4 + [shadcn/ui](https://ui.shadcn.com/)
- **Drag & Drop:** [@dnd-kit](https://dndkit.com/) (core + sortable)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Storage:** Browser localStorage (no backend required)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install & Run

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/workshop-planner.git
cd workshop-planner

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/workshop-planner)

No environment variables or database setup required — the app runs entirely in the browser using localStorage.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/page.tsx    # Workshop list
│   ├── workshop/[id]/page.tsx # Editor (main view)
│   ├── globals.css           # Theme & custom styles
│   └── layout.tsx            # Root layout
├── components/
│   ├── activity-library.tsx  # Draggable activity catalog
│   ├── agenda-item-card.tsx  # Proportional activity card
│   ├── day-column.tsx        # Day column with time grid
│   ├── edit-item-sheet.tsx   # Activity detail editor
│   ├── new-workshop-dialog.tsx
│   ├── workshop-settings-dialog.tsx
│   └── ui/                   # shadcn/ui primitives
├── hooks/
│   └── use-workshops.ts      # Workshop CRUD & editor state
├── lib/
│   ├── storage.ts            # localStorage wrapper
│   ├── templates.ts          # Activity library & workshop templates
│   └── utils.ts              # Helpers (ID gen, time math)
└── types/
    └── workshop.ts           # TypeScript types & constants
```

## License

MIT
