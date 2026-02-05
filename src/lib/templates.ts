import { WorkshopTemplate, AgendaItemTemplate, ActivityCategory } from '@/types/workshop'

// ==========================================
// Predefined Agenda Item Library
// ==========================================
export const AGENDA_ITEM_LIBRARY: AgendaItemTemplate[] = [
  // Discovery
  { title: 'Stakeholder Interviews', category: 'discovery', defaultDuration: 60, description: 'Interview key stakeholders to understand goals, challenges, and expectations.', tools: ['notebook', 'voice-recorder'] },
  { title: 'SWOT Analysis', category: 'discovery', defaultDuration: 45, description: 'Identify Strengths, Weaknesses, Opportunities, and Threats.', tools: ['whiteboard', 'post-it'] },
  { title: 'PESTLE Analysis', category: 'discovery', defaultDuration: 60, description: 'Analyze Political, Economic, Social, Technological, Legal, and Environmental factors.', tools: ['whiteboard', 'post-it'] },
  { title: 'User Journey Mapping', category: 'discovery', defaultDuration: 60, description: 'Map out the end-to-end user experience across touchpoints.', tools: ['whiteboard', 'post-it', 'markers'] },
  { title: 'Empathy Mapping', category: 'discovery', defaultDuration: 30, description: 'Map what users Think, Feel, Say, and Do.', tools: ['post-it', 'markers'] },
  { title: 'Problem Statement Definition', category: 'discovery', defaultDuration: 20, description: 'Collaboratively define and agree on the core problem statement.', tools: ['whiteboard'] },
  { title: 'Persona Creation', category: 'discovery', defaultDuration: 45, description: 'Create detailed user personas based on research.', tools: ['post-it', 'markers', 'templates'] },
  { title: 'Competitor Analysis', category: 'discovery', defaultDuration: 45, description: 'Analyze competitor offerings, strengths, and weaknesses.', tools: ['whiteboard', 'laptop'] },
  { title: 'Capture Problems', category: 'discovery', defaultDuration: 15, description: 'Silently write problems and challenges on stickies.', tools: ['post-it', 'markers'] },
  { title: 'Start with Positives', category: 'discovery', defaultDuration: 15, description: 'Everyone writes what is working well, then presents to the group.', tools: ['post-it', 'markers'] },

  // Ideation
  { title: 'Brainstorming', category: 'ideation', defaultDuration: 30, description: 'Free-form idea generation without judgment.', tools: ['post-it', 'markers', 'whiteboard'] },
  { title: 'Crazy 8s', category: 'ideation', defaultDuration: 15, description: '8 ideas in 8 minutes. Rapid sketching exercise.', tools: ['paper', 'markers'] },
  { title: 'How Might We (HMW)', category: 'ideation', defaultDuration: 20, description: 'Reframe problems as "How Might We" opportunities.', tools: ['post-it', 'markers'] },
  { title: 'Mind Mapping', category: 'ideation', defaultDuration: 30, description: 'Visual brainstorming through connected ideas.', tools: ['whiteboard', 'markers'] },
  { title: 'Lightning Demos', category: 'ideation', defaultDuration: 30, description: 'Quick presentations of inspiring solutions from other products.', tools: ['laptop', 'projector'] },
  { title: 'Solution Sketch', category: 'ideation', defaultDuration: 30, description: 'Detailed 3-panel sketch of best solution idea.', tools: ['paper', 'markers'] },
  { title: '4-Step Sketch', category: 'ideation', defaultDuration: 40, description: 'Notes → Ideas → Crazy 8s → Solution Sketch.', tools: ['paper', 'markers'] },
  { title: 'ERRC Grid', category: 'ideation', defaultDuration: 45, description: 'Eliminate, Reduce, Raise, Create factors for blue ocean strategy.', tools: ['whiteboard', 'post-it'] },
  { title: 'Feature Brainstorming', category: 'ideation', defaultDuration: 30, description: 'Generate feature ideas for the product.', tools: ['post-it', 'markers'] },
  { title: 'Scenario Planning', category: 'ideation', defaultDuration: 60, description: 'Develop 2-3 future scenarios based on prioritized signals.', tools: ['whiteboard', 'post-it'] },

  // Decision
  { title: 'Dot Voting', category: 'decision', defaultDuration: 15, description: 'Each participant gets dots to vote on preferred options.', tools: ['dot-stickers', 'markers'] },
  { title: 'Effort/Impact Matrix', category: 'decision', defaultDuration: 30, description: 'Plot solutions on Effort vs Impact 2x2 matrix.', tools: ['whiteboard', 'post-it'] },
  { title: 'Priority Matrix', category: 'decision', defaultDuration: 30, description: 'Categorize items by urgency and importance.', tools: ['whiteboard', 'post-it'] },
  { title: 'Heatmap Voting', category: 'decision', defaultDuration: 15, description: 'Everyone places dots on solution sketches silently.', tools: ['dot-stickers'] },
  { title: 'Speed Critique', category: 'decision', defaultDuration: 20, description: 'Quick structured feedback on each solution.', tools: ['post-it', 'markers'] },
  { title: 'Supervote (Decider)', category: 'decision', defaultDuration: 10, description: 'Decider makes the final vote on the direction.', tools: ['dot-stickers'] },
  { title: 'Action Planning', category: 'decision', defaultDuration: 30, description: 'Define concrete next steps, owners, and deadlines.', tools: ['whiteboard', 'post-it'] },
  { title: 'Make it Actionable', category: 'decision', defaultDuration: 20, description: 'For selected solutions, define 3 actionable steps to commit to.', tools: ['post-it', 'markers'] },

  // Presentation
  { title: 'Keynote Presentation', category: 'presentation', defaultDuration: 30, description: 'Main presentation to set context and goals.', tools: ['projector', 'laptop'] },
  { title: 'Team Showcase', category: 'presentation', defaultDuration: 20, description: 'Teams present their work to the broader group.', tools: ['projector'] },
  { title: 'Expert Talk', category: 'presentation', defaultDuration: 45, description: 'Subject matter expert shares knowledge and insights.', tools: ['projector', 'laptop'] },
  { title: 'Lightning Talk', category: 'presentation', defaultDuration: 10, description: 'Quick 5-10 minute presentation on a focused topic.', tools: ['projector'] },
  { title: 'Review & Agree', category: 'presentation', defaultDuration: 15, description: 'Review outputs and get decider approval.', tools: ['whiteboard'] },
  { title: 'Storyboard Walkthrough', category: 'presentation', defaultDuration: 30, description: 'Walk through the prototype storyboard (10-15 panels).', tools: ['whiteboard', 'post-it'] },

  // Ice-breaker
  { title: 'Two Truths and a Lie', category: 'ice-breaker', defaultDuration: 15, description: 'Each person shares two truths and one lie. Others guess.' },
  { title: 'Speed Networking', category: 'ice-breaker', defaultDuration: 15, description: 'Quick 2-minute conversations in pairs, then rotate.' },
  { title: 'Personal User Manual', category: 'ice-breaker', defaultDuration: 20, description: 'Share how you work best, your communication preferences, etc.' },
  { title: 'Check-in Round', category: 'ice-breaker', defaultDuration: 10, description: 'Quick round where everyone shares how they feel and their expectations.' },
  { title: 'Energy Check', category: 'ice-breaker', defaultDuration: 5, description: 'Quick energy level check with the group.' },
  { title: 'One Word Check-in', category: 'ice-breaker', defaultDuration: 5, description: 'Everyone shares one word that describes their current state.' },

  // Break
  { title: 'Coffee Break', category: 'break', defaultDuration: 15, description: 'Short refreshment break.' },
  { title: 'Lunch Break', category: 'break', defaultDuration: 60, description: 'Lunch break.' },
  { title: 'Energizer Activity', category: 'break', defaultDuration: 10, description: 'Quick physical or mental exercise to re-energize the group.' },
  { title: 'Stretch Break', category: 'break', defaultDuration: 5, description: 'Quick stretching break to stay fresh.' },

  // Other
  { title: 'Wrap-up & Retrospective', category: 'other', defaultDuration: 20, description: 'Reflect on what went well and what could improve.' },
  { title: 'Q&A Session', category: 'other', defaultDuration: 15, description: 'Open floor for questions and discussions.' },
  { title: 'Silent Reflection', category: 'other', defaultDuration: 10, description: 'Individual time to reflect and write down thoughts.', tools: ['notebook'] },
  { title: 'Prototyping', category: 'other', defaultDuration: 120, description: 'Build a realistic prototype of the selected solution.', tools: ['laptop', 'design-tools'] },
  { title: 'User Interviews', category: 'other', defaultDuration: 60, description: 'Conduct user interviews to test prototypes.', tools: ['prototype', 'notebook', 'voice-recorder'] },
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
          { title: 'Start with Positives', category: 'discovery', durationMinutes: 15, description: 'Everyone writes what is working well (stickies) & presents.', tools: ['post-it', 'markers'] },
          { title: 'Capture Problems', category: 'discovery', durationMinutes: 15, description: 'Silently write problems/challenges.', tools: ['post-it', 'markers'] },
          { title: 'Dot Voting', category: 'decision', durationMinutes: 15, description: 'Vote on the most critical problems.' },
          { title: 'How Might We (HMW)', category: 'ideation', durationMinutes: 30, description: 'Convert top problems into "How Might We" questions.', tools: ['post-it', 'markers'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 30, description: 'Silently brainstorm solutions for the HMW questions.', tools: ['post-it', 'markers'] },
          { title: 'Dot Voting', category: 'decision', durationMinutes: 15, description: 'Vote on the best solutions.' },
          { title: 'Effort/Impact Matrix', category: 'decision', durationMinutes: 30, description: 'Plot top solutions on an Effort vs. Impact matrix.', tools: ['whiteboard', 'post-it'] },
          { title: 'Make it Actionable', category: 'decision', durationMinutes: 20, description: 'Define 3 actionable steps for selected solutions.', tools: ['post-it', 'markers'] },
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
          { title: 'Keynote Presentation', category: 'presentation', durationMinutes: 15, description: 'Intro to Brand Sprint process.' },
          { title: '20-Year Roadmap', category: 'discovery', durationMinutes: 30, description: 'Where will the company be in 5, 10, 20 years?', tools: ['whiteboard', 'post-it'] },
          { title: 'What, How, Why (Golden Circle)', category: 'discovery', durationMinutes: 15, description: 'Define why the company exists beyond making money.', tools: ['whiteboard'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Top 3 Values', category: 'ideation', durationMinutes: 30, description: '"We are..." (e.g., Simple, Trustworthy).', tools: ['post-it', 'markers'] },
          { title: 'Top 3 Audiences', category: 'ideation', durationMinutes: 15, description: 'Who is most important to please?', tools: ['post-it', 'markers'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Personality Sliders', category: 'ideation', durationMinutes: 30, description: 'Define the brand tone (e.g., Friendly vs. Authority, Mass Appeal vs. Elite).', tools: ['whiteboard'] },
          { title: 'Competitive Landscape', category: 'discovery', durationMinutes: 30, description: 'Sketch a 2x2 matrix and position the brand vs. competitors.', tools: ['whiteboard', 'markers'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Review & Agree', category: 'presentation', durationMinutes: 15, description: 'Decider approves the "Cheat Sheet".' },
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
          { title: 'Keynote Presentation', category: 'presentation', durationMinutes: 20, description: 'Introduction to Strategy Signal process.' },
          { title: 'SWOT Analysis', category: 'discovery', durationMinutes: 45, description: 'Current mission, vision, SWOT.', tools: ['whiteboard', 'post-it'] },
          { title: 'PESTLE Analysis', category: 'discovery', durationMinutes: 60, description: 'External scan: trends and weak signals.', tools: ['whiteboard', 'post-it'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Brainstorm and categorize specific signals (tech, social, etc.).', tools: ['post-it', 'markers'] },
          { title: 'Priority Matrix', category: 'decision', durationMinutes: 45, description: 'Rank signals by potential impact and uncertainty.', tools: ['whiteboard', 'post-it'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Scenario Planning', category: 'ideation', durationMinutes: 60, description: 'Develop 2-3 future scenarios based on prioritized signals.', tools: ['whiteboard', 'post-it'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Brainstorm strategic responses for each scenario.', tools: ['post-it', 'markers'] },
          { title: 'Action Planning', category: 'decision', durationMinutes: 45, description: 'Define 90-day monitoring and implementation steps.', tools: ['whiteboard', 'post-it'] },
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
          { title: 'Stakeholder Interviews', category: 'discovery', durationMinutes: 60, description: 'Talk to key stakeholders.', tools: ['notebook', 'voice-recorder'] },
          { title: 'Persona Creation', category: 'discovery', durationMinutes: 45, description: 'Define the specific persona.', tools: ['post-it', 'markers', 'templates'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Problem Statement Definition', category: 'discovery', durationMinutes: 30, description: 'Define the urgent pain point.', tools: ['whiteboard'] },
          { title: 'Competitor Analysis', category: 'discovery', durationMinutes: 45, description: 'Analyze alternatives.', tools: ['whiteboard', 'laptop'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 30, description: 'What makes us radically different?', tools: ['post-it', 'markers'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Brainstorm 3+ distinct ways to solve the problem.', tools: ['post-it', 'markers'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Effort/Impact Matrix', category: 'decision', durationMinutes: 45, description: 'Stress-test approaches (Revenue, User Exp, Feasibility).', tools: ['whiteboard', 'post-it'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Supervote (Decider)', category: 'decision', durationMinutes: 15, description: 'Select the strongest conceptual approach.' },
          { title: 'Action Planning', category: 'decision', durationMinutes: 45, description: 'Write the clear hypothesis to be tested.', tools: ['whiteboard', 'post-it'] },
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
          { title: 'Keynote Presentation', category: 'presentation', durationMinutes: 20, description: 'Map the long-term goal and challenge.' },
          { title: 'Expert Talk', category: 'presentation', durationMinutes: 45, description: 'Ask the Experts session.', tools: ['projector', 'laptop'] },
          { title: 'How Might We (HMW)', category: 'ideation', durationMinutes: 20, description: 'How Might We notes.', tools: ['post-it', 'markers'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Lightning Demos', category: 'ideation', durationMinutes: 30, description: 'Quick presentations of inspiring solutions.', tools: ['laptop', 'projector'] },
          { title: '4-Step Sketch', category: 'ideation', durationMinutes: 40, description: 'Notes, Ideas, Crazy 8s, Solution Sketch.', tools: ['paper', 'markers'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Heatmap Voting', category: 'decision', durationMinutes: 15, description: 'Everyone places dots on solution sketches silently.' },
          { title: 'Speed Critique', category: 'decision', durationMinutes: 20, description: 'Quick structured feedback on each solution.' },
          { title: 'Supervote (Decider)', category: 'decision', durationMinutes: 10, description: 'Decider makes the final vote.' },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Storyboard Walkthrough', category: 'presentation', durationMinutes: 120, description: 'Map out the exact flow for the prototype (10-15 panels).', tools: ['whiteboard', 'post-it'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Prototyping', category: 'other', durationMinutes: 120, description: 'Build: Divide and conquer (Makers, Stitcher, Writer, Asset Collector).', tools: ['laptop', 'design-tools'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Prototyping', category: 'other', durationMinutes: 120, description: 'Continue building realistic high-fidelity prototype.', tools: ['laptop', 'design-tools'] },
          { title: 'Review & Agree', category: 'presentation', durationMinutes: 30, description: 'Trial run - end of day check.' },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 3,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'User Interviews', category: 'other', durationMinutes: 60, description: 'User Interview #1', tools: ['prototype', 'notebook'] },
          { title: 'User Interviews', category: 'other', durationMinutes: 60, description: 'User Interview #2', tools: ['prototype', 'notebook'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'User Interviews', category: 'other', durationMinutes: 60, description: 'User Interview #3', tools: ['prototype', 'notebook'] },
          { title: 'User Interviews', category: 'other', durationMinutes: 60, description: 'User Interviews #4 & #5', tools: ['prototype', 'notebook'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Review & Agree', category: 'presentation', durationMinutes: 30, description: 'Score: Find patterns from positive/negative notes.' },
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
          { title: 'Keynote Presentation', category: 'presentation', durationMinutes: 20, description: 'Introduction to Value Proposition Canvas.' },
          { title: 'Persona Creation', category: 'discovery', durationMinutes: 60, description: 'Customer Segments & Personas.', tools: ['post-it', 'markers', 'templates'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'User Journey Mapping', category: 'discovery', durationMinutes: 45, description: 'Jobs: What are customers trying to get done?', tools: ['whiteboard', 'post-it', 'markers'] },
          { title: 'Empathy Mapping', category: 'discovery', durationMinutes: 30, description: 'Pains: Risks and obstacles. Gains: Desired outcomes.', tools: ['post-it', 'markers'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Products/Services brainstorm.', tools: ['post-it', 'markers'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 45, description: 'Pain Relievers & Gain Creators.', tools: ['post-it', 'markers'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Effort/Impact Matrix', category: 'decision', durationMinutes: 45, description: 'Fit Analysis: Map Value Map to Customer Profile.', tools: ['whiteboard', 'post-it'] },
          { title: 'Action Planning', category: 'decision', durationMinutes: 30, description: 'Draft Value Prop statements.', tools: ['whiteboard', 'post-it'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Silent Reflection', category: 'other', durationMinutes: 15, description: 'Extract key assumptions/hypotheses.', tools: ['notebook'] },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Experiment Design: Plan tests (interviews, landing pages).', tools: ['post-it', 'markers'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Priority Matrix', category: 'decision', durationMinutes: 30, description: 'Prioritize experiments.', tools: ['whiteboard', 'post-it'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Action Planning', category: 'decision', durationMinutes: 45, description: 'Roadmap for testing and iteration.', tools: ['whiteboard', 'post-it'] },
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
          { title: 'Keynote Presentation', category: 'presentation', durationMinutes: 15, description: 'Introduction to Lean Inception.' },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Write the Product Vision Statement.', tools: ['whiteboard', 'post-it'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Problem Statement Definition', category: 'discovery', durationMinutes: 45, description: 'Is - Is Not - Does - Does Not Do (Scoping).', tools: ['whiteboard'] },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 45, description: 'Product Goals.', tools: ['post-it', 'markers'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Persona Creation', category: 'discovery', durationMinutes: 60, description: 'User Personas (Needs, Behaviors).', tools: ['post-it', 'markers', 'templates'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'User Journey Mapping', category: 'discovery', durationMinutes: 90, description: 'User Journeys (Step-by-step flow).', tools: ['whiteboard', 'post-it', 'markers'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Silent Reflection', category: 'other', durationMinutes: 15, description: 'Individual review of journeys.', tools: ['notebook'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Feature Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Generate features.', tools: ['post-it', 'markers'] },
          { title: 'Speed Critique', category: 'decision', durationMinutes: 30, description: 'Technical/UX/Business review of features.' },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Priority Matrix', category: 'decision', durationMinutes: 45, description: 'Sequencer: Prioritize features for MVP.', tools: ['whiteboard', 'post-it'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Action Planning', category: 'decision', durationMinutes: 45, description: 'MVP Canvas: Fill in the final MVP definition.', tools: ['whiteboard', 'post-it'] },
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
          { title: 'Keynote Presentation', category: 'presentation', durationMinutes: 30, description: 'Principles of Blue Ocean, PMS Map.' },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Competitor Analysis', category: 'discovery', durationMinutes: 60, description: '"As-Is" Strategy Canvas: Map competing factors.', tools: ['whiteboard', 'laptop'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: 'Map current value curve.', tools: ['whiteboard', 'markers'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 1,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 90, description: 'Six Paths Framework: Look across industries, strategic groups, buyer chains.', tools: ['whiteboard', 'post-it'] },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Lightning Demos', category: 'ideation', durationMinutes: 30, description: 'Visual Exploration: Field work or massive brainstorming.', tools: ['laptop', 'projector'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'ERRC Grid', category: 'ideation', durationMinutes: 60, description: 'Eliminate, Reduce, Raise, Create factors.', tools: ['whiteboard', 'post-it'] },
          { title: 'Wrap-up & Retrospective', category: 'other', durationMinutes: 15 },
        ],
      },
      {
        dayIndex: 2,
        items: [
          { title: 'Energy Check', category: 'ice-breaker', durationMinutes: 5 },
          { title: 'Brainstorming', category: 'ideation', durationMinutes: 60, description: '"To-Be" Strategy Canvas: Draw the new Value Curve.', tools: ['whiteboard', 'markers'] },
          { title: 'Team Showcase', category: 'presentation', durationMinutes: 30, description: 'Present to stakeholders/customers for feedback.' },
          { title: 'Coffee Break', category: 'break', durationMinutes: 15 },
          { title: 'Silent Reflection', category: 'other', durationMinutes: 15, description: 'Adjust based on feedback.', tools: ['notebook'] },
          { title: 'Lunch Break', category: 'break', durationMinutes: 60 },
          { title: 'Action Planning', category: 'decision', durationMinutes: 60, description: 'Tipping point leadership and fair process planning.', tools: ['whiteboard', 'post-it'] },
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
