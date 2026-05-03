import { useEffect, useRef } from 'react'

const Reveal = ({
  as: Component = 'div',
  className = '',
  children,
  delay = 0,
  distance = 24,
  once = true,
  style,
  threshold = 0.25,
  ...rest
}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          node.classList.remove('is-visible')
        }
      },
      { threshold: Math.max(0, Math.min(1, threshold)) },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
    }, [once, threshold])

  const combinedStyle = {
    '--reveal-delay': `${delay}s`,
    '--reveal-distance': `${distance}px`,
    ...style,
  }

  return (
    <Component
      ref={elementRef}
      className={`reveal ${className}`.trim()}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </Component>
  )
}

Reveal.displayName = 'Reveal'

export default Reveal
