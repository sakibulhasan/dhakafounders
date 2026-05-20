// ── Site Metadata ──────────────────────────────────────────────
export const SITE_META = {
  name: 'Dhaka Founders',
  tagline: 'Discover the Builders Shaping Bangladesh\'s Tech Ecosystem.',
  description:
    'Dhaka Founders is the premier directory connecting founders, investors, and builders across Bangladesh\'s tech ecosystem.',
  url: 'https://dhakafounders.com',
  twitter: '@dhakafounders',
} as const

// ── Navigation ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'Directory', href: '/directory' },
  { label: 'Dashboard', href: '/dashboard' },
] as const

export const FOOTER_LINKS = {
  Platform: [
    { label: 'Directory',  href: '/directory' },
    { label: 'Dashboard',  href: '/dashboard' },
    { label: 'For Investors', href: '#' },
  ],
  Community: [
    { label: 'About Us',   href: '#' },
    { label: 'Blog',       href: '#' },
    { label: 'Events',     href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
} as const

// ── Hero Headlines (from brand-dna.md) ─────────────────────────
export const HERO_HEADLINES = [
  'Discover the Builders Shaping Bangladesh\'s Tech Ecosystem.',
  'Connect, Collaborate, and Scale with Dhaka\'s Top Founders.',
  'Your Gateway to the Most Innovative Startups in Bangladesh.',
] as const

// ── Stats ──────────────────────────────────────────────────────
export const COMMUNITY_STATS = [
  { value: '500+',  label: 'Active Founders',     suffix: '' },
  { value: '200+',  label: 'Startups Listed',      suffix: '' },
  { value: '80+',   label: 'Active Investors',     suffix: '' },
  { value: '6',     label: 'Cities Represented',   suffix: '' },
] as const

// ── Features ───────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: 'Users',
    title: 'Build Your Network',
    description:
      'Connect with like-minded founders, mentors, and investors who are actively shaping the Bangladeshi startup landscape.',
    color: '#2A81C7',
  },
  {
    icon: 'TrendingUp',
    title: 'Access Funding',
    description:
      'Get discovered by top local and regional investors. Showcase your startup and unlock growth capital.',
    color: '#16a34a',
  },
  {
    icon: 'Zap',
    title: 'Scale Faster',
    description:
      'Leverage founder resources, workshops, and community support to accelerate your startup\'s growth trajectory.',
    color: '#d97706',
  },
] as const

// ── Mock Startup Data ──────────────────────────────────────────
export type Startup = {
  id: string
  name: string
  tagline: string
  category: string
  stage: string
  city: string
  foundedYear: number
  logoInitials: string
  logoColor: string
}

export const MOCK_STARTUPS: Startup[] = [
  {
    id: '1',
    name: 'ShopSync BD',
    tagline: 'Unified commerce platform for Bangladeshi SMEs',
    category: 'E-Commerce',
    stage: 'Series A',
    city: 'Dhaka',
    foundedYear: 2022,
    logoInitials: 'SS',
    logoColor: '#2A81C7',
  },
  {
    id: '2',
    name: 'MediLink',
    tagline: 'Connecting patients to doctors across rural Bangladesh',
    category: 'HealthTech',
    stage: 'Seed',
    city: 'Chittagong',
    foundedYear: 2023,
    logoInitials: 'ML',
    logoColor: '#16a34a',
  },
  {
    id: '3',
    name: 'AgroAI',
    tagline: 'AI-powered crop advisory for smallholder farmers',
    category: 'AgriTech',
    stage: 'Pre-Seed',
    city: 'Sylhet',
    foundedYear: 2023,
    logoInitials: 'AA',
    logoColor: '#d97706',
  },
  {
    id: '4',
    name: 'PayEasy',
    tagline: 'Cross-border remittance infrastructure for South Asia',
    category: 'FinTech',
    stage: 'Series B',
    city: 'Dhaka',
    foundedYear: 2020,
    logoInitials: 'PE',
    logoColor: '#7c3aed',
  },
  {
    id: '5',
    name: 'EduBangla',
    tagline: 'Vernacular e-learning for K-12 students in Bangladesh',
    category: 'EdTech',
    stage: 'Seed',
    city: 'Dhaka',
    foundedYear: 2022,
    logoInitials: 'EB',
    logoColor: '#dc2626',
  },
  {
    id: '6',
    name: 'LogiFlow',
    tagline: 'Last-mile logistics optimization for e-commerce brands',
    category: 'Logistics',
    stage: 'Series A',
    city: 'Gazipur',
    foundedYear: 2021,
    logoInitials: 'LF',
    logoColor: '#0891b2',
  },
]

export const STARTUP_CATEGORIES = [
  'All',
  'E-Commerce',
  'FinTech',
  'HealthTech',
  'EdTech',
  'AgriTech',
  'Logistics',
] as const

export const FUNDING_STAGES = [
  'All Stages',
  'Pre-Seed',
  'Seed',
  'Series A',
  'Series B',
] as const
