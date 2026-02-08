import { WorkshopTemplate, AgendaItemTemplate, ActivityCategory } from '@/types/workshop'

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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Start with Positives',
            category: 'discovery',
            durationMinutes: 15,
            description: {
              short: 'Everyone writes what is working well (stickies) & presents.',
              objectives: ['Set positive tone'],
              outcomes: ['List of wins']
            },
            tools: ['post-it', 'markers']
          },
          {
            title: 'Capture Problems',
            category: 'discovery',
            durationMinutes: 15,
            description: {
              short: 'Silently write problems/challenges.',
              objectives: ['Identify issues'],
              outcomes: ['List of problems']
            },
            tools: ['post-it', 'markers']
          },
          {
            title: 'Dot Voting',
            category: 'decision',
            durationMinutes: 15,
            description: {
              short: 'Vote on the most critical problems.'
            }
          },
          {
            title: 'How Might We (HMW)',
            category: 'ideation',
            durationMinutes: 30,
            description: {
              short: 'Convert top problems into "How Might We" questions.',
              objectives: ['Reframe problems'],
              outcomes: ['HMW questions']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 30,
            description: {
              short: 'Silently brainstorm solutions for the HMW questions.',
              objectives: ['Generate solutions'],
              outcomes: ['Idea list']
            },
            tools: ['post-it', 'markers']
          },
          {
            title: 'Dot Voting',
            category: 'decision',
            durationMinutes: 15,
            description: {
              short: 'Vote on the best solutions.'
            }
          },
          {
            title: 'Effort/Impact Matrix',
            category: 'decision',
            durationMinutes: 30,
            description: {
              short: 'Plot top solutions on an Effort vs. Impact matrix.',
              objectives: ['Prioritize solutions'],
              outcomes: ['Actionable roadmap']
            },
            tools: ['whiteboard', 'post-it']
          },
          {
            title: 'Make it Actionable',
            category: 'decision',
            durationMinutes: 20,
            description: {
              short: 'Define 3 actionable steps for selected solutions.',
              objectives: ['Ensure execution'],
              outcomes: ['Next steps']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Keynote Presentation',
            category: 'presentation',
            durationMinutes: 15,
            description: { short: 'Intro to Brand Sprint process.' }
          },
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
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
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
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
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
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Review & Agree',
            category: 'presentation',
            durationMinutes: 15,
            description: { short: 'Decider approves the "Cheat Sheet".' }
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Keynote Presentation',
            category: 'presentation',
            durationMinutes: 20,
            description: { short: 'Introduction to Strategy Signal process.' }
          },
          {
            title: 'SWOT Analysis',
            category: 'discovery',
            durationMinutes: 45,
            description: {
              short: 'Current mission, vision, SWOT.',
              objectives: ['Analyze internal state'],
              outcomes: ['SWOT analysis']
            },
            tools: ['whiteboard', 'post-it']
          },
          {
            title: 'PESTLE Analysis',
            category: 'discovery',
            durationMinutes: 60,
            description: {
              short: 'External scan: trends and weak signals.',
              objectives: ['Analyze external factors'],
              outcomes: ['PESTLE analysis']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Brainstorm and categorize specific signals (tech, social, etc.).',
              objectives: ['Identify change signals'],
              outcomes: ['Signal clusters']
            },
            tools: ['post-it', 'markers']
          },
          {
            title: 'Priority Matrix',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'Rank signals by potential impact and uncertainty.',
              objectives: ['Prioritize signals'],
              outcomes: ['Ranked signals']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Scenario Planning',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Develop 2-3 future scenarios based on prioritized signals.',
              objectives: ['Forecast futures'],
              outcomes: ['Scenarios']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Brainstorm strategic responses for each scenario.',
              objectives: ['Develop strategies'],
              outcomes: ['Strategy list']
            },
            tools: ['post-it', 'markers']
          },
          {
            title: 'Action Planning',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'Define 90-day monitoring and implementation steps.',
              objectives: ['Plan execution'],
              outcomes: ['90-day plan']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Stakeholder Interviews',
            category: 'discovery',
            durationMinutes: 60,
            description: {
              short: 'Talk to key stakeholders.',
              objectives: ['Understand stakeholder needs'],
              outcomes: ['Interview notes']
            },
            tools: ['notebook', 'voice-recorder']
          },
          {
            title: 'Persona Creation',
            category: 'discovery',
            durationMinutes: 45,
            description: {
              short: 'Define the specific persona.',
              objectives: ['Identify user'],
              outcomes: ['User persona']
            },
            tools: ['post-it', 'markers', 'templates']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Problem Statement Definition',
            category: 'discovery',
            durationMinutes: 30,
            description: {
              short: 'Define the urgent pain point.',
              objectives: ['Clarify problem'],
              outcomes: ['Problem statement']
            },
            tools: ['whiteboard']
          },
          {
            title: 'Competitor Analysis',
            category: 'discovery',
            durationMinutes: 45,
            description: {
              short: 'Analyze alternatives.',
              objectives: ['Understand competition'],
              outcomes: ['Competitive analysis']
            },
            tools: ['whiteboard', 'laptop']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 30,
            description: {
              short: 'What makes us radically different?',
              objectives: ['Identify differentiators'],
              outcomes: ['USP list']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Brainstorm 3+ distinct ways to solve the problem.',
              objectives: ['Generate approaches'],
              outcomes: ['Solution concepts']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Effort/Impact Matrix',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'Stress-test approaches (Revenue, User Exp, Feasibility).',
              objectives: ['Validate approaches'],
              outcomes: ['Evaluated concepts']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Supervote (Decider)',
            category: 'decision',
            durationMinutes: 15,
            description: { short: 'Select the strongest conceptual approach.' }
          },
          {
            title: 'Action Planning',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'Write the clear hypothesis to be tested.',
              objectives: ['Draft hypothesis'],
              outcomes: ['Testable hypothesis']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Keynote Presentation',
            category: 'presentation',
            durationMinutes: 20,
            description: { short: 'Map the long-term goal and challenge.' }
          },
          {
            title: 'Expert Talk',
            category: 'presentation',
            durationMinutes: 45,
            description: {
              short: 'Ask the Experts session.',
              objectives: ['Gather expertise'],
              outcomes: ['Expert insights']
            },
            tools: ['projector', 'laptop']
          },
          {
            title: 'How Might We (HMW)',
            category: 'ideation',
            durationMinutes: 20,
            description: {
              short: 'How Might We notes.',
              objectives: ['Capture opportunities'],
              outcomes: ['HMW notes']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Lightning Demos',
            category: 'ideation',
            durationMinutes: 30,
            description: {
              short: 'Quick presentations of inspiring solutions.',
              objectives: ['Get inspired'],
              outcomes: ['Inspiration wall']
            },
            tools: ['laptop', 'projector']
          },
          {
            title: '4-Step Sketch',
            category: 'ideation',
            durationMinutes: 40,
            description: {
              short: 'Notes, Ideas, Crazy 8s, Solution Sketch.',
              objectives: ['Sketch solutions'],
              outcomes: ['Solution sketches']
            },
            tools: ['paper', 'markers']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Heatmap Voting',
            category: 'decision',
            durationMinutes: 15,
            description: { short: 'Everyone places dots on solution sketches silently.' }
          },
          {
            title: 'Speed Critique',
            category: 'decision',
            durationMinutes: 20,
            description: { short: 'Quick structured feedback on each solution.' }
          },
          {
            title: 'Supervote (Decider)',
            category: 'decision',
            durationMinutes: 10,
            description: { short: 'Decider makes the final vote.' }
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Storyboard Walkthrough',
            category: 'presentation',
            durationMinutes: 120,
            description: {
              short: 'Map out the exact flow for the prototype (10-15 panels).',
              objectives: ['Plan prototype'],
              outcomes: ['Storyboard']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Prototyping',
            category: 'other',
            durationMinutes: 120,
            description: {
              short: 'Build: Divide and conquer (Makers, Stitcher, Writer, Asset Collector).',
              objectives: ['Create prototype'],
              outcomes: ['Prototype V1']
            },
            tools: ['laptop', 'design-tools']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Prototyping',
            category: 'other',
            durationMinutes: 120,
            description: {
              short: 'Continue building realistic high-fidelity prototype.',
              objectives: ['Refine prototype'],
              outcomes: ['Final prototype']
            },
            tools: ['laptop', 'design-tools']
          },
          {
            title: 'Review & Agree',
            category: 'presentation',
            durationMinutes: 30,
            description: { short: 'Trial run - end of day check.' }
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 3,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'User Interviews',
            category: 'other',
            durationMinutes: 60,
            description: { short: 'User Interview #1' },
            tools: ['prototype', 'notebook']
          },
          {
            title: 'User Interviews',
            category: 'other',
            durationMinutes: 60,
            description: { short: 'User Interview #2' },
            tools: ['prototype', 'notebook']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'User Interviews',
            category: 'other',
            durationMinutes: 60,
            description: { short: 'User Interview #3' },
            tools: ['prototype', 'notebook']
          },
          {
            title: 'User Interviews',
            category: 'other',
            durationMinutes: 60,
            description: { short: 'User Interviews #4 & #5' },
            tools: ['prototype', 'notebook']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Review & Agree',
            category: 'presentation',
            durationMinutes: 30,
            description: {
              short: 'Score: Find patterns from positive/negative notes.',
              objectives: ['Analyze results'],
              outcomes: ['Test report']
            }
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 20 },
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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Keynote Presentation',
            category: 'presentation',
            durationMinutes: 20,
            description: { short: 'Introduction to Value Proposition Canvas.' }
          },
          {
            title: 'Persona Creation',
            category: 'discovery',
            durationMinutes: 60,
            description: {
              short: 'Customer Segments & Personas.',
              objectives: ['Define customers'],
              outcomes: ['Personas']
            },
            tools: ['post-it', 'markers', 'templates']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'User Journey Mapping',
            category: 'discovery',
            durationMinutes: 45,
            description: {
              short: 'Jobs: What are customers trying to get done?',
              objectives: ['Map customer jobs'],
              outcomes: ['Jobs to be done']
            },
            tools: ['whiteboard', 'post-it', 'markers']
          },
          {
            title: 'Empathy Mapping',
            category: 'discovery',
            durationMinutes: 30,
            description: {
              short: 'Pains: Risks and obstacles. Gains: Desired outcomes.',
              objectives: ['Identify pains & gains'],
              outcomes: ['Empathy map']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Products/Services brainstorm.',
              objectives: ['Generate offerings'],
              outcomes: ['Product list']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 45,
            description: {
              short: 'Pain Relievers & Gain Creators.',
              objectives: ['Match needs'],
              outcomes: ['Value map']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Effort/Impact Matrix',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'Fit Analysis: Map Value Map to Customer Profile.',
              objectives: ['Verify fit'],
              outcomes: ['Fit analysis']
            },
            tools: ['whiteboard', 'post-it']
          },
          {
            title: 'Action Planning',
            category: 'decision',
            durationMinutes: 30,
            description: {
              short: 'Draft Value Prop statements.',
              objectives: ['Articulate value'],
              outcomes: ['Value propositions']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Silent Reflection',
            category: 'other',
            durationMinutes: 15,
            description: {
              short: 'Extract key assumptions/hypotheses.',
              objectives: ['Identify assumptions'],
              outcomes: ['Hypotheses list']
            },
            tools: ['notebook']
          },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Experiment Design: Plan tests (interviews, landing pages).',
              objectives: ['Design experiments'],
              outcomes: ['Test plan']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Priority Matrix',
            category: 'decision',
            durationMinutes: 30,
            description: {
              short: 'Prioritize experiments.',
              objectives: ['Rank tests'],
              outcomes: ['Testing roadmap']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Action Planning',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'Roadmap for testing and iteration.',
              objectives: ['Plan next steps'],
              outcomes: ['Action plan']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 20 },
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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Keynote Presentation',
            category: 'presentation',
            durationMinutes: 15,
            description: { short: 'Introduction to Lean Inception.' }
          },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Write the Product Vision Statement.',
              objectives: ['Define vision'],
              outcomes: ['Vision statement']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Problem Statement Definition',
            category: 'discovery',
            durationMinutes: 45,
            description: {
              short: 'Is - Is Not - Does - Does Not Do (Scoping).',
              objectives: ['Scope product'],
              outcomes: ['Product scope']
            },
            tools: ['whiteboard']
          },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 45,
            description: {
              short: 'Product Goals.',
              objectives: ['Define goals'],
              outcomes: ['Goals list']
            },
            tools: ['post-it', 'markers']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Persona Creation',
            category: 'discovery',
            durationMinutes: 60,
            description: {
              short: 'User Personas (Needs, Behaviors).',
              objectives: ['Understand users'],
              outcomes: ['Personas']
            },
            tools: ['post-it', 'markers', 'templates']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'User Journey Mapping',
            category: 'discovery',
            durationMinutes: 90,
            description: {
              short: 'User Journeys (Step-by-step flow).',
              objectives: ['Map user flows'],
              outcomes: ['Journey maps']
            },
            tools: ['whiteboard', 'post-it', 'markers']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Silent Reflection',
            category: 'other',
            durationMinutes: 15,
            description: {
              short: 'Individual review of journeys.',
              objectives: ['Review logic'],
              outcomes: ['Journey feedback']
            },
            tools: ['notebook']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Feature Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Generate features.',
              objectives: ['Brainstorm features'],
              outcomes: ['Feature list']
            },
            tools: ['post-it', 'markers']
          },
          {
            title: 'Speed Critique',
            category: 'decision',
            durationMinutes: 30,
            description: {
              short: 'Technical/UX/Business review of features.',
              objectives: ['Review feasibility'],
              outcomes: ['Feature review']
            }
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Priority Matrix',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'Sequencer: Prioritize features for MVP.',
              objectives: ['Sequence features'],
              outcomes: ['Feature roadmap']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Action Planning',
            category: 'decision',
            durationMinutes: 45,
            description: {
              short: 'MVP Canvas: Fill in the final MVP definition.',
              objectives: ['Define MVP'],
              outcomes: ['MVP Canvas']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 20 },
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
          { title: 'Check-in Round', category: 'ice-breaker', durationMinutes: 10 },
          {
            title: 'Keynote Presentation',
            category: 'presentation',
            durationMinutes: 30,
            description: { short: 'Principles of Blue Ocean, PMS Map.' }
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Competitor Analysis',
            category: 'discovery',
            durationMinutes: 60,
            description: {
              short: '"As-Is" Strategy Canvas: Map competing factors.',
              objectives: ['Analyze current market'],
              outcomes: ['As-Is Canvas']
            },
            tools: ['whiteboard', 'laptop']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Map current value curve.',
              objectives: ['Visualize current value'],
              outcomes: ['Value curve']
            },
            tools: ['whiteboard', 'markers']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 90,
            description: {
              short: 'Six Paths Framework: Look across industries, strategic groups, buyer chains.',
              objectives: ['Explore new paths'],
              outcomes: ['New insights']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Lightning Demos',
            category: 'ideation',
            durationMinutes: 30,
            description: {
              short: 'Visual Exploration: Field work or massive brainstorming.',
              objectives: ['Broaden perspective'],
              outcomes: ['Exploration results']
            },
            tools: ['laptop', 'projector']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'ERRC Grid',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: 'Eliminate, Reduce, Raise, Create factors.',
              objectives: ['Reconstruct market boundaries'],
              outcomes: ['ERRC Grid']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          {
            title: 'Brainstorming',
            category: 'ideation',
            durationMinutes: 60,
            description: {
              short: '"To-Be" Strategy Canvas: Draw the new Value Curve.',
              objectives: ['Design new strategy'],
              outcomes: ['To-Be Canvas']
            },
            tools: ['whiteboard', 'markers']
          },
          {
            title: 'Team Showcase',
            category: 'presentation',
            durationMinutes: 30,
            description: { short: 'Present to stakeholders/customers for feedback.' }
          },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          {
            title: 'Silent Reflection',
            category: 'other',
            durationMinutes: 15,
            description: {
              short: 'Adjust based on feedback.',
              objectives: ['Refine strategy'],
              outcomes: ['Refined strategy']
            },
            tools: ['notebook']
          },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          {
            title: 'Action Planning',
            category: 'decision',
            durationMinutes: 60,
            description: {
              short: 'Tipping point leadership and fair process planning.',
              objectives: ['Plan execution'],
              outcomes: ['Execution plan']
            },
            tools: ['whiteboard', 'post-it']
          },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 20 },
        ],
      },
    ],
  },
]

// Helper: get library items by category
export function getLibraryByCategory(category: ActivityCategory): AgendaItemTemplate[] {
  return AGENDA_ITEM_LIBRARY.filter(item => item.category === category)
}
