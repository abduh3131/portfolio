import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isTouch } from '../utils/device.js'

const MagneticButton = ({ to, href, children, variant = '', strength = 0.3, ...rest }) => {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => { if (!isTouch()) setEnabled(true) }, [])

  const onMove = (e) => {
    if (!enabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  const className = `mbtn ${variant ? `mbtn--${variant}` : ''}`.trim()
  const handlers = enabled ? { onMouseMove: onMove, onMouseLeave: onLeave } : {}

  const inner = (
    <>
      <span className="mbtn__fill" aria-hidden="true" />
      <span className="mbtn__label">{children}</span>
      <span className="mbtn__arrow" aria-hidden="true">→</span>
    </>
  )

  return (
    <span {...handlers} style={{ display: 'inline-block', willChange: enabled ? 'transform' : 'auto' }}>
      {to ? (
        <Link ref={ref} to={to} className={className} {...rest}>{inner}</Link>
      ) : (
        <a ref={ref} href={href} className={className} {...rest}>{inner}</a>
      )}
    </span>
  )
}

export default MagneticButton
