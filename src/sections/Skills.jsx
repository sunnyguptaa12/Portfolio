import { motion } from 'framer-motion'
import { Section, Reveal } from '../components/ui.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Languages, frameworks, platforms, and computer science fundamentals from my resume.">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.08} className={`min-w-0 ${i >= 4 ? 'md:col-span-2' : ''}`}>
            <div className="glass h-full min-w-0 p-6">
              <h3 className="text-lg font-bold text-white">{g.title}</h3>
              <p className="mb-5 text-sm text-slate-500">{g.description}</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map(({ name, icon: Icon }) => (
                  <motion.li
                    key={name}
                    whileHover={{ y: -4 }}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 transition-colors hover:border-accent-blue/40 hover:bg-white/[0.07]"
                  >
                    <Icon size={20} className="shrink-0 text-slate-400 transition group-hover:text-accent-blue" aria-hidden="true" />
                    <span className="min-w-0 break-words text-sm font-medium text-slate-200">{name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
