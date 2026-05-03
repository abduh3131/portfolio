import { useEffect, useState } from 'react'
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
    <div className={`loader ${exiting ? 'loader--exit' : ''}`}>
      <div className="loader__count">
        {String(progress).padStart(3, '0')}<em>%</em>
      </div>
      <div className="loader__bar">
        <div className="loader__bar-fill" style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left center' }} />
      </div>
      <div className="loader__label">ABDULLAH HANOOSH</div>
    </div>
  )
}

export default Loader
