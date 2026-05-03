import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import LiveConsole from '../components/LiveConsole.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import SplitText from '../components/SplitText.jsx'
import Counter from '../components/Counter.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { projects } from '../data/projects.js'

const stats = [
  { v: 4, suffix: '', label: 'active products', note: 'Healthcare AI · EdTech · Logistics · EMR' },
  { v: 3, suffix: '+ yrs', label: 'in production', note: 'Dr AI live in clinic · ~40 patients/day' },
  { v: 5, suffix: '/5', label: 'client retention', note: '5 live shipped sites · 100% post-launch' },
  { v: 100, suffix: '%', label: 'ownership', note: 'Architecture, build, deploy, operate — solo' },
]

const pillars = [
  { num: '01', title: 'Ship to production', desc: 'I optimize for what users actually touch. Real deployments, real test coverage, real uptime.' },
  { num: '02', title: 'Tools as multipliers', desc: 'Modern tooling and local LLMs woven into the engineering loop — judgment and architecture stay with the engineer.' },
  { num: '03', title: 'Own the stack', desc: 'From Jetson-based inference to multi-tenant SaaS — full ownership of every architectural decision.' },
  { num: '04', title: 'Privacy-first by default', desc: 'PHIPA-aligned clinical work, on-device LLM inference, zero external data transmission where it matters.' },
]

const featured = projects.slice(0, 3)

const Landing = () => (
  <PageTransition>
    
    <section className="hero">
      <div className="hero__top">
        <motion.div className="hero__intro"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <span><strong>● Available</strong> · founding-engineer roles, contracts</span>
          <span>Remote · worldwide</span>
        </motion.div>
        <motion.div className="hero__index"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <span>Index</span> · 01 / 05
        </motion.div>
      </div>

      <h1 className="hero__name" aria-label="Abdullah Hanoosh">
        <SplitText text="Abdullah" element="span" delay={0.3} stagger={0.05} className="row" />
        <SplitText text="Hanoosh." element="span" delay={0.7} stagger={0.05} className="row italic" />
      </h1>

      <div className="hero__bottom">
        <motion.p className="hero__pitch"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7 }}>
          Software Engineer & founder of <strong>Hanoosh Software</strong>. I design, build, and ship production
          systems across <strong>AI</strong>, <strong>full-stack</strong>, and <strong>embedded autonomy</strong> —
          end-to-end, with full ownership of every architectural decision.
        </motion.p>
        <motion.div className="hero__actions"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.7 }}>
          <MagneticButton to="/projects" variant="primary">Selected work</MagneticButton>
          <MagneticButton to="/contact">Get in touch</MagneticButton>
        </motion.div>
      </div>
    </section>

    
    <section className="section">
      <div className="section-heading">
        <Reveal as="span" className="eyebrow">studio · live</Reveal>
        <Reveal as="h2" className="display">
          A real-time look at the <em>studio's runtime.</em>
        </Reveal>
        <Reveal as="p" className="lede">
          Active modules, recent system events, and the live stack — auto-cycling so you can see what's actually shipping.
        </Reveal>
      </div>
      <Reveal threshold={0.15}>
        <LiveConsole />
      </Reveal>
    </section>

    
    <section className="section">
      <div className="section-heading">
        <Reveal as="span" className="eyebrow">about</Reveal>
        <Reveal as="h2" className="display">
          <em>Independent</em> studio. <em>Production</em>-grade only.
        </Reveal>
      </div>
      <div className="about__grid">
        <Reveal as="p" className="about__body">
          Three years building, shipping, and <em>operating</em> software people actually use — clinical AI in a live clinic, a capstone autonomous vehicle on real hardware, and four active products under <em>Hanoosh Software</em>.
        </Reveal>
        <Reveal as="div" className="about__detail">
          <p>
            Modern tooling and local LLMs are part of the build loop — every architectural decision and shipping detail stays firmly in my hands.
          </p>
          <p>
            Currently founding and operating Hanoosh Software, an independent studio with four active products spanning healthcare AI, EdTech, and logistics.
          </p>
          <MagneticButton to="/resume">View résumé</MagneticButton>
        </Reveal>
      </div>
    </section>

    
    <section className="section--sm">
      <div className="stats">
        {stats.map((s) => (
          <Reveal key={s.label} className="stat" threshold={0.3}>
            <div className="stat__value">
              <Counter to={s.v} />
              <span className="stat__value-suffix">{s.suffix}</span>
            </div>
            <span className="stat__label">{s.label}</span>
            <p className="stat__note">{s.note}</p>
          </Reveal>
        ))}
      </div>
    </section>

    
    <section className="section">
      <div className="section-heading">
        <Reveal as="span" className="eyebrow">featured work</Reveal>
        <Reveal as="h2" className="display">
          Three current shipped systems. <em>Six total in rotation.</em>
        </Reveal>
        <Reveal as="p" className="lede">
          A pinned capstone, a clinic-deployed AI documentation system, and an EMR platform in active development. Full list lives on the work page.
        </Reveal>
      </div>
      <div className="bento">
        {featured.map((p, i) => (
          <Reveal key={p.id} className={`bento__cell ${i === 0 ? 'bento__cell--feature' : 'bento__cell--side'}`} threshold={0.15}>
            <TiltCard className="" max={i === 0 ? 4 : 6}>
              <div className="bento__index">
                <span>0{i + 1} / {String(featured.length).padStart(2, '0')}</span>
                <span>{i === 0 ? '★ Pinned' : 'Selected'}</span>
              </div>
              <div>
                <h3 className="bento__title">{p.title}</h3>
                <p className="bento__desc">{p.description}</p>
                <div className="bento__chips">
                  {p.technologies.slice(0, i === 0 ? 6 : 4).map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
        <MagneticButton to="/projects">All work</MagneticButton>
      </div>
    </section>

    
    <section className="section">
      <div className="section-heading">
        <Reveal as="span" className="eyebrow">approach</Reveal>
        <Reveal as="h2" className="display">
          How I work — <em>four principles.</em>
        </Reveal>
      </div>
      <div className="pillars">
        {pillars.map((p) => (
          <Reveal key={p.num} className="pillar" threshold={0.2}>
            <span className="pillar__num">{p.num}</span>
            <h3 className="pillar__title">{p.title}</h3>
            <p className="pillar__desc">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>

    
    <section className="cta">
      <Reveal as="span" className="eyebrow">let's talk</Reveal>
      <Reveal as="h2" className="cta__title">
        Got something <em>worth building?</em>
      </Reveal>
      <Reveal>
        <a className="cta__email" href="mailto:abhanoosh@gmail.com">
          abhanoosh@gmail.com →
        </a>
      </Reveal>
    </section>
  </PageTransition>
)

export default Landing
