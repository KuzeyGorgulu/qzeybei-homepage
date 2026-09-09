export type SocialLink = {
  label: string
  href: string
}

export type ProjectVisual = 'motion' | 'city' | 'gym' | 'q-system'

export type Project = {
  name: string
  shortName: string
  tagline: string
  description: string
  status: string
  url?: string
  githubUrl?: string
  visual: ProjectVisual
}

export type CurrentlyItem = {
  label: string
  detail: string
}

export type Experiment = {
  category: string
  title: string
  detail: string
  status: string
}

export type NavigationItem = {
  label: string
  href: `#${string}`
}

export type SiteContent = {
  brand: string
  person: {
    name: string
    role: string
    location: string
  }
  year: string
  tagline: string
  heroContext: string
  navigation: NavigationItem[]
  socialLinks: SocialLink[]
  projects: Project[]
  currently: {
    heading: string
    items: CurrentlyItem[]
  }
  about: {
    statement: string
    details: string[]
  }
  experiments: {
    heading: string
    items: Experiment[]
  }
  contact: {
    heading: string
    email: string
    signoff: string
  }
}

export const siteContent: SiteContent = {
  brand: 'Qzeybei',
  person: {
    name: 'Kuzey Görgülü',
    role: 'Developer / Student',
    location: 'Ankara, Türkiye',
  },
  year: '2026',
  tagline: 'I build things I wish existed.',
  heroContext: 'Independent builder / Ankara',
  navigation: [
    { label: 'Projects', href: '#projects' },
    { label: 'Currently', href: '#currently' },
    { label: 'About', href: '#about' },
    { label: 'Experiments', href: '#experiments' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/KuzeyGorgulu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kuzeygorgulu' },
  ],
  projects: [
    {
      name: 'MotionLab',
      shortName: 'MotionLab',
      tagline: 'Measure motion. From video.',
      description:
        'A local-first workspace for extracting real measurements from ordinary video—turning frames into trajectories, angles, and useful physics.',
      status: 'Open source',
      githubUrl: 'https://github.com/KuzeyGorgulu/motionlab',
      visual: 'motion',
    },
    {
      name: 'Procedural City Generator',
      shortName: 'City',
      tagline: 'Generate cities from a seed.',
      description:
        'A procedural sandbox that turns a single seed into streets, blocks, and a different urban system every time.',
      status: 'Experimental',
      visual: 'city',
    },
    {
      name: 'Gym Party',
      shortName: 'Gym Party',
      tagline: 'Track gym attendance with friends in seconds.',
      description:
        'A deliberately fast shared attendance tracker for the people you train with. Less logging, more showing up.',
      status: 'Building',
      visual: 'gym',
    },
    {
      name: 'Qzeybei 2.0',
      shortName: 'Qzeybei 2.0',
      tagline: 'A second brain in progress.',
      description:
        'An evolving system for collecting ideas, connecting context, and turning unfinished thoughts into useful next actions.',
      status: 'In progress / Not public',
      visual: 'q-system',
    },
  ],
  currently: {
    heading: 'A live index of what has my attention.',
    items: [
      { label: 'Building', detail: 'Gym Party and the wider Qzeybei project ecosystem.' },
      { label: 'Studying', detail: 'Materials Science & Nanotechnology.' },
      { label: 'Exploring', detail: 'Physics, simulation, and practical AI.' },
      { label: 'Inevitably', detail: 'Starting another project I probably do not need.' },
    ],
  },
  about: {
    statement:
      'I’m Kuzey—a student and builder exploring software, simulations, AI, and physics. Most things here start with curiosity and the need to make an idea real.',
    details: ['TOBB ETÜ', 'Materials Science', 'Independent builder'],
  },
  experiments: {
    heading: 'A working shelf for ideas that are too small, too early, or too interesting to ignore.',
    items: [
      {
        category: 'Physics',
        title: 'Trajectory notebooks',
        detail: 'Small tools for turning video and sensor data into physical measurements.',
        status: 'Ongoing',
      },
      {
        category: 'Generative systems',
        title: 'Seed studies',
        detail: 'Rules, noise, and repeatable randomness for synthetic places.',
        status: 'Iteration 06',
      },
      {
        category: 'Applied AI',
        title: 'Memory prototypes',
        detail: 'Experiments in context that stays useful instead of merely accumulating.',
        status: 'Notebook',
      },
      {
        category: 'Interface',
        title: 'One-purpose software',
        detail: 'Quiet interactions tested against a single real task.',
        status: 'Study',
      },
    ],
  },
  contact: {
    heading: 'Have an idea worth making?',
    email: 'hello@qzeybei.com',
    signoff: 'Made by Kuzey. Known online as Qzeybei.',
  },
}
