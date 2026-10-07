import { Section, Reveal, Tag } from '../components/ui.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <Section id="experience" title="Development & project experience" subtitle="Hands-on experience from academic and personal projects. This is project work, not employment.">
      <ol className="relative ml-4 border-l border-white/10 sm:ml-6">
        {experience.map(({ title, icon: Icon, text, tags }, i) => (
          <li key={title} className="relative pb-8 pl-8 last:pb-0 sm:pl-10">
            <span className="absolute -left-[19px] top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-base text-accent-blue"><Icon size={16} aria-hidden="true" /></span>
            <Reveal delay={i * 0.05}>
              <div className="glass glass-hover p-6">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
