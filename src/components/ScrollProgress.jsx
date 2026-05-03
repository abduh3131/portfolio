import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.4 })
  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.div className="scroll-progress__fill" style={{ scaleX: x }} />
    </div>
  )
}

export default ScrollProgress
