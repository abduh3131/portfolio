import { useRef, useEffect, useState } from 'react'
import { isTouch } from '../utils/device.js'

const TiltCard = ({ children, className = '', max = 6, ...rest }) => {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => { if (!isTouch()) setEnabled(true) }, [])

  const onMove = (e) => {
    if (!enabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (py - 0.5) * -max
    const ry = (px - 0.5) * max
    ref.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`
    ref.current.style.setProperty('--cmx', `${px * 100}%`)
    ref.current.style.setProperty('--cmy', `${py * 100}%`)
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)'
  }

  const handlers = enabled ? { onMouseMove: onMove, onMouseLeave: onLeave } : {}
  const style = enabled
    ? { transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }
    : {}

  return (
    <div ref={ref} className={className} {...handlers} style={style} {...rest}>
      {children}
    </div>
  )
}

export default TiltCard
