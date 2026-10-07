import { motion } from 'framer-motion'

// Scroll-reveal wrapper. `delay` lets siblings stagger.
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

export function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <Reveal className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-base leading-relaxed text-slate-400">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-slate-300">
      {children}
    </span>
  )
}
