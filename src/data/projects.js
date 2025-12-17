export const projects = [
  {
    id: 'capstone',
    title: 'Autonomous E-Scooter',
    tagline: 'Capstone Project',
    description:
      'Contributing to software architecture, data processing, and system integration for an autonomous micromobility platform.',
    highlights: [
      'Software architecture design',
      'Data processing pipelines',
      'System integration'
    ],
    technologies: ['Embedded Systems', 'AI', 'C++', 'Python'],
    repo: '',
    live: '',
    images: []
  },
  {
    id: 'cipherboard',
    title: 'Dr AI',
    tagline: 'Local medical documentation assistant.',
    description:
      'Offline tool that listens to doctor–patient visits, generates structured SOAP notes, and suggests billing codes in real time.',
    highlights: [
      'Runs fully offline with local speech-to-text and LLM reasoning',
      'Outputs clean SOAP with actions, results, and next steps',
      'Per-patient session files with transcripts and reports'
    ],
    technologies: ['Python', 'WhisperX', 'FastAPI', 'Ollama', 'PyTorch'],
    repo: 'https://github.com/abduh3131/dr-ai-api/tree/v2',
    live: '',
    images: [
      { src: '/projects/cipherboard-primary.svg', alt: 'Dr AI overview screen' },
      { src: '/projects/cipherboard-secondary.svg', alt: 'Dr AI report drill-down view' }
    ]
  },
  {
    id: 'tracelab',
    title: 'Logistics Map',
    tagline: 'Live asset tracking on an interactive map.',
    description:
      'Reads coordinates from a database and renders vehicles and devices in real time with filters and status overlays.',
    highlights: [
      'Realtime markers with clustering and status badges',
      'DB-driven layers for routes and geofences',
      'Admin view for assignments and alerts'
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Leaflet.js'],
    repo: 'https://github.com/abduh3131/LogisticsTrackingApp',
    live: '',
    images: [
      { src: '/projects/tracelab-primary.svg', alt: 'Logistics Map live tracker' },
      { src: '/projects/tracelab-secondary.svg', alt: 'Logistics Map overlays and filters' }
    ]
  },
  {
    id: 'ghostshell',
    title: 'Batch SMS Prototype',
    tagline: 'File-driven messaging to selected users.',
    description:
      'Uploads a text file, lets you pick recipients from a database, and sends messages through a third-party API with delivery status.',
    highlights: [
      'Selectable recipients with search and tagging',
      'Queued sends with retries and status tracking',
      'Exportable send logs'
    ],
    technologies: ['PHP', 'MySQL', 'Twilio API'],
    repo: 'https://github.com/abduh3131/SMS-Batch-Send',
    live: '',
    images: [
      { src: '/projects/ghostshell-primary.svg', alt: 'Batch SMS console' },
      { src: '/projects/ghostshell-secondary.svg', alt: 'Batch SMS status and logs' }
    ]
  },
  {
    id: 'signalwatch',
    title: 'Personal Portfolio',
    tagline: 'Fast, clean, and data-driven.',
    description:
      'A modern React + Vite portfolio with smooth transitions and data files that drive sections for quick updates.',
    highlights: [
      'Data-sourced sections for easy edits',
      'Optimized assets and lazy loading',
      'Accessible components with keyboard navigation'
    ],
    technologies: ['React', 'Vite', 'React Router', 'Framer Motion', 'CSS'],
    repo: 'https://github.com/abduh3131/portfolio',
    live: '',
    images: [
      { src: '/projects/signalwatch-primary.svg', alt: 'Portfolio landing' },
      { src: '/projects/signalwatch-secondary.svg', alt: 'Portfolio projects grid' }
    ]
  }
]
