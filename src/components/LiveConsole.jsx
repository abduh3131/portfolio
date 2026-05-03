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

const events = [
  { t: '02:47', tag: 'DEPLOY', text: 'AegisEMR v0.4.2 → staging environment',     tone: 'ok' },
  { t: '02:31', tag: 'COMMIT', text: 'MicroPilot · fix Y-channel preprocessing',  tone: 'info' },
  { t: '01:18', tag: 'BUILD',  text: 'EdTech app · 187 / 187 tests passed',       tone: 'ok' },
  { t: '00:42', tag: 'OBSERV', text: 'Dr AI · 38 sessions transcribed today',     tone: 'info' },
  { t: '23:55', tag: 'NOTE',   text: 'Logistics · APK delivered to stakeholders', tone: 'info' },
  { t: '22:10', tag: 'SHIP',   text: 'Hanoosh Software · 4 active products live', tone: 'accent' },
  { t: '21:04', tag: 'INFER',  text: 'Dr AI · WhisperX local inference 2.1s avg', tone: 'info' },
  { t: '19:32', tag: 'HOTFIX', text: 'AegisEMR · RBAC role-cache invalidation',   tone: 'warn' },
]

const stack = [
  'Python', 'TypeScript', 'React 19', 'Next.js', 'NestJS',
  'Flutter', 'React Native', 'PostgreSQL', 'Prisma', 'Redis',
  'Ollama', 'WhisperX', 'TensorRT', 'Jetson', 'ROS',
  'Docker', 'GCP', 'Supabase', 'BullMQ', 'Turborepo',
]

const LiveConsole = () => {
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
  }, [])

  const visibleCount = touchRef.current ? 3 : 5
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
                  animate={{ opacity: 1 - i * 0.18, x: 0 }}
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
