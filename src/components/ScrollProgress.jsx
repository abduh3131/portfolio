import { useEffect, useRef } from 'react'

const ScrollProgress = () => {
  const ref = useRef(null)
  useEffect(() => {
    let raf
    const update = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
      raf = null
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={ref} className="scroll-progress__fill" style={{ transformOrigin: 'left center' }} />
    </div>
  )
}

export default ScrollProgress
