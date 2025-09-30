import { motion } from 'framer-motion'

const PageTransition = ({ children, className = '' }) => (
  <motion.main
    className={`page ${className}`.trim()}
    initial={{ opacity: 0, y: 32 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {children}
  </motion.main>
)

export default PageTransition
