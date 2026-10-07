import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Background from '../components/Background.jsx'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <Background />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-mono text-7xl font-bold gradient-text sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-white">This page doesn't exist</h1>
        <p className="mx-auto mt-2 max-w-sm text-slate-400">The link may be broken or the page may have moved. Head back to the portfolio.</p>
        <Link to="/" className="btn-primary mt-8">Back to home</Link>
      </motion.div>
    </main>
  )
}
