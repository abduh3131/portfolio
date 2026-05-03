import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isTouch, prefersReducedMotion } from '../utils/device.js'

const modules = [
  { name: 'drai',       status: 'LIVE',  meta: '99.9% uptime' },
  { name: 'aegisemr',   status: 'BUILD', meta: 'v0.4 · monorepo' },
  { name: 'edtech',     status: 'DEV',   meta: '187 / 187 tests' },
  { name: 'logistics',  status: 'BETA',  meta: 'APK delivered' },
  { name: 'micropilot', status: 'TEST',  meta: 'real-world driving' },
  { name: 'portfolio',  status: 'LIVE',  meta: 'this site' },
]

const eventPool = [
  { tag: 'DEPLOY', text: 'AegisEMR v0.4.2 → staging environment',           tone: 'ok' },
  { tag: 'COMMIT', text: 'MicroPilot · fix Y-channel preprocessing',        tone: 'info' },
  { tag: 'BUILD',  text: 'EdTech app · 187 / 187 tests passed',             tone: 'ok' },
  { tag: 'OBSERV', text: 'Dr AI · 38 sessions transcribed today',           tone: 'info' },
  { tag: 'NOTE',   text: 'Logistics · APK delivered to stakeholders',       tone: 'info' },
  { tag: 'SHIP',   text: 'Hanoosh Software · 4 active products live',       tone: 'accent' },
  { tag: 'INFER',  text: 'Dr AI · WhisperX local inference 2.1s avg',       tone: 'info' },
  { tag: 'HOTFIX', text: 'AegisEMR · RBAC role-cache invalidation',         tone: 'warn' },
  { tag: 'COMMIT', text: 'AegisEMR · Prisma migration 0042 applied',        tone: 'info' },
  { tag: 'BUILD',  text: 'Portfolio · vite build · 3.2s · 124 KB gzipped',  tone: 'ok' },
  { tag: 'INFER',  text: 'MicroPilot · SegFormer-B0 · 18ms / frame',        tone: 'info' },
  { tag: 'OBSERV', text: 'EdTech · 12 active live sessions',                tone: 'info' },
  { tag: 'COMMIT', text: 'Logistics · live tracking · driver pin smoothing', tone: 'info' },
  { tag: 'DEPLOY', text: 'Portfolio · docs/ → www.abdullahs.world',         tone: 'ok' },
  { tag: 'NOTE',   text: 'Dr AI · zero external data transmission · ok',    tone: 'info' },
  { tag: 'PERF',   text: 'AegisEMR · p95 query latency 84ms',               tone: 'info' },
  { tag: 'OBSERV', text: 'Logistics · 247 trips logged this week',          tone: 'info' },
  { tag: 'SHIP',   text: 'EdTech · Stripe Connect · payouts running',       tone: 'accent' },
  { tag: 'COMMIT', text: 'AegisEMR · 8-role RBAC · audit-log middleware',   tone: 'info' },
  { tag: 'INFER',  text: 'MicroPilot · Supercombo · 42ms / frame · TRT',    tone: 'info' },
  { tag: 'HOTFIX', text: 'EdTech · matching algo · timezone edge-case',     tone: 'warn' },
  { tag: 'BUILD',  text: 'AegisEMR · turborepo · 4 apps · 10 pkgs · ok',    tone: 'ok' },
  { tag: 'OBSERV', text: 'Dr AI · clinic uptime · 312 days',                tone: 'info' },
  { tag: 'NOTE',   text: 'Studio · all repos backed up · nightly snapshot', tone: 'info' },
  { tag: 'COMMIT', text: 'Portfolio · split-text reveal · CSS keyframe',    tone: 'info' },
  { tag: 'PERF',   text: 'Logistics · APK · 14 MB · cold-start 1.1s',       tone: 'info' },
  { tag: 'INFER',  text: 'Dr AI · diarization · 96.4% speaker accuracy',    tone: 'info' },
  { tag: 'SHIP',   text: 'MicroPilot · campus drive · 0 disengagements',    tone: 'accent' },
  { tag: 'OBSERV', text: 'AegisEMR · BullMQ · 14 jobs / min · steady',      tone: 'info' },
  { tag: 'COMMIT', text: 'EdTech · 7-factor matcher · weights re-tuned',    tone: 'info' },
]

