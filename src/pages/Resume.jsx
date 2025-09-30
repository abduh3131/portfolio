import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

// Compact spacing tokens (inline so you don't need to edit CSS files)
const SPACING = {
  panelsGap: '1rem',
  panelPad: '1rem',
  panelMB: '1rem',
  timelineGap: '0.5rem',
  listGap: '0.4rem',
};

const experience = [
  {
    period: '2025 — Present',
    title: 'Vice President · Arab Student Union (OTU)',
    summary:
      'Lead events, partnerships, and communications. Coordinate volunteers, budgeting, and outreach while keeping everything organized and on schedule.',
  },
  {
    period: '2023 — Present',
    title: 'Freelance Full-Stack Developer',
    summary:
      'Designed and built web applications end-to-end for small clients: authentication, dashboards, admin panels, and integrations. Delivered clean UIs, reliable APIs, and simple deployment hand-offs.',
  },
  {
    period: '2022 — Present',
    title: 'Office Administrator · Medical Office',
    summary:
      'Handle clinic scheduling and documentation, support EMR workflows, and streamline day-to-day operations with organized, accurate records.',
  },
];

const stackGroups = [
  {
    label: 'languages & frameworks',
    items: [
      'Java', 'C++', 'C', 'C#', 'Python', 'PHP',
      'JavaScript', 'HTML', 'CSS',
      'React', 'Vite', 'Node.js', 'FastAPI'
    ],
  },
  {
    label: 'tooling',
    items: [
      'Git/GitHub', 'MySQL', 'MongoDB', 'Linux/WSL', 'VS Code'
    ],
  },
  {
    label: 'hardware • networks • boards',
    items: [
      'ESP32-C6', 'Raspberry Pi 4', 'Raspberry Pi Pico W',
      'Bluetooth LE', 'Wi-Fi networking', 'GPIO & sensors'
    ],
  },
  {
    label: 'machine learning & ai',
    items: [
      'Python ML', 'PyTorch', 'WhisperX', 'Ollama'
    ],
  },
  {
    label: 'learning',
    items: [
      'Laravel', 'Vue 3', 'Inertia', 'Cybersecurity (TryHackMe)'
    ],
  },
  {
    label: 'practices',
    items: [
      'Object-oriented design', 'Testing & QA', 'Accessibility (a11y)',
      'API design', 'Responsive UX', 'Version control workflows',
      'Performance tuning', 'Readable documentation'
    ],
  },
];

const recognitions = [
  {
    period: '2025',
    title: 'Elected VP, Arab Student Union (OTU)',
    summary: 'Student leadership role focusing on community building, events, and partnerships.',
  },
  {
    period: '2024',
    title: 'Ontario Tech Talent Learning — Project Management Badge',
    summary: 'Applied structured planning, risk tracking, and delivery practices across personal and team projects.',
  },
];

const Resume = () => (
  <PageTransition className="resume">
    <header className="projects__intro">
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          credentials
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Résumé snapshot and supporting signals.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          Download the PDF for full details, or skim the highlights below. These modules stay in sync with the PDF so any
          update lands everywhere.
        </Reveal>
      </div>
    </header>

    <div
      className="resume__panels"
      style={{ display: 'grid', gap: SPACING.panelsGap, marginBottom: SPACING.panelMB }}
    >
      <Reveal
        className="resume__panel"
        threshold={0.2}
        style={{ padding: SPACING.panelPad, marginBottom: 0 }}
      >
        <h3>Summary</h3>
        <p>
          Fourth-year Software Engineering student at Ontario Tech who builds practical, clean, and reliable software.
          Comfortable across Java, Python, C/C++/C#, PHP, and modern JS/React. I’ve shipped several full-stack apps as a
          freelancer with a focus on readable code, friendly UX, and shipping on time. Currently VP of the Arab Student
          Union and exploring cybersecurity via TryHackMe.
        </p>
        <a className="resume__download" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download résumé PDF
        </a>
      </Reveal>

      <Reveal
        className="resume__panel"
        threshold={0.2}
        delay={0.1}
        style={{ padding: SPACING.panelPad, marginBottom: 0 }}
      >
        <h3>Recognition</h3>
        <div
          className="resume__timeline"
          style={{ display: 'grid', gap: SPACING.timelineGap, margin: 0 }}
        >
          {recognitions.map((item) => (
            <article key={item.title} className="resume__timeline-item" style={{ margin: 0 }}>
              <span>{item.period}</span>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </div>

    <div
      className="resume__panels"
      style={{ display: 'grid', gap: SPACING.panelsGap, marginBottom: SPACING.panelMB }}
    >
      <Reveal
        className="resume__panel"
        threshold={0.2}
        style={{ padding: SPACING.panelPad, marginBottom: 0 }}
      >
        <h3>Experience</h3>
        <div
          className="resume__timeline"
          style={{ display: 'grid', gap: SPACING.timelineGap, margin: 0 }}
        >
          {experience.map((item) => (
            <article key={item.title} className="resume__timeline-item" style={{ margin: 0 }}>
              <span>{item.period}</span>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal
        className="resume__panel"
        threshold={0.2}
        delay={0.1}
        style={{ padding: SPACING.panelPad, marginBottom: 0 }}
      >
        <h3>Stack & Practices</h3>
        <div className="resume__stack" style={{ display: 'grid', gap: SPACING.listGap }}>
          {stackGroups.map((group) => (
            <div key={group.label} className="resume__stack-group" style={{ margin: 0 }}>
              <strong>{group.label}</strong>
              <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                {group.items.map((item) => (
                  <li key={item} style={{ margin: 0 }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </PageTransition>
);

export default Resume
