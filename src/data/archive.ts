export interface ArchiveEntry {
  id: string;
  title: string;
  url: string;
  type: string;
  field: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'DEVELOPMENT';
  year: string;
  description: string;
  personality: {
    identity: string[];
    atmosphere: 'BREATH' | 'SIGNAL' | 'BLUEPRINT' | 'NETWORK';
    accentColor: string;
    systemLabel: string;
    feeling: string;
  };
  details: {
    branding: boolean;
    ui: boolean;
    ux: boolean;
    visuals: boolean;
    atmosphere: boolean;
    identity: boolean;
    experience: boolean;
    systems?: boolean;
  };
  image?: string;
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
    personality: {
      identity: ['spiritual technology', 'stillness', 'breath', 'inner mastery', 'digital sanctuary'],
      atmosphere: 'BREATH',
      accentColor: '#B7B1A9', // Muted warm
      systemLabel: 'ATMOSPHERIC_SCAN // LIVE',
      feeling: 'Entering a sacred digital temple.',
    },
    details: {
      branding: false,
      ui: false,
      ux: true,
      visuals: true,
      atmosphere: true,
      identity: false,
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
    personality: {
      identity: ['luxury architecture', 'material authority', 'precision', 'weight', 'legacy craftsmanship'],
      atmosphere: 'BLUEPRINT',
      accentColor: '#D4AF37', // Muted gold
      systemLabel: 'MATERIAL_SCAN // LIVE',
      feeling: 'Opening classified files from an elite architectural intelligence division.',
    },
    details: {
      branding: true,
      ui: false,
      ux: true,
      visuals: true,
      atmosphere: false,
      identity: true,
      experience: false,
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
    personality: {
      identity: ['urban infrastructure', 'social energy', 'live events', 'trust systems', 'nightlife intelligence'],
      atmosphere: 'SIGNAL',
      accentColor: '#7F1D1D', // Deep crimson
      systemLabel: 'SIGNAL_GRID // LIVE',
      feeling: 'A live underground social network currently transmitting activity.',
    },
    details: {
      branding: false,
      ui: false,
      ux: true,
      visuals: false,
      atmosphere: false,
      identity: true,
      experience: true,
      systems: true,
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
    personality: {
      identity: ['human infrastructure', 'accessibility', 'inclusion systems', 'social architecture', 'verified networks'],
      atmosphere: 'NETWORK',
      accentColor: '#D97706', // Warm amber
      systemLabel: 'NETWORK_SCAN // LIVE',
      feeling: 'A living human network quietly rebuilding society underneath the surface.',
    },
    details: {
      branding: false,
      ui: false,
      ux: true,
      visuals: false,
      atmosphere: true,
      identity: false,
      experience: true,
      systems: true,
    },
  },
];
