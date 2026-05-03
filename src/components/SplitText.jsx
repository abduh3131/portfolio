import { motion } from 'framer-motion'

const SplitText = ({ text, delay = 0, stagger = 0.04, className = '', element: Element = 'span' }) => {
  const chars = Array.from(text)
  return (
    <Element className={`split ${className}`}>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          className="split__char"
          initial={{ y: '105%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + i * stagger }}
          style={{ whiteSpace: c === ' ' ? 'pre' : 'normal' }}
        >
          {c}
        </motion.span>
      ))}
    </Element>
  )
}

export default SplitText
