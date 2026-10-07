import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { site, navLinks } from '../data/site.js'
import useActiveSection from '../hooks/useActiveSection.js'
import useScrolled from '../hooks/useScrolled.js'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const scrolled = useScrolled()

  const linkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${active === id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-white/10 bg-base/80 backdrop-blur-xl' : ''}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-white">{site.name}</a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass(l.id)} aria-current={active === l.id ? 'true' : undefined}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hidden rounded-lg p-2 text-slate-400 transition hover:text-white sm:block"><FiGithub size={18} /></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hidden rounded-lg p-2 text-slate-400 transition hover:text-white sm:block"><FiLinkedin size={18} /></a>
          <a href="#resume" className="btn-primary !px-4 !py-2"><FiDownload size={14} />Resume</a>
          <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="ml-1 rounded-lg p-2 text-slate-200 lg:hidden">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden px-5 pb-4 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block ${linkClass(l.id)} !py-3`}>{l.label}</a>
              </li>
            ))}
            <li className="mt-3 flex gap-3 px-3 text-slate-400">
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><FiGithub size={20} /></a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FiLinkedin size={20} /></a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
