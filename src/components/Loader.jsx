import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isTouch, prefersReducedMotion } from '../utils/device.js'

const Loader = ({ onDone }) => {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setProgress(100)
      setTimeout(() => onDone?.(), 50)
      return
    }
    const duration = isTouch() ? 900 : 1600
    let raf
    const start = performance.now()
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.floor(eased * 100))
      if (t < 1) raf = requestAnimationFrame(step)
      else {
        setExiting(true)
        setTimeout(() => onDone?.(), 600)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
        >
          <div className="loader__count">
            {String(progress).padStart(3, '0')}<em>%</em>
          </div>
          <div className="loader__bar">
            <motion.div
              className="loader__bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div className="loader__label">ABDULLAH HANOOSH</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
