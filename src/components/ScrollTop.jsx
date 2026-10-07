import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import useScrolled from '../hooks/useScrolled.js'

export default function ScrollTop() {
  const show = useScrolled(600)
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="glass fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center text-slate-200 hover:border-accent-blue/50 hover:text-white"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
