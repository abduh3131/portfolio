import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, LayoutGroup } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Index' },
  { to: '/projects', label: 'Work' },
  { to: '/resume', label: 'Résumé' },
  { to: '/future', label: 'Lab' },
  { to: '/contact', label: 'Contact' },
]

const Navigation = () => {
  const location = useLocation()
  const [time, setTime] = useState('')
  const [tz, setTz] = useState('')

  useEffect(() => {
    const fmt = () => {
      const d = new Date()
      const t = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(d)
      setTime(t)

      const parts = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(d)
      const z = parts.find((p) => p.type === 'timeZoneName')?.value || ''
      setTz(z)
    }
    fmt()
    const id = setInterval(fmt, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="nav">
      <Link to="/" className="nav__brand" aria-label="Home">
        <span className="nav__brand-mark">A</span>
        <span className="nav__brand-text">
          Hanoosh
          <small>SOFTWARE / 2026</small>
        </span>
      </Link>

      <LayoutGroup>
        <nav className="nav__links" aria-label="Main">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <NavLink key={item.to} to={item.to} className={`nav__link ${isActive ? 'active' : ''}`}>
                {isActive && (
                  <motion.span
                    layoutId="navPill"
                    className="nav__link-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </LayoutGroup>

      <div className="nav__status">
        <span className="nav__status-dot" />
        <span>Available</span>
        <span className="nav__status-time">{time} {tz}</span>
      </div>
    </header>
  )
}

export default Navigation
