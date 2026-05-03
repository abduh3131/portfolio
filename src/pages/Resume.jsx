import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const experience = [
  {
    period: 'Dec 2025 — Now',
    title: 'Founder & Solo Developer · Hanoosh Software',
    summary: 'Independent studio sole-developing four production-grade applications across healthcare AI, EdTech, and logistics. Owner of all architecture, implementation, deployment, client relationships, and technical strategy.',
  },
  {
    period: 'Sept 2025 — Apr 2026',
    title: 'Capstone Software Engineer · MicroPilot',
    summary: "Ported Comma AI's openpilot stack onto a custom electric scooter on Jetson Orin NX with TensorRT inference. Built a Virtual Panda CAN bus, modular IPC pipeline, and pluggable model adapters.",
  },
  {
    period: 'May 2022 — Mar 2026',
    title: 'Health Tech Software Developer · Private Clinic',
    summary: 'Sole technical developer for a busy private medical practice. Designed and maintained the Dr AI clinical documentation system and the practice website (~1,700 monthly organic visitors).',
  },
  {
    period: 'May 2022 — Now',
    title: 'Software Developer & Web Consultant · Self-Employed',
    summary: 'Shipped 5 live client websites with 100% post-launch retention. Delivered a Riipen industry project featuring an integrated on-site AI model for customer Q&A and pricing.',
  },
]

const recognitions = [
  { period: '2025 — 2026', title: 'Vice President · Arab Student Union', summary: 'University leadership role — community building, events, partnerships.' },
  {
    period: '2020 — Now',
    title: 'Multi-Role Volunteer · Local Masjid',
    summary: 'Long-running multi-role volunteer at the local masjid — technology lead (deployed a 24/7 digital prayer-times display with embedded automation), parking and event-day coordination, and ad-hoc hands-on help including recent demo / build-out work.',
  },
  { period: 'Dec 2021', title: 'Energy Project Management Fundamentals', summary: 'Certification in project management fundamentals.' },
]

const stack = [
  { label: 'languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'Dart', 'PHP', 'SQL'] },
  { label: 'AI & LLM', items: ['Local LLMs', 'Ollama', 'WhisperX', 'RAG', 'TensorRT', 'SegFormer', 'Speaker diarization', 'Prompt engineering'] },
  { label: 'frontend & mobile', items: ['React 19', 'Next.js 15', 'React Native', 'Expo', 'Flutter', 'Tailwind', 'shadcn/ui', 'Framer Motion'] },
  { label: 'backend', items: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'Flask', 'WebSockets', 'BullMQ', 'Redis'] },
  { label: 'data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Prisma', 'Redis'] },
  { label: 'embedded', items: ['Jetson Orin NX', 'ROS', 'Arduino', 'RPLidar S2', 'Virtual CAN', 'IPC'] },
  { label: 'cloud & devops', items: ['GCP', 'AWS', 'Firebase', 'Docker', 'Linux', 'CI/CD', 'Turborepo', 'EAS Build'] },
]

const Resume = () => (
  <PageTransition>
    <header className="section-heading" style={{ marginBottom: '4rem' }}>
      <Reveal as="span" className="eyebrow">credentials</Reveal>
      <Reveal as="h2" className="display">
        Résumé snapshot, <em>signals & stack.</em>
      </Reveal>
      <Reveal as="p" className="lede">
        The on-page summary covers the work and the stack. The full CV — with direct contact details — is sent on request: email me who you are and the role and you'll have it the same day.
      </Reveal>
    </header>

    <div className="resume">
      <div className="resume__content">
        <Reveal className="resume__section">
          <h3>Profile</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--ink-mute)', lineHeight: 1.7, margin: 0, maxWidth: '70ch' }}>
            Software Engineer with 3+ years designing, building, and shipping production software across AI systems,
            full-stack web, and mobile. Founder of Hanoosh Software, an independent studio with four active business
            projects spanning healthcare AI, EdTech, and logistics. AI as a force multiplier — full ownership of every
            architectural decision.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Education ·</strong> B.Eng. Software Engineering (Jan 2021 – Apr 2026). Focus: AI, Full-Stack, Distributed &amp; Embedded Systems, Cloud, Software Security.
          </p>
        </Reveal>

        <Reveal className="resume__section">
          <h3><em>Experience</em></h3>
          {experience.map((e) => (
            <article key={e.title} className="resume__entry">
              <span className="resume__entry-period">{e.period}</span>
              <div>
                <h4 className="resume__entry-title">{e.title}</h4>
                <p className="resume__entry-summary">{e.summary}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="resume__section">
          <h3><em>Recognition</em></h3>
          {recognitions.map((e) => (
            <article key={e.title} className="resume__entry">
              <span className="resume__entry-period">{e.period}</span>
              <div>
                <h4 className="resume__entry-title">{e.title}</h4>
                <p className="resume__entry-summary">{e.summary}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>

      <aside className="resume__sidebar">
        <div className="resume__request">
          <span className="resume__request-label">Full CV · on request</span>
          <p className="resume__request-note">
            The full PDF includes contact details I prefer to keep off the open web. Email me with who you are and the
            role/opportunity, and I'll send it across the same day.
          </p>
          <a className="resume__download" href="mailto:abhanoosh@gmail.com?subject=CV%20request%20%E2%80%94%20Abdullah%20Hanoosh&body=Hi%20Abdullah%2C%0A%0AWho%20I%20am%3A%20%0ACompany%20%2F%20team%3A%20%0ARole%20%2F%20opportunity%3A%20%0A%0AThanks%21">
            Request CV →
          </a>
        </div>

        {stack.map((g) => (
          <Reveal key={g.label} className="resume__panel" threshold={0.2}>
            <h4>{g.label}</h4>
            <ul>
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </Reveal>
        ))}
      </aside>
    </div>
  </PageTransition>
)

export default Resume
