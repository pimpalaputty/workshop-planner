import { AgendaItemTemplate, ActivityCategory } from '@/types/workshop'

// ==========================================
// Predefined Agenda Item Library
// ==========================================
export const AGENDA_ITEM_LIBRARY: AgendaItemTemplate[] = [
  // Discovery
  {
    title: 'Stakeholder Interviews',
    category: 'discovery',
    defaultDuration: 60,
    description: {
      short: 'Interview key stakeholders to understand goals, challenges, and expectations.',
      objectives: ['Understand business goals', 'Identify key constraints', 'Align on success metrics'],
      outcomes: ['Raw interview notes', 'Key themes indentified']
    },
    tools: ['notebook', 'voice-recorder']
  },
  {
    title: 'SWOT Analysis',
    category: 'discovery',
    defaultDuration: 45,
    description: {
      short: 'Identify Strengths, Weaknesses, Opportunities, and Threats.',
      objectives: ['Analyze current state', 'Identify strategic leverage points'],
      outcomes: ['Completed SWOT grid']
    },
    tools: ['whiteboard', 'post-it']
  },
  {
    title: 'PESTLE Analysis',
    category: 'discovery',
    defaultDuration: 60,
    description: {
      short: 'Analyze Political, Economic, Social, Technological, Legal, and Environmental factors.',
      objectives: ['Map external factors impacting the project', 'Identify risks and opportunities'],
      outcomes: ['Comprehensive external factor analysis']
    },
    tools: ['whiteboard', 'post-it']
  },
  {
    title: 'User Journey Mapping',
    category: 'discovery',
    defaultDuration: 60,
    description: {
      short: 'Map out the end-to-end user experience across touchpoints.',
      objectives: ['Visualize user flow', 'Identify pain points and gaps'],
      outcomes: ['Visual map of the user journey']
    },
    tools: ['whiteboard', 'post-it', 'markers']
  },
  {
    title: 'Empathy Mapping',
    category: 'discovery',
    defaultDuration: 30,
    description: {
      short: 'Map what users Think, Feel, Say, and Do.',
      objectives: ['Deepen understanding of user mindset', 'Uncover user needs'],
      outcomes: ['Shared empathy model']
    },
    tools: ['post-it', 'markers']
  },
  {
    title: 'Problem Statement Definition',
    category: 'discovery',
    defaultDuration: 20,
    description: {
      short: 'Collaboratively define and agree on the core problem statement.',
      objectives: ['Align on the core issue', 'Scope the problem'],
      outcomes: ['Clear, agreed-upon problem statement']
    },
    tools: ['whiteboard']
  },
  {
    title: 'Persona Creation',
    category: 'discovery',
    defaultDuration: 45,
    description: {
      short: 'Create detailed user personas based on research.',
      objectives: ['Define target audience', 'Humanize user data'],
      outcomes: ['1-3 detailed user personas']
    },
    tools: ['post-it', 'markers', 'templates']
  },
  {
    title: 'Competitor Analysis',
    category: 'discovery',
    defaultDuration: 45,
    description: {
      short: 'Analyze competitor offerings, strengths, and weaknesses.',
      objectives: ['Understand market landscape', 'Identify differentiation opportunities'],
      outcomes: ['Competitor feature matrix', 'Strategic insights']
    },
    tools: ['whiteboard', 'laptop']
  },
  {
    title: 'Capture Problems',
    category: 'discovery',
    defaultDuration: 15,
    description: {
      short: 'Silently write problems and challenges on stickies.',
      objectives: ['Gather diverse perspectives', 'Avoid groupthink'],
      outcomes: ['List of potential problems to solve']
    },
    tools: ['post-it', 'markers']
  },
  {
    title: 'Start with Positives',
    category: 'discovery',
    defaultDuration: 15,
    description: {
      short: 'Everyone writes what is working well, then presents to the group.',
      objectives: ['Set a positive tone', 'Acknowledge existing strengths'],
      outcomes: ['List of current assets and wins']
    },
    tools: ['post-it', 'markers']
  },

  // Ideation
  {
    title: 'Brainstorming',
    category: 'ideation',
    defaultDuration: 30,
    description: {
      short: 'Free-form idea generation without judgment.',
      objectives: ['Generate volume of ideas', 'Encourage creativity'],
      outcomes: ['Wide range of potential solutions']
    },
    tools: ['post-it', 'markers', 'whiteboard']
  },
  {
    title: 'Crazy 8s',
    category: 'ideation',
    defaultDuration: 15,
    description: {
      short: '8 ideas in 8 minutes. Rapid sketching exercise.',
      objectives: ['Push beyond first ideas', 'Rapid visual iteration'],
      outcomes: ['8 distinct sketches per person']
    },
    tools: ['paper', 'markers']
  },
  {
    title: 'How Might We (HMW)',
    category: 'ideation',
    defaultDuration: 20,
    description: {
      short: 'Reframe problems as "How Might We" opportunities.',
      objectives: ['Turn challenges into opportunities', 'Frame problems for ideation'],
      outcomes: ['Prioritized HMW questions']
    },
    tools: ['post-it', 'markers']
  },
  {
    title: 'Mind Mapping',
    category: 'ideation',
    defaultDuration: 30,
    description: {
      short: 'Visual brainstorming through connected ideas.',
      objectives: ['Explore associations', 'Structure complex topics'],
      outcomes: ['Visual network of related ideas']
    },
    tools: ['whiteboard', 'markers']
  },
  {
    title: 'Lightning Demos',
    category: 'ideation',
    defaultDuration: 30,
    description: {
      short: 'Quick presentations of inspiring solutions from other products.',
      objectives: ['Gather external inspiration', 'Identify proven patterns'],
      outcomes: ['Board of inspirational examples']
    },
    tools: ['laptop', 'projector']
  },
  {
    title: 'Solution Sketch',
    category: 'ideation',
    defaultDuration: 30,
    description: {
      short: 'Detailed 3-panel sketch of best solution idea.',
      objectives: ['Flesh out concepts', 'Communicate ideas visually'],
      outcomes: ['Self-explanatory solution concepts']
    },
    tools: ['paper', 'markers']
  },
  {
    title: '4-Step Sketch',
    category: 'ideation',
    defaultDuration: 40,
    description: {
      short: 'Notes → Ideas → Crazy 8s → Solution Sketch.',
      objectives: ['Systematic idea development', 'move from abstract to concrete'],
      outcomes: ['High-quality solution sketches']
    },
    tools: ['paper', 'markers']
  },
  {
    title: 'ERRC Grid',
    category: 'ideation',
    defaultDuration: 45,
    description: {
      short: 'Eliminate, Reduce, Raise, Create factors for blue ocean strategy.',
      objectives: ['Refine value proposition', 'Differentiate from competition'],
      outcomes: ['Strategic move definitions']
    },
    tools: ['whiteboard', 'post-it']
  },
  {
    title: 'Feature Brainstorming',
    category: 'ideation',
    defaultDuration: 30,
    description: {
      short: 'Generate feature ideas for the product.',
      objectives: ['Populate backlog', 'Explore functionality'],
      outcomes: ['List of potential features']
    },
    tools: ['post-it', 'markers']
  },
  {
    title: 'Scenario Planning',
    category: 'ideation',
    defaultDuration: 60,
    description: {
      short: 'Develop 2-3 future scenarios based on prioritized signals.',
      objectives: ['Prepare for uncertainty', 'Test strategies against futures'],
      outcomes: ['Detailed future scenarios']
    },
    tools: ['whiteboard', 'post-it']
  },

  // Decision
  {
    title: 'Dot Voting',
    category: 'decision',
    defaultDuration: 15,
    description: {
      short: 'Each participant gets dots to vote on preferred options.',
      objectives: ['Democratically prioritize options', 'Visualize group consensus'],
      outcomes: ['Ranked list of items']
    },
    tools: ['dot-stickers', 'markers']
  },
  {
    title: 'Effort/Impact Matrix',
    category: 'decision',
    defaultDuration: 30,
    description: {
      short: 'Plot solutions on Effort vs Impact 2x2 matrix.',
      objectives: ['Evaluate ROI of ideas', 'Prioritize quick wins'],
      outcomes: ['Prioritized roadmap items']
    },
    tools: ['whiteboard', 'post-it']
  },
  {
    title: 'Priority Matrix',
    category: 'decision',
    defaultDuration: 30,
    description: {
      short: 'Categorize items by urgency and importance.',
      objectives: ['Focus resources', 'Determine execution order'],
      outcomes: ['Eisenhower matrix of tasks']
    },
    tools: ['whiteboard', 'post-it']
  },
  {
    title: 'Heatmap Voting',
    category: 'decision',
    defaultDuration: 15,
    description: {
      short: 'Everyone places dots on solution sketches silently.',
      objectives: ['Highlight interesting parts of ideas', 'Avoid bias'],
      outcomes: ['Heatmap of popular features']
    },
    tools: ['dot-stickers']
  },
  {
    title: 'Speed Critique',
    category: 'decision',
    defaultDuration: 20,
    description: {
      short: 'Quick structured feedback on each solution.',
      objectives: ['Understand solutions', 'Discuss pros and cons efficiently'],
      outcomes: ['Captured feedback on ideas']
    },
    tools: ['post-it', 'markers']
  },
  {
    title: 'Supervote (Decider)',
    category: 'decision',
    defaultDuration: 10,
    description: {
      short: 'Decider makes the final vote on the direction.',
      objectives: ['Break deadlocks', 'Ensure alignment with vision'],
      outcomes: ['Final decision on direction']
    },
    tools: ['dot-stickers']
  },
  {
    title: 'Action Planning',
    category: 'decision',
    defaultDuration: 30,
    description: {
      short: 'Define concrete next steps, owners, and deadlines.',
      objectives: ['Assign responsibility', 'Ensure follow-through'],
      outcomes: ['Action items list']
    },
    tools: ['whiteboard', 'post-it']
  },
  {
    title: 'Make it Actionable',
    category: 'decision',
    defaultDuration: 20,
    description: {
      short: 'For selected solutions, define 3 actionable steps to commit to.',
      objectives: ['Translate ideas to tasks', 'Create momentum'],
      outcomes: ['Immediate next steps']
    },
    tools: ['post-it', 'markers']
  },

  // Presentation
  {
    title: 'Keynote Presentation',
    category: 'presentation',
    defaultDuration: 30,
    description: {
      short: 'Main presentation to set context and goals.',
      objectives: ['Align the team', 'Inspire participants'],
      outcomes: ['Shared context']
    },
    tools: ['projector', 'laptop']
  },
  {
    title: 'Team Showcase',
    category: 'presentation',
    defaultDuration: 20,
    description: {
      short: 'Teams present their work to the broader group.',
      objectives: ['Share progress', 'Celebrate wins'],
      outcomes: ['Feedback from improved group']
    },
    tools: ['projector']
  },
  {
    title: 'Expert Talk',
    category: 'presentation',
    defaultDuration: 45,
    description: {
      short: 'Subject matter expert shares knowledge and insights.',
      objectives: ['Inject external expertise', 'Answer technical questions'],
      outcomes: ['Knowledge transfer']
    },
    tools: ['projector', 'laptop']
  },
  {
    title: 'Lightning Talk',
    category: 'presentation',
    defaultDuration: 10,
    description: {
      short: 'Quick 5-10 minute presentation on a focused topic.',
      objectives: ['Share specific knowledge', 'Keep energy high'],
      outcomes: ['Quick insights']
    },
    tools: ['projector']
  },
  {
    title: 'Review & Agree',
    category: 'presentation',
    defaultDuration: 15,
    description: {
      short: 'Review outputs and get decider approval.',
      objectives: ['Verify alignment', 'Get official sign-off'],
      outcomes: ['Approved artifacts']
    },
    tools: ['whiteboard']
  },
  {
    title: 'Storyboard Walkthrough',
    category: 'presentation',
    defaultDuration: 30,
    description: {
      short: 'Walk through the prototype storyboard (10-15 panels).',
      objectives: ['Narrate the user flow', 'Check for logic gaps'],
      outcomes: ['Validated storyboard']
    },
    tools: ['whiteboard', 'post-it']
  },

  // Ice-breaker
  {
    title: 'Two Truths and a Lie',
    category: 'ice-breaker',
    defaultDuration: 15,
    description: {
      short: 'Each person shares two truths and one lie. Others guess.',
      objectives: ['Build personal connections', 'Have fun'],
      outcomes: ['Relaxed atmosphere']
    }
  },
  {
    title: 'Speed Networking',
    category: 'ice-breaker',
    defaultDuration: 15,
    description: {
      short: 'Quick 2-minute conversations in pairs, then rotate.',
      objectives: ['Rapidly connect participants', 'Break down barriers'],
      outcomes: ['New connections']
    }
  },
  {
    title: 'Personal User Manual',
    category: 'ice-breaker',
    defaultDuration: 20,
    description: {
      short: 'Share how you work best, your communication preferences, etc.',
      objectives: ['Improve team collaboration', 'Understand working styles'],
      outcomes: ['Team operating guide']
    }
  },
  {
    title: 'Check-in Round',
    category: 'ice-breaker',
    defaultDuration: 10,
    description: {
      short: 'Quick round where everyone shares how they feel and their expectations.',
      objectives: ['Gauge room energy', 'Voice expectations'],
      outcomes: ['Emotional alignment']
    }
  },
  {
    title: 'Energy Check',
    category: 'ice-breaker',
    defaultDuration: 5,
    description: {
      short: 'Quick energy level check with the group.',
      objectives: ['Monitor group fatigue', 'Decide on breaks'],
      outcomes: ['Energy awareness']
    }
  },
  {
    title: 'One Word Check-in',
    category: 'ice-breaker',
    defaultDuration: 5,
    description: {
      short: 'Everyone shares one word that describes their current state.',
      objectives: [' Rapid emotional temperature check'],
      outcomes: ['Group pulse']
    }
  },

  // Break
  { title: 'Coffee Break', category: 'break', defaultDuration: 15, description: { short: 'Short refreshment break.' } },
  { title: 'Lunch Break', category: 'break', defaultDuration: 60, description: { short: 'Lunch break.' } },
  { title: 'Energizer Activity', category: 'break', defaultDuration: 10, description: { short: 'Quick physical or mental exercise to re-energize the group.' } },
  { title: 'Stretch Break', category: 'break', defaultDuration: 5, description: { short: 'Quick stretching break to stay fresh.' } },

  // Other
  {
    title: 'Wrap-up & Retrospective',
    category: 'other',
    defaultDuration: 20,
    description: {
      short: 'Reflect on what went well and what could improve.',
      objectives: ['Continuous improvement', 'Close the session'],
      outcomes: ['Retrospective notes']
    }
  },
  {
    title: 'Q&A Session',
    category: 'other',
    defaultDuration: 15,
    description: {
      short: 'Open floor for questions and discussions.',
      objectives: ['Clarify doubts', 'Address unresolved issues'],
      outcomes: ['Cleared questions']
    }
  },
  {
    title: 'Silent Reflection',
    category: 'other',
    defaultDuration: 10,
    description: {
      short: 'Individual time to reflect and write down thoughts.',
      objectives: ['Process information', 'Form individual opinions'],
      outcomes: ['Personal notes']
    },
    tools: ['notebook']
  },
  {
    title: 'Prototyping',
    category: 'other',
    defaultDuration: 120,
    description: {
      short: 'Build a realistic prototype of the selected solution.',
      objectives: ['Create testable artifact', 'Visualise the solution'],
      outcomes: ['High-fidelity prototype']
    },
    tools: ['laptop', 'design-tools']
  },
  {
    title: 'User Interviews',
    category: 'other',
    defaultDuration: 60,
    description: {
      short: 'Conduct user interviews to test prototypes.',
      objectives: ['Validate assumptions', 'Gather user feedback'],
      outcomes: ['Interview recordings and notes']
    },
    tools: ['prototype', 'notebook', 'voice-recorder']
  },
]

// Helper: get library items by category
export function getLibraryByCategory(category: ActivityCategory): AgendaItemTemplate[] {
  return AGENDA_ITEM_LIBRARY.filter(item => item.category === category)
}

// Helper: find library item by title
export function findLibraryItemByTitle(title: string): AgendaItemTemplate | undefined {
  return AGENDA_ITEM_LIBRARY.find(item => item.title === title)
}
