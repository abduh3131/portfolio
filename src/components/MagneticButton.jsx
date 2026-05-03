import { useRef } from 'react'
import { Link } from 'react-router-dom'

const MagneticButton = ({ to, href, children, variant = '', strength = 0.3, ...rest }) => {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  const className = `mbtn ${variant ? `mbtn--${variant}` : ''}`.trim()

  const inner = (
    <>
      <span className="mbtn__fill" aria-hidden="true" />
      <span className="mbtn__label">{children}</span>
      <span className="mbtn__arrow" aria-hidden="true">→</span>
    </>
  )

  return (
    <span
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: 'inline-block', willChange: 'transform' }}
    >
      {to ? (
        <Link ref={ref} to={to} className={className} {...rest}>
          {inner}
        </Link>
      ) : (
        <a ref={ref} href={href} className={className} {...rest}>
          {inner}
        </a>
      )}
    </span>
  )
}

export default MagneticButton
