import { useEffect, useRef } from 'react'

const MeshBackground = () => {
  const ref = useRef(null)

  useEffect(() => {
    let mx = 50, my = 30, tx = 50, ty = 30, raf
    const tick = () => {
      tx += (mx - tx) * 0.04
      ty += (my - ty) * 0.04
      if (ref.current) {
        ref.current.style.setProperty('--mx', `${tx}%`)
        ref.current.style.setProperty('--my', `${ty}%`)
      }
      raf = requestAnimationFrame(tick)
    }
    const onMove = (e) => {
      mx = (e.clientX / window.innerWidth) * 100
      my = (e.clientY / window.innerHeight) * 100
    }
    window.addEventListener('mousemove', onMove)
    tick()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div ref={ref} className="bg__mesh" />
      <div className="bg__grid" />
      <div className="bg__grain" />
    </div>
  )
}

export default MeshBackground
