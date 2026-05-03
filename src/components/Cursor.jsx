import { useEffect, useRef, useState } from 'react'

const Cursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [variant, setVariant] = useState('default')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let dx = mx
    let dy = my
    let raf

    const tick = () => {

      dx += (mx - dx) * 0.55
      dy += (my - dy) * 0.55
      rx += (mx - rx) * 0.22
      ry += (my - ry) * 0.22

      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`

      raf = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const onOver = (e) => {
      const t = e.target
      if (!t || !t.closest) return
      if (t.closest('a, button, [role="button"], .mbtn, .bento__cell, .project__link, .nav__link, .contact__channel, .cta__email, .resume__download')) {
        setVariant('hover')
      } else if (t.closest('p, h1, h2, h3, h4, input, textarea, [contenteditable]')) {
        setVariant('text')
      } else {
        setVariant('default')
      }
    }

    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={`cursor__dot ${hidden ? 'cursor--hidden' : ''}`} />
      <div ref={ringRef} className={`cursor__ring cursor--${variant}${hidden ? ' cursor--hidden' : ''}`} />
    </>
  )
}

export default Cursor
