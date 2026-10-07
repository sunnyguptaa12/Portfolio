import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi'
import { site } from '../data/site.js'

const lines = [
  { c: 'text-slate-500', t: '// build. ship. learn.' },
  { c: 'text-accent-violet', t: 'const developer = {' },
  { c: 'text-slate-200', t: "  name: 'Sunny Kumar'," },
  { c: 'text-slate-200', t: "  stack: ['React', 'Node', 'MongoDB']," },
  { c: 'text-slate-200', t: "  languages: ['Java', 'JavaScript']," },
  { c: 'text-slate-200', t: '  openToWork: true,' },
  { c: 'text-accent-violet', t: '}' },
]

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-2 text-sm font-medium text-accent-blue shadow-[0_0_30px_rgba(91,140,255,0.18)]"
        >
          <span className="h-2.5 w-2.5 animate-pulseDot rounded-full bg-emerald-400" aria-hidden="true" />
          Available for Software Developer Opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}
          className="mt-7 text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl"
        >
          Build apps that
          <span className="mt-3 block gradient-text">stand out.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {site.intro}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.7 }}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View My Projects<FiArrowRight /></a>
            <a href="#resume" className="btn-ghost"><FiDownload />View Resume</a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-slate-400">Let's Connect</span>
            <span className="h-px w-8 bg-white/15" aria-hidden="true" />
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="glass grid h-10 w-10 place-items-center text-slate-200 transition hover:border-accent-blue/50 hover:text-white"><FiGithub /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="glass grid h-10 w-10 place-items-center text-slate-200 transition hover:border-accent-blue/50 hover:text-white"><FiLinkedin /></a>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="relative mx-auto w-full max-w-xl">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-blue/25 to-accent-violet/25 blur-2xl" aria-hidden="true" />
        <div className="glass relative overflow-hidden !bg-[#0c0e1a]/90 shadow-[0_30px_80px_rgba(51,65,85,0.35)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-auto font-mono text-xs tracking-wide text-slate-400">developer.js</span>
          </div>
          <div className="p-5 sm:p-7">
            <p className="font-mono text-sm text-accent-blue">&lt; Developer /&gt;</p>
            <p className="mt-2 text-2xl font-extrabold text-white">{site.name}</p>
            <p className="text-slate-400">{site.role}</p>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm" aria-label="Code snippet describing the developer">
              {lines.map((line, i) => (
                <motion.div key={i} className={line.c} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 + i * 0.18 }}>
                  {line.t}
                </motion.div>
              ))}
              <div className="text-emerald-400">$ npm run dev<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-emerald-400" aria-hidden="true" /></div>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
