import { WorkshopTemplate, TemplateAgendaItemReference, AgendaItem } from '@/types/workshop'
import { findLibraryItemByTitle } from './activity-library'

// ==========================================
// Workshop Templates (from research)
// ==========================================
export const WORKSHOP_TEMPLATES: WorkshopTemplate[] = [
  {
    id: 'ldj',
    name: 'Lightning Decision Jam',
    description: 'Quickly define problems, find solutions, and prioritize actions in a focused half-day session.',
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Start with Positives' },
          { title: 'Capture Problems' },
          { title: 'Dot Voting' },
          { title: 'How Might We (HMW)' },
          { title: 'Coffee Break' },
          { title: 'Brainstorming' },
          { title: 'Dot Voting' },
          { title: 'Effort/Impact Matrix' },
          { title: 'Make it Actionable' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
  {
    id: 'brand-sprint',
    name: 'Brand Sprint',
    description: "Define the brand's motivation, values, audience, personality, and positioning in a focused day.",
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Keynote Presentation' },
          {
            title: '20-Year Roadmap',
            category: 'discovery',
            durationMinutes: 30,
            description: {
              short: 'Where will the company be in 5, 10, 20 years?',
              objectives: ['Align long-term vision'],
              outcomes: ['Roadmap milestones']
            },
            tools: ['whiteboard', 'post-it']
          },
          {
            title: 'What, How, Why (Golden Circle)',
            category: 'discovery',
            durationMinutes: 15,
            description: {
              short: 'Define why the company exists beyond making money.',
              objectives: ['Clarify purpose'],
              outcomes: ['Golden circle definition']
            },
            tools: ['whiteboard']
          },
          { title: 'Coffee Break' },
          {
            title: 'Top 3 Values',
            category: 'ideation',
            durationMinutes: 30,
            description: {
              short: '"We are..." (e.g., Simple, Trustworthy).',
              objectives: ['Define core values'],
              outcomes: ['List of values']
            },
            tools: ['post-it', 'markers']
          },
          {
            title: 'Top 3 Audiences',
            category: 'ideation',
            durationMinutes: 15,
            description: {
              short: 'Who is most important to please?',
              objectives: ['Identify target segments'],
              outcomes: ['Primary audiences']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Lunch Break' },
          {
            title: 'Personality Sliders',
            category: 'ideation',
            durationMinutes: 30,
            description: {
              short: 'Define the brand tone (e.g., Friendly vs. Authority, Mass Appeal vs. Elite).',
              objectives: ['Define brand voice'],
              outcomes: ['Personality profile']
            },
            tools: ['whiteboard']
          },
          {
            title: 'Competitive Landscape',
            category: 'discovery',
            durationMinutes: 30,
            description: {
              short: 'Sketch a 2x2 matrix and position the brand vs. competitors.',
              objectives: ['Position against market'],
              outcomes: ['Competitive matrix']
            },
            tools: ['whiteboard', 'markers']
          },
          { title: 'Coffee Break' },
          { title: 'Review & Agree' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
  {
    id: 'strategy-signal',
    name: 'Strategy Signal',
    description: 'Identify external signals of change and integrate them into strategic planning over 1.5 days.',
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Keynote Presentation' },
          { title: 'SWOT Analysis' },
          { title: 'PESTLE Analysis' },
          { title: 'Lunch Break' },
          { title: 'Brainstorming' },
          { title: 'Priority Matrix' },
          { title: 'Coffee Break' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check' },
          { title: 'Scenario Planning' },
          { title: 'Coffee Break' },
          { title: 'Brainstorming' },
          { title: 'Action Planning' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
  {
    id: 'foundation-sprint',
    name: 'Foundation Sprint',
    description: 'Clarify the problem, customer, and unique value before starting a project over 2 days.',
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Stakeholder Interviews' },
          { title: 'Persona Creation' },
          { title: 'Lunch Break' },
          { title: 'Problem Statement Definition' },
          { title: 'Competitor Analysis' },
          { title: 'Coffee Break' },
          { title: 'Brainstorming' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check' },
          { title: 'Brainstorming' },
          { title: 'Coffee Break' },
          { title: 'Effort/Impact Matrix' },
          { title: 'Lunch Break' },
          { title: 'Supervote (Decider)' },
          { title: 'Action Planning' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
  {
    id: 'design-sprint',
    name: 'Design Sprint 2.0',
    description: 'Validate ideas through prototyping and testing with users in 4 focused days.',
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Keynote Presentation' },
          { title: 'Expert Talk' },
          { title: 'How Might We (HMW)' },
          { title: 'Lunch Break' },
          { title: 'Lightning Demos' },
          { title: '4-Step Sketch' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check' },
          { title: 'Heatmap Voting' },
          { title: 'Speed Critique' },
          { title: 'Supervote (Decider)' },
          { title: 'Coffee Break' },
          { title: 'Storyboard Walkthrough' },
          { title: 'Lunch Break' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check' },
          { title: 'Prototyping' },
          { title: 'Lunch Break' },
          { title: 'Prototyping' },
          { title: 'Review & Agree' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 3,
        items: [
          { title: 'Energy Check' },
          { title: 'User Interviews' },
          { title: 'User Interviews' },
          { title: 'Lunch Break' },
          { title: 'User Interviews' },
          { title: 'User Interviews' },
          { title: 'Coffee Break' },
          { title: 'Review & Agree' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
  {
    id: 'value-proposition',
    name: 'Value Proposition Design',
    description: 'Achieve fit between customer needs and the product/service offering over 3 days.',
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Keynote Presentation' },
          { title: 'Persona Creation' },
          { title: 'Lunch Break' },
          { title: 'User Journey Mapping' },
          { title: 'Empathy Mapping' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check' },
          { title: 'Brainstorming' },
          { title: 'Coffee Break' },
          { title: 'Brainstorming' },
          { title: 'Lunch Break' },
          { title: 'Effort/Impact Matrix' },
          { title: 'Action Planning' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check' },
          { title: 'Silent Reflection' },
          { title: 'Brainstorming' },
          { title: 'Coffee Break' },
          { title: 'Priority Matrix' },
          { title: 'Lunch Break' },
          { title: 'Action Planning' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
  {
    id: 'lean-inception',
    name: 'Lean Inception',
    description: 'Align the team and define the Minimum Viable Product (MVP) over 3 days.',
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Keynote Presentation' },
          { title: 'Brainstorming' },
          { title: 'Lunch Break' },
          { title: 'Problem Statement Definition' },
          { title: 'Brainstorming' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check' },
          { title: 'Persona Creation' },
          { title: 'Coffee Break' },
          { title: 'User Journey Mapping' },
          { title: 'Lunch Break' },
          { title: 'Silent Reflection' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check' },
          { title: 'Feature Brainstorming' },
          { title: 'Speed Critique' },
          { title: 'Coffee Break' },
          { title: 'Priority Matrix' },
          { title: 'Lunch Break' },
          { title: 'Action Planning' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
  {
    id: 'blue-ocean',
    name: 'Blue Ocean Strategy',
    description: 'Create uncontested market space and innovative value over 3 days.',
    defaultStartTime: '09:00',
    days: [
      {
        dayIndex: 0,
        items: [
          { title: 'Check-in Round' },
          { title: 'Keynote Presentation' },
          { title: 'Coffee Break' },
          { title: 'Competitor Analysis' },
          { title: 'Lunch Break' },
          { title: 'Brainstorming' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check' },
          { title: 'Brainstorming' },
          { title: 'Coffee Break' },
          { title: 'Lightning Demos' },
          { title: 'Lunch Break' },
          { title: 'ERRC Grid' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check' },
          { title: 'Brainstorming' },
          { title: 'Team Showcase' },
          { title: 'Coffee Break' },
          { title: 'Silent Reflection' },
          { title: 'Lunch Break' },
          { title: 'Action Planning' },
          { title: 'Wrap-up & Retrospective' },
        ],
      },
    ],
  },
]

// Helper: convert template item reference to full AgendaItem
export function templateItemToAgendaItem(ref: TemplateAgendaItemReference): AgendaItem {
  // If it's a full item (has category), use it directly
  if ('category' in ref) {
    return {
      id: '', // Will be generated when creating workshop
      ...ref,
    }
  }

  // Otherwise, it's a simple reference - look it up in library
  const libraryItem = findLibraryItemByTitle(ref.title)
  
  if (!libraryItem) {
    // Fallback: create a minimal item if not found in library
    return {
      id: '', // Will be generated when creating workshop
      title: ref.title,
      category: 'other',
      durationMinutes: 30,
    }
  }

  return {
    id: '', // Will be generated when creating workshop
    title: libraryItem.title,
    category: libraryItem.category,
    durationMinutes: libraryItem.defaultDuration,
    description: libraryItem.description,
    instructions: libraryItem.instructions,
    tools: libraryItem.tools,
  }
}