const randTime = (i) => {
  const total = (Math.floor(Math.random() * 24 * 60) - i * 11 + 24 * 60) % (24 * 60)
  const h = Math.floor(total / 60)
  const m = total % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

const shuffle = (arr) => {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const buildEvents = () => shuffle(eventPool).map((e, i) => ({ ...e, t: randTime(i) }))

const stack = [
  'Python', 'TypeScript', 'React 19', 'Next.js', 'NestJS',
  'Flutter', 'React Native', 'PostgreSQL', 'Prisma', 'Redis',
  'Ollama', 'WhisperX', 'TensorRT', 'Jetson', 'ROS',
  'Docker', 'GCP', 'Supabase', 'BullMQ', 'Turborepo',
]

const LiveConsole = () => {
  const [events] = useState(() => buildEvents())
  const [feedIdx, setFeedIdx] = useState(0)
  const [activeMod, setActiveMod] = useState(0)
  const [tick, setTick] = useState(0)
  const reducedRef = useRef(false)
  const touchRef = useRef(false)

  useEffect(() => {
    reducedRef.current = prefersReducedMotion()
    touchRef.current = isTouch()
    if (reducedRef.current) return
    const feedMs = touchRef.current ? 3600 : 2400
    const modMs  = touchRef.current ? 2800 : 1900
    const a = setInterval(() => setFeedIdx((i) => (i + 1) % events.length), feedMs)
    const b = setInterval(() => setActiveMod((i) => (i + 1) % modules.length), modMs)
    const c = setInterval(() => setTick((t) => t + 1), 1000)
    return () => { clearInterval(a); clearInterval(b); clearInterval(c) }
  }, [events.length])

  const visibleCount = touchRef.current ? 5 : 8
  const visibleFeed = Array.from({ length: visibleCount }, (_, i) => events[(feedIdx + i) % events.length])

  return (
    <div className="console">
      <div className="console__bar">
        <div className="console__bar-left">
          <span className="console__dot" />
          <span className="console__title">HANOOSH&nbsp;SOFTWARE / OS</span>
          <span className="console__sep">·</span>
          <span className="console__tag">runtime active</span>
        </div>
        <div className="console__bar-right">
          <span className="console__metric">PID 0xAH</span>
          <span className="console__sep">·</span>
          <span className="console__metric">uptime {String(Math.floor(tick / 60)).padStart(2, '0')}:{String(tick % 60).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="console__grid">
        <section className="console__panel">
          <header className="console__h">
            <span>modules</span>
            <span>{String(modules.length).padStart(2, '0')}</span>
          </header>
          <ul className="console__modules">
            {modules.map((m, i) => (
              <li key={m.name} className={`console__module ${i === activeMod ? 'is-active' : ''}`}>
                <span className="console__module-bullet">{i === activeMod ? '▸' : ' '}</span>
                <span className="console__module-name">{m.name}</span>
                <span className={`console__pill console__pill--${m.status.toLowerCase()}`}>{m.status}</span>
                <span className="console__module-meta">{m.meta}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="console__panel console__panel--feed">
          <header className="console__h">
            <span>event feed</span>
            <span className="console__live">● live</span>
          </header>
          <ul className="console__feed">
            <AnimatePresence mode="popLayout">
              {visibleFeed.map((e, i) => (
                <motion.li
                  key={`${e.t}-${e.text}-${feedIdx}`}
                  className="console__feed-row"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: Math.max(0.35, 1 - i * 0.1), x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
                >
                  <span className="console__feed-time">{e.t}</span>
                  <span className={`console__feed-tag console__feed-tag--${e.tone}`}>{e.tag}</span>
                  <span className="console__feed-text">{e.text}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </section>

        <section className="console__panel console__panel--stack">
          <header className="console__h">
            <span>stack</span>
            <span>{stack.length}</span>
          </header>
          <div className="console__stack">
            {stack.map((s) => (
              <span key={s} className="console__stack-chip">{s}</span>
            ))}
          </div>
        </section>
      </div>

      <div className="console__footer">
        <span>● operational</span>
        <span className="console__sep">·</span>
        <span>4 products</span>
        <span className="console__sep">·</span>
        <span>3+ yrs uptime</span>
        <span className="console__sep">·</span>
        <span>solo author</span>
      </div>
    </div>
  )
}

export default LiveConsole
