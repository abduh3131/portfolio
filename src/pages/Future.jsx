import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const inProgress = [
  {
    period: 'In progress',
    title: 'Assistant AI · wearable, local-first',
    body: 'A discreet wearable assistant that automates workflows and produces structured outputs — privacy-first, on-device processing.',
  },
  {
    period: 'In progress',
    title: 'Home Lab · server / media / networking',
    body: 'Self-hosted services and networking — server, Plex, Pi-hole ad blocking, VPN, reliability and security experiments.',
  },
]

const learningNow = [
  { label: 'red team operator (TryHackMe)', items: ['Recon & attack surface mapping', 'Web attack chains (OWASP)', 'Privilege escalation & persistence', 'Post-exploitation & lateral movement'] },
  { label: 'languages & tooling', items: ['Laravel', 'Vue 3', 'Inertia', 'Deeper Node.js patterns'] },
  { label: 'machine learning & ai', items: ['PyTorch projects', 'Model serving APIs', 'Data pipelines & evaluation'] },
]

const certsTarget = ['OSCP', 'OSWE', 'CRTO', 'CRTP']
const hardware = ['ESP32-C6 (BLE/Wi-Fi)', 'Raspberry Pi 4 (services, automation)', 'Pi Pico W (MicroPython sensors)', 'Home lab networking — VLANs, VPN, Pi-hole, Plex', 'GPIO & sensor integrations (IMU, GPS, cameras)']

const Future = () => (
  <PageTransition>
    <header className="section-heading" style={{ marginBottom: '4rem' }}>
      <Reveal as="span" className="eyebrow">lab · forward-looking</Reveal>
      <Reveal as="h2" className="display">
        Active progress and <em>near-term targets.</em>
      </Reveal>
      <Reveal as="p" className="lede">
        Not the shipped portfolio — this page tracks what's on the bench right now: side projects in progress, hardware I'm
        building with, certifications I'm working toward, and learning tracks I'm actively running. Items roll into the main
        work page when they ship.
      </Reveal>
    </header>

    <section className="future">
      <div>
        <Reveal as="h3" className="display" style={{ marginBottom: '1.4rem', fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)' }}>
          <em>Now</em> · in progress
        </Reveal>
        <div className="future__grid">
          {inProgress.map((u) => (
            <Reveal key={u.title} className="future__card" threshold={0.2}>
              <span className="future__card-meta">{u.period}</span>
              <h3>{u.title}</h3>
              <p>{u.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <Reveal as="h3" className="display" style={{ marginBottom: '1.4rem', fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)' }}>
          <em>On the bench</em> · hardware & certs
        </Reveal>
        <div className="future__grid">
          <Reveal className="future__card" threshold={0.2}>
            <span className="future__card-meta">hardware · home lab</span>
            <h3>Boards & networking</h3>
            <ul className="future__list">
              {hardware.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </Reveal>

          <Reveal className="future__card" threshold={0.2}>
            <span className="future__card-meta">targeting · red-team track</span>
            <h3>Certifications</h3>
            <ul className="future__list">
              {certsTarget.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>

      <div>
        <Reveal as="h3" className="display" style={{ marginBottom: '1.4rem', fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)' }}>
          <em>Learning now</em> · active tracks
        </Reveal>
        <div className="future__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {learningNow.map((l) => (
            <Reveal key={l.label} className="future__card" threshold={0.2}>
              <span className="future__card-meta">{l.label}</span>
              <ul className="future__list">
                {l.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
)

export default Future
