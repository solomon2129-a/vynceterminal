export interface ArchiveEntry {
  id: string;
  title: string;
  url: string;
  type: string;
  field: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'DEVELOPMENT';
  year: string;
  description: string;
  details: {
    branding: boolean;
    ui: boolean;
    ux: boolean;
    visuals: boolean;
    atmosphere: boolean;
    identity: boolean;
    experience: boolean;
  };
  image?: string;
  color?: string;
}

export const archiveEntries: ArchiveEntry[] = [
  {
    id: 'ARC_001',
    title: 'ATMAVA',
    url: 'https://www.atmava.com/',
    type: 'WELLNESS_INTERFACE',
    field: 'YOGA + MEDITATION',
    status: 'ACTIVE',
    year: '2026',
    description: 'A serene digital sanctuary for wellness practitioners, blending breath-work with fluid architectural interfaces.',
    details: {
      branding: true,
      ui: true,
      ux: true,
      visuals: true,
      atmosphere: true,
      identity: true,
      experience: true,
    },
  },
  {
    id: 'ARC_002',
    title: 'GRANDEZZA',
    url: 'https://grandezza.vercel.app',
    type: 'ARCHITECTURAL_ENVIRONMENT',
    field: 'CONSTRUCTION + DESIGN',
    status: 'ACTIVE',
    year: '2026',
    description: 'Precision-engineered interface for high-end architectural visualization and construction management.',
    details: {
      branding: true,
      ui: true,
      ux: true,
      visuals: true,
      atmosphere: true,
      identity: true,
      experience: true,
    },
  },
  {
    id: 'ARC_003',
    title: 'SNEAKOUT',
    url: 'https://www.sneakout.co/discover',
    type: 'SOCIAL_EVENT_SYSTEM',
    field: 'EVENTS + NETWORKING',
    status: 'ACTIVE',
    year: '2026',
    description: 'A dynamic system for event discovery and social networking, built with high-velocity interactions.',
    details: {
      branding: true,
      ui: true,
      ux: true,
      visuals: true,
      atmosphere: true,
      identity: true,
      experience: true,
    },
  },
  {
    id: 'ARC_004',
    title: 'ABLEDOTS',
    url: 'https://www.abledots.com',
    type: 'ACCESSIBILITY_PLATFORM',
    field: 'DISABILITY_SUPPORT',
    status: 'ACTIVE',
    year: '2026',
    description: 'Inclusive digital architecture designed to bridge the gap in disability support and accessibility.',
    details: {
      branding: true,
      ui: true,
      ux: true,
      visuals: true,
      atmosphere: true,
      identity: true,
      experience: true,
    },
  },
];
