import { FiLayers, FiTarget, FiZap, FiUsers } from 'react-icons/fi'
import { Section, Reveal } from '../components/ui.jsx'

const reasons = [
  { icon: FiLayers, title: 'Full Stack Mindset', text: 'Comfortable working across frontend, backend and databases.' },
  { icon: FiTarget, title: 'Real-World Projects', text: 'Experience building practical applications solving real problems.' },
  { icon: FiZap, title: 'Fast Learner', text: 'Continuously learning modern technologies and development practices.' },
  { icon: FiUsers, title: 'Team Player', text: 'Able to collaborate, communicate and adapt in team environments.' },
]

export default function WhyMe() {
  return (
    <Section id="why-me" title="Why work with me?">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="glass glass-hover h-full p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-blue/25 to-accent-violet/25 text-accent-blue"><Icon size={20} /></span>
              <h3 className="mt-5 font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
