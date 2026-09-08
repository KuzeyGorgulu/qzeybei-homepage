export type SocialLink = {
  label: string
  href: string
}

export type FutureProject = {
  name: string
  domain: string
  note: string
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
  navigation: NavigationItem[]
  socialLinks: SocialLink[]
  currently: {
    heading: string
    detail: string
  }
  futureProjects: FutureProject[]
}

export const siteContent: SiteContent = {
  brand: 'QZEYBEI',
  person: {
    name: 'Kuzey Görgülü',
    role: 'Developer / Student',
    location: 'Ankara, Türkiye',
  },
  year: '2026',
  tagline: 'I build things I wish existed.',
  navigation: [
    { label: 'Projects', href: '#projects' },
    { label: 'Currently', href: '#currently' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:hello@qzeybei.com' },
  ],
  currently: {
    heading: 'Learning in public. Building in private.',
    detail: 'Studying, prototyping, and shaping the first Qzeybei projects.',
  },
  futureProjects: [
    { name: 'Motionlab', domain: 'motionlab.qzeybei.com', note: 'Movement / tools' },
    { name: 'Gym Party', domain: 'gym-party.qzeybei.com', note: 'Training / social' },
    { name: 'City', domain: 'city.qzeybei.com', note: 'Places / discovery' },
  ],
}

