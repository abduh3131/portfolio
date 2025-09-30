import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const signals = [
  {
    label: 'education',
    value: '4th year',
    description: 'Software Engineering @ Ontario Tech University (OTU).',
  },
  {
    label: 'focus',
    value: 'AI • Full-stack • Embedded',
    description: 'React, Node, Python, PHP/Laravel, sensors, dashboards.',
  },
  {
    label: 'github',
    value: '@abduh3131',
    description: 'Open-source and personal projects.',
  },
]

const focusAreas = [
  {
    title: 'AI-assisted product engineering',
    description:
      'I build practical AI features that stay fast and reliable, from transcription to smart automation.',
    tools: ['Python', 'WhisperX', 'Local LLMs'],
  },
  {
    title: 'Full-stack web development',
    description:
      'Modern, accessible interfaces with robust backends and clean data flows for real users and real deadlines.',
    tools: ['React', 'Node.js', 'Laravel/Vite'],
  },
   {
    title: 'Performance & reliability',
    description:
      'Making apps feel instant and stable under load with profiling, caching, and resilient patterns.',
    tools: ['Profiling', 'Caching', 'CI/CD'],
  },
]

const timeline = [
  {
    period: '2024 — Present',
    title: 'AI & Full-Stack Projects · Independent',
    summary:
      'Building AI-assisted apps, dashboards, and device-aware tools with a focus on speed and reliability.',
  },
  {
    period: '2021 — Present',
    title: 'Software Engineering · Ontario Tech University',
    summary:
      'Fourth-year student applying systems, AI, and product engineering through hands-on builds.',
  },
  {
    period: '—',
    title: 'Open-source & Personal Repos · GitHub @abduh3131',
    summary:
      'Experimenting with UI/UX, automation, and embedded prototypes; shipping learn-by-doing work.',
  },
]

const skillHighlights = [
  ['Java', 'C++', 'C#'],
  ['JavaScript', 'TypeScript', 'React'],
  ['Node.js', 'PHP/Laravel', 'Python'],
  ['Vue 3', 'Docker', 'Raspberry Pi'],
]

const Landing = () => (
  <PageTransition className="landing">
    <section className="landing__hero">
      <div className="landing__intro">
        <Reveal as="span" className="landing__tag" delay={0.1} distance={8}>
          OTU · portfolio
        </Reveal>
        <Reveal as="h1" delay={0.2}>
          Hey, I’m Abdullah Hanoosh — 4th-year Software Engineering student at Ontario Tech University.
        </Reveal>
        <Reveal as="p" delay={0.35}>
          I build AI-assisted full-stack apps and embedded tools. I care about speed, reliability, and clear, human-friendly
          design. You can reach me at abhanoosh@gmail.com and see my code at github.com/abduh3131.
        </Reveal>
        <Reveal as="div" className="landing__actions" delay={0.45}>
          <Link className="button button--primary" to="/projects">
            View project dossiers
          </Link>
          <Link className="button button--ghost" to="/contact">
            Initiate contact
          </Link>
        </Reveal>
      </div>
      <Reveal as="aside" className="landing__terminal" delay={0.4} distance={12}>
        <div className="landing__terminal-header">
          <span>status: online</span>
          <span>session id: 0xAH</span>
        </div>
        <div className="landing__terminal-body">
          <code>
            {`const engineer = {
  name: 'Abdullah Hanoosh',
  location: 'Ontario, Canada',
  email: 'abhanoosh@gmail.com',
  github: 'github.com/abduh3131',
  focus: ['AI-assisted products', 'full-stack web', 'embedded systems'],
  currently: 'finishing 4th year SOFE at OTU'
}`}
          </code>
          <div className="landing__terminal-grid">
            {skillHighlights.flat().map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    <section className="landing__signals">
      {signals.map((signal) => (
        <Reveal key={signal.label} className="landing__signal" threshold={0.3}>
          <span>{signal.label}</span>
          <strong>{signal.value}</strong>
          <p>{signal.description}</p>
        </Reveal>
      ))}
    </section>

    <section>
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          focus areas
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Building confident, modern interfaces backed by real systems.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          I collaborate closely with designers and stakeholders to deliver accessible, maintainable systems that keep shipping
          after launch.
        </Reveal>
      </div>
      <div className="landing__grid">
        {focusAreas.map((area) => (
          <Reveal key={area.title} className="landing__card" threshold={0.2}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul>
              {area.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>

    <section>
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          trajectory
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Learning by building — hands-on, fast, and focused.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          I work at the intersection of AI, product engineering, and embedded systems, turning real requirements into useful
          tools.
        </Reveal>
      </div>
      <div className="landing__grid">
        {timeline.map((entry) => (
          <Reveal key={entry.title} className="landing__card" threshold={0.25}>
            <span className="landing__tag" style={{ marginBottom: 0 }}>
              {entry.period}
            </span>
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>
          </Reveal>
        ))}
      </div>
    </section>
  </PageTransition>
)

export default Landing
