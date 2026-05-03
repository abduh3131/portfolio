import { motion } from 'framer-motion'

const PageTransition = ({ children, className = '' }) => (
  <motion.main
    className={`page ${className}`.trim()}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.main>
)

export default PageTransition
