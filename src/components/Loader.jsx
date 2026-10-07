import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <span className="font-mono text-2xl font-medium text-white">
        <span className="gradient-text">&lt;</span>Sunny<span className="gradient-text"> /&gt;</span>
      </span>
      <div className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-violet"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
