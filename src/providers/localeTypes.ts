export type StatItem = { icon: 'users' | 'gear' | 'award' }
export type ServiceItem = { icon: 'web' | 'responsive' | 'ui' | 'api' }
export type SocialLink = { id: 'instagram' | 'facebook' | 'linkedin' | 'whatsapp' | 'twitter' }

export type TimelineCopy = {
  title: string
  organization: string
  date: string
  note?: string
  bullets?: string[]
}

export type ProjectCopy = {
  title: string
  description: string
  highlights: string[]
  demoLabel: string
  liveLabel: string
}

export type ProjectCopyId = 'aliman-rouh-golden' | 'aliman-rouh' | 'p2' | 'p1'

export type SkillCategoryId = 'frontend' | 'state-data' | 'forms-validation' | 'tools'

export type ServiceCopy = {
  title: string
  text: string
}

export type LocaleMessages = {
  nav: {
    home: string
    about: string
    skills: string
    trust: string
    projects: string
    qualification: string
    contact: string
  }
  a11y: {
    goHome: string
    primaryNav: string
    switchLanguage: string
    otherLanguage: string
    openMenu: string
    closeMenu: string
    menu: string
    github: string
    linkedin: string
    whatsapp: string
    themeLight: string
    themeDark: string
  }
  brand: {
    name: string
  }
  seo: {
    title: string
    description: string
  }
  hero: {
    kicker: string
    headline: string
    subline: string
    viewProjects: string
    contact: string
    downloadCv: string
    support: string
    github: string
    linkedin: string
    stack: string
    badge: string
    greeting: string
    lead: string
    noteLine1: string
    noteLine2: string
    cardTitle: string
    cardSubtitle: string
  }
  about: {
    intro: string
    bio: string
    learnMore: string
    whatIDoHeading: string
    whatIDoLead: string
    whatIDoFocusLabel: string
    whatIDoBullets: string[]
    whatIDoClosing: string
    services: ServiceCopy[]
  }
  skills: {
    title: string
    intro: string
    categories: Record<SkillCategoryId, string>
  }
  trust: {
    eyebrow: string
    title: string
    statement: string
    coreStack: string
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    highlightsLabel: string
    opensInNewTab: string
    previewAlt: string
    items: Record<ProjectCopyId, ProjectCopy>
  }
  qualification: {
    title: string
    subtitle: string
    tabsLabel: string
    education: string
    experience: string
    educationItems: TimelineCopy[]
    experienceItems: TimelineCopy[]
  }
  contact: {
    title: string
    subtitle: string
    intro: string
    location: string
    locationValue: string
    email: string
    phone: string
    name: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
  }
  cta: {
    heading: string
    button: string
  }
  footer: {
    blurb: string
    quickLinks: string
    connect: string
    copyright: string
  }
}
