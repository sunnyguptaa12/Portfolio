import { FiBookOpen, FiAward } from 'react-icons/fi'
import { Section, Reveal } from '../components/ui.jsx'

export default function Journey() {
  return (
    <Section id="journey" title="Publications & Certificates">
      <div className="space-y-8">
        <Reveal>
          <div className="glass p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-3">
              <FiBookOpen className="text-accent-violet" size={18} />
              <h3 className="text-lg font-bold text-white">Publications</h3>
            </div>
            <p className="text-base leading-relaxed text-slate-300">
              Published research paper, <span className="font-semibold text-white">"Expense Tracker Application"</span> — IJIRCCE, Vol. 14, Issue 1, January 2026
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <FiAward className="text-accent-blue" size={18} />
              <h3 className="text-lg font-bold text-white">Certificates</h3>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-2 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-white">Programming in Java: NPTEL</p>
                <span className="text-sm text-slate-400">Jan – Apr 2026</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-white">MySQL Essential Training: LinkedIn Learning</p>
                <span className="text-sm text-slate-400">May 2026</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
