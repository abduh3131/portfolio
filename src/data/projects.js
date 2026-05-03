export const projects = [
  {
    id: 'micropilot',
    title: 'MicroPilot — Autonomous E-Scooter',
    tagline: 'Capstone · University Project',
    description:
      'Ported Comma AI’s openpilot autonomous driving stack onto a custom electric scooter, running TensorRT-accelerated inference on an NVIDIA Jetson Orin NX with a modular Python IPC architecture.',
    highlights: [
      'Built a Virtual Panda (virtual CAN bus) and rebuilt the perception pipeline as modular IPC services',
      'Fixed two critical model preprocessing bugs (Y-channel decomposition, input normalization)',
      'Pluggable model adapter system: Supercombo for road lanes, SegFormer-B0 for sidewalk segmentation',
      'Contributed to lidar-based obstacle detection — completed real-world outdoor testing on campus'
    ],
    technologies: ['Python', 'NVIDIA Jetson', 'TensorRT', 'ROS', 'openpilot', 'SegFormer', 'RPLidar'],
    repo: 'https://github.com/abduh3131/MicroPilot',
    live: '',
    cover: '/projects/micropilot.svg'
  },
  {
    id: 'dr-ai',
    title: 'Dr AI — Clinical Documentation System',
    tagline: 'Hanoosh Software · Production Deployment',
    description:
      'Fully offline AI pipeline that listens to doctor–patient visits and generates structured SOAP notes in real time. Deployed in a live clinic seeing ~40 patients/day, cutting physician documentation time from 5–10 minutes to under 2.',
    highlights: [
      'WhisperX ASR with speaker diarization and medical-term error correction',
      'Local LLM inference with structured context injection — zero external data transmission',
      'REST API to a React frontend with per-patient session files and SOAP reports',
      'PHIPA-aligned, deployed and maintained in production for 3+ years'
    ],
    technologies: ['Python', 'WhisperX', 'Ollama', 'FastAPI', 'PyTorch', 'React'],
    repo: '',
    live: '',
    cover: '/projects/drai.svg'
  },
  {
    id: 'aegisemr',
    title: 'AegisEMR — Multi-Tenant SaaS EMR',
    tagline: 'Hanoosh Software · In Development',
    description:
      'Production-grade Electronic Medical Records platform with AI-powered SOAP note generation, billing code recommendations, and dual provider support (cloud + local) via a custom orchestration layer.',
    highlights: [
      'Turborepo monorepo: 4 apps, 10 packages, 330+ TypeScript files',
      'PostgreSQL + Prisma schema with 40+ tables; Redis + BullMQ background workers',
      'PHIPA-compliant with 8-role RBAC and an immutable audit trail',
      'Next.js 15 App Router + React 19 frontend, NestJS backend'
    ],
    technologies: ['Next.js 15', 'React 19', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Turborepo'],
    repo: '',
    live: '',
    cover: '/projects/aegisemr.svg'
  },
  {
    id: 'edtech-marketplace',
    title: 'EdTech Marketplace Platform',
    tagline: 'Hanoosh Software · In Development',
    description:
      'Cross-platform mobile marketplace connecting students with verified instructors for live 1-on-1 video sessions, with marketplace payments, real-time messaging, and an AI-powered matching algorithm.',
    highlights: [
      'React Native + Expo SDK 55, TypeScript strict mode',
      'Supabase PostgreSQL with 30+ tables and 26 RLS policies',
      'Agora RTC video, Stripe Connect marketplace payments, AI-powered 7-factor matching',
      '115 TypeScript files · 39 screens · 14 test suites · 187 passing tests · EAS cloud CI/CD'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'Agora RTC', 'Stripe Connect'],
    repo: '',
    live: '',
    cover: '/projects/edtech.svg'
  },
  {
    id: 'logistics-marketplace',
    title: 'Logistics Marketplace App',
    tagline: 'Hanoosh Software · In Development',
    description:
      'Cross-platform logistics marketplace with real-time competitive bidding, GPS job tracking, in-app messaging, and a full rating and review system. Functional Android APK delivered to stakeholders.',
    highlights: [
      'Real-time competitive bidding engine',
      'GPS-based job tracking with live status updates',
      'In-app messaging and a full rating/review system',
      'Flutter + Firebase backend, Riverpod state management, GoRouter navigation'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'GoRouter'],
    repo: '',
    live: '',
    cover: '/projects/logistics.svg'
  },
  {
    id: 'client-sites',
    title: 'Client Web Practice',
    tagline: 'Self-Employed · Independent',
    description:
      'Five live client websites built and shipped end-to-end (React, PHP, Node.js, MySQL, REST APIs). 100% client retention post-launch. Featured sites combine for ~3,200 monthly organic visitors across multiple small-business verticals.',
    highlights: [
      '5 live client sites with 100% post-launch retention',
      'Riipen industry project with an integrated on-site AI model for customer Q&A and pricing',
      'Combined ~3,200 monthly organic visitors across featured sites'
    ],
    technologies: ['React', 'PHP', 'Node.js', 'MySQL', 'REST APIs', 'SEO'],
    repo: '',
    live: '',
    cover: '/projects/client-sites.svg'
  }
]
