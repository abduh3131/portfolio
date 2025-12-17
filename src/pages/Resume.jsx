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
    period: 'Nov. 2025 — Present',
    title: 'Software Developer – Early-Stage Mobile Platform (Startup)',
    summary:
      'Developing and maintaining a cross-platform mobile application using Flutter. Designing architecture, implementing auth/data workflows, and building backend services with Firebase.',
  },
  {
    period: 'May 2022 — July 2025',
    title: 'Health Tech Software Developer – Dr. Hanoosh’s Medical Office',
    summary:
      'Designed and developed internal software tools to automate clinical documentation. Built a local AI-assisted system for SOAP reports and modular privacy-focused pipelines.',
  },
  {
    period: 'May 2022 — Present',
    title: 'Software Developer and Web Consultant – Self-employed',
    summary:
      'Designed, built, and maintained client websites using JS, PHP, SQL, and REST APIs. Performed major redesigns to improve usability and performance.',
  },
];

const stackGroups = [
  {
    label: 'languages',
    items: [
      'Java', 'Python', 'C', 'C++', 'JavaScript', 'SQL', 'PHP', 'HTML', 'CSS'
    ],
  },
  {
    label: 'technologies',
    items: [
      'Git', 'Linux', 'Docker', 'REST APIs', 'MySQL', 'Firebase Firestore',
      'Flutter', 'Node.js', 'Android Studio'
    ],
  },
  {
    label: 'practices',
    items: [
      'Object-Oriented Design', 'Agile Scrum', 'Debugging', 'Testing',
      'Code Reviews', 'Version Control', 'AI-Assisted Development'
    ],
  },
];

const recognitions = [
  {
    period: '2025',
    title: 'Vice President – Arab Student Union',
    summary: 'Student leadership role focusing on community building, events, and partnerships.',
  },
  {
    period: 'Dec. 2021',
    title: 'Energy Project Management Fundamentals – PTAG / Talent',
    summary: 'Certification in project management fundamentals.',
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
      style={{ display: 'grid', gap: SPACING.panelsGap, marginBottom: SPACING.panelMB, alignItems: 'start' }}
    >
      {/* Left Column */}
      <div style={{ display: 'grid', gap: SPACING.panelsGap, alignContent: 'start' }}>
        <Reveal
          className="resume__panel"
          threshold={0.2}
          style={{ padding: SPACING.panelPad, marginBottom: 0 }}
        >
          <h3>Summary</h3>
          <p>
            Software Engineering student at Ontario Tech University with a focus on AI, Full-Stack Development, and Embedded Systems.
            Experienced in building cross-platform mobile apps, AI-assisted tools, and web solutions.
            Passionate about accelerating development with AI tools while maintaining architectural ownership.
          </p>
          <a className="resume__download" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download résumé PDF
          </a>
        </Reveal>

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
      </div>

      {/* Right Column */}
      <div style={{ display: 'grid', gap: SPACING.panelsGap, alignContent: 'start' }}>
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
    </div>
  </PageTransition>
);

export default Resume
