import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import MeshBackground from './components/MeshBackground.jsx'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navigation from './components/Navigation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Landing from './pages/Landing.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Future from './pages/Future.jsx'

import './App.css'

function App() {
  const location = useLocation()
  const [loaded, setLoaded] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('ah_loaded') === '1'
  })

  useEffect(() => {
    if (loaded) sessionStorage.setItem('ah_loaded', '1')
  }, [loaded])

  return (
    <div className="app-frame">
      <MeshBackground />
      <Cursor />
      <ScrollProgress />

      <AnimatePresence>
        {!loaded && <Loader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <Navigation />
          <ScrollToTop />

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/future" element={<Future />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

          <footer className="footer">
            <span className="footer__brand">
              <span>©</span> Abdullah Hanoosh — Hanoosh Software
            </span>
            <span className="footer__copy">Designed & built end-to-end · 2026</span>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
