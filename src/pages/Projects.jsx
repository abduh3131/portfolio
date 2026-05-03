import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/projects.js'

const pad = (n) => String(n).padStart(2, '0')

const statusFor = (tagline) => {
  const t = (tagline || '').toLowerCase()
  if (t.includes('production')) return { label: 'Live', cls: 'pcard__status--live' }
  if (t.includes('in development')) return { label: 'In Dev', cls: '' }
  if (t.includes('capstone')) return { label: 'Capstone', cls: 'pcard__status--live' }
  return { label: 'Shipped', cls: '' }
}

const sizeFor = (i) => {
  if (i === 0) return 'pcard--feature'
  if (i === 1 || i === 2) return 'pcard--half'
  return 'pcard--third'
}

const Projects = () => (
  <PageTransition>
    <header className="section-heading" style={{ marginBottom: '3rem' }}>
      <Reveal as="span" className="eyebrow">selected work · 06 entries</Reveal>
      <Reveal as="h2" className="display">
        Six systems. AI, full-stack, mobile, <em>and embedded.</em>
      </Reveal>
      <Reveal as="p" className="lede">
        Most source remains private — active client and business work. The pinned MicroPilot capstone links to its public repo.
      </Reveal>
    </header>

    <div className="projects__grid">
      {projects.map((p, i) => {
        const status = statusFor(p.tagline)
        const isPinned = i === 0
        return (
          <Reveal
            key={p.id}
            threshold={0.12}
            delay={i * 0.04}
            className={`pcard ${sizeFor(i)}`}
          >
            {p.cover && (
              <div className="pcard__cover">
                <img src={p.cover} alt={`${p.title} preview`} loading="lazy" />
              </div>
            )}
            <div className="pcard__head">
              <span className="pcard__index">
                {pad(i + 1)} / {pad(projects.length)}
              </span>
              <span className={`pcard__status ${status.cls}`}>{status.label}</span>
            </div>

            {isPinned && <span className="pcard__pinned">★ Pinned · Capstone</span>}

            <div>
              <p className="pcard__tagline">{p.tagline}</p>
              <h3 className="pcard__title">{p.title}</h3>
            </div>

            <p className="pcard__desc">{p.description}</p>

            {isPinned && p.highlights?.length > 0 && (
              <ul className="pcard__highlights">
                {p.highlights.slice(0, 4).map((h) => <li key={h}>{h}</li>)}
              </ul>
            )}

            {p.technologies?.length > 0 && (
              <div className="pcard__chips">
                {p.technologies.slice(0, isPinned ? 8 : 5).map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            )}

            {(p.repo || p.live) && (
              <div className="pcard__actions">
                {p.repo && (
                  <a className="pcard__btn" href={p.repo} target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                )}
                {p.live && (
                  <a className="pcard__btn pcard__btn--ghost" href={p.live} target="_blank" rel="noopener noreferrer">
                    Live →
                  </a>
                )}
              </div>
            )}
          </Reveal>
        )
      })}
    </div>
  </PageTransition>
)

export default Projects
