import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const upcomingProjects = [
  {
    period: 'Q4 2025',
    title: 'Capstone — Open-source Autonomous e-Scooter',
    summary:
      'Team capstone building an open-source autonomous scooter with sensing, navigation, and safety features. Includes reproducible tests, docs, and BOM.',
    links: { repo: '', live: '' },
  },
  {
    period: 'Ongoing',
    title: 'Assistant AI (wearable, local-first)',
    summary:
      'A discreet wearable assistant that automates workflows and produces structured outputs while prioritizing privacy and on-device processing.',
    links: { repo: '', live: '' },
  },
  {
    period: 'Ongoing',
    title: 'Home Lab — Server / Media / Networking',
    summary:
      'Self-hosted stack for services and networking: server, Plex, Pi-hole ad blocking, VPN, and reliability/security experiments.',
    links: { repo: '', live: '' },
  },
]

const learningTracks = [
  {
    label: 'red team operator (TryHackMe)',
    items: [
      'Recon & attack surface mapping',
      'Web attack chains (OWASP)',
      'Privilege escalation & persistence',
      'Post-exploitation & lateral movement',
    ],
  },
  {
    label: 'languages & tooling (in progress)',
    items: ['Laravel', 'Vue 3', 'Inertia', 'Deeper Node.js patterns'],
  },
  {
    label: 'machine learning & ai',
    items: ['PyTorch projects', 'Model serving APIs', 'Data pipelines & evaluation'],
  },
]

// Certifications you're targeting for red-team proficiency (updated)
const certifications = [
  'OSCP (Offensive Security Certified Professional) – gold-standard practical pentesting cert',
  'OSWE (Offensive Security Web Expert) – advanced web exploitation',
  'CRTO (Certified Red Team Operator) – practical red team engagement certification',
  'CRTP (Certified Red Team Professional) – hands-on red team skills and tooling',
]

const hardwareBoards = [
  {
    label: 'boards • networking • lab',
    items: [
      'ESP32-C6 (BLE/Wi-Fi projects)',
      'Raspberry Pi 4 (local services, automation)',
      'Raspberry Pi Pico W (MicroPython sensors)',
      'Home lab networking: VLANs, VPN, Pi-hole, Plex',
      'GPIO & sensor integrations (IMU, GPS, cameras)',
    ],
  },
]

const Future = () => (
  <PageTransition className="future">
    <header className="projects__intro">
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          future
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          What I’m building and learning next.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          A living roadmap of upcoming projects, active learning tracks, and hardware exploration. Items here roll into the
          portfolio as they ship.
        </Reveal>
      </div>
    </header>

    {/* Upcoming Projects */}
    <div className="resume__panels">
      <Reveal className="resume__panel" threshold={0.2}>
        <h3>Upcoming projects</h3>
        <div className="resume__timeline">
          {upcomingProjects.map((p) => (
            <article key={p.title} className="resume__timeline-item">
              <span>{p.period}</span>
              <h4>{p.title}</h4>
              <p>{p.summary}</p>
              {(p.links?.repo || p.links?.live) && (
                <p className="resume__links">
                  {p.links?.repo && (
                    <a href={p.links.repo} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {p.links?.repo && p.links?.live && ' · '}
                  {p.links?.live && (
                    <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                  )}
                </p>
              )}
            </article>
          ))}
        </div>
      </Reveal>

      {/* Learning Tracks + Certifications */}
      <Reveal className="resume__panel" threshold={0.2} delay={0.1}>
        <h3>Learning tracks</h3>
        <div className="resume__stack">
          {learningTracks.map((group) => (
            <div key={group.label} className="resume__stack-group">
              <strong>{group.label}</strong>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="resume__stack-group">
            <strong>Certifications (target)</strong>
            <ul>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>

    {/* Hardware & Boards */}
    <div className="resume__panels">
      <Reveal className="resume__panel" threshold={0.2}>
        <h3>Hardware • boards • home lab</h3>
        <div className="resume__stack">
          {hardwareBoards.map((group) => (
            <div key={group.label} className="resume__stack-group">
              <strong>{group.label}</strong>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </PageTransition>
)

export default Future
