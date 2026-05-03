import { useRef } from 'react'

const TiltCard = ({ children, className = '', max = 6, ...rest }) => {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (py - 0.5) * -max
    const ry = (px - 0.5) * max
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`
    el.style.setProperty('--cmx', `${px * 100}%`)
    el.style.setProperty('--cmy', `${py * 100}%`)
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)'
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default TiltCard
