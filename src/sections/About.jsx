import { FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi'
import { Section, Reveal } from '../components/ui.jsx'

const highlights = [
  { icon: FiCode, title: 'Full Stack Development', text: 'UI, APIs and databases end to end.' },
  { icon: FiCpu, title: 'Problem Solving', text: 'Breaking problems into clear, testable steps.' },
  { icon: FiTrendingUp, title: 'Continuous Learning', text: 'Always picking up modern tools and practices.' },
]

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300">
          <p>B.Tech CSE (AI & ML) student with hands-on experience in full-stack web development using React.js, JavaScript, Node.js, Express.js, and MongoDB.</p>
          <p>I build responsive interfaces, REST APIs, JWT-based authentication, and database-driven applications with a focus on practical, real-world solutions.</p>
          <p>I enjoy turning ideas into scalable products and continuously improving my software development skills through projects and learning.</p>
        </Reveal>
        <div className="grid gap-4">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="glass glass-hover flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-blue/25 to-accent-violet/25 text-accent-blue"><Icon size={20} /></span>
                <div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 text-sm text-slate-400">{text}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
