import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ onDone }) => {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1800
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.floor(eased * 100))
      if (t < 1) raf = requestAnimationFrame(step)
      else {
        setExiting(true)
        setTimeout(() => onDone?.(), 800)
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
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="loader__count"
          >
            {String(progress).padStart(3, '0')}<em>%</em>
          </motion.div>
          <div className="loader__bar">
            <motion.div
              className="loader__bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <motion.div
            className="loader__label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ABDULLAH HANOOSH · LOADING SHELL
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
