import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiCheck } from 'react-icons/fi'
import { Tag } from './ui.jsx'
import ProjectThumb from './ProjectThumb.jsx'
import { ProjectLinks } from './ProjectCard.jsx'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog" aria-modal="true" aria-label={project.title}
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0c0e1a] sm:rounded-3xl"
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <ProjectThumb gradient={project.gradient} variant={project.variant} image={project.image} />
              <button onClick={onClose} aria-label="Close details" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70"><FiX /></button>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{project.description}</p>
              <h4 className="mt-6 text-sm font-semibold text-white">Key features</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300"><FiCheck className="mt-0.5 shrink-0 text-accent-blue" />{f}</li>
                ))}
              </ul>
              <h4 className="mt-6 text-sm font-semibold text-white">Tech stack</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">{project.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <div className="mt-8"><ProjectLinks project={project} /></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
