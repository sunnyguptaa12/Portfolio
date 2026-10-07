import { FiBookOpen } from 'react-icons/fi'
import { Section, Reveal } from '../components/ui.jsx'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative ml-4 border-l border-white/10 sm:ml-6">
        <span className="absolute -left-[19px] top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-base text-accent-violet"><FiBookOpen size={16} aria-hidden="true" /></span>
        <Reveal className="pl-8 sm:pl-10">
          <div className="glass space-y-6 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">B.Tech in Computer Science and Engineering (AI & ML)</h3>
                <p className="mt-1 text-slate-300">Oriental Institute of Science & Technology, Bhopal, M.P.</p>
              </div>
              <span className="rounded-full border border-accent-violet/40 bg-accent-violet/10 px-3.5 py-1 font-mono text-sm text-accent-violet">2023 – 2027</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">Samastipur College, 12th</h4>
                </div>
                <span className="text-slate-300">Samastipur, Bihar (2023)</span>
              </div>
              <p className="text-slate-400">Percentage: 77%</p>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">St Paul Secondary School, 10th</h4>
                </div>
                <span className="text-slate-300">Samastipur, Bihar (2021)</span>
              </div>
              <p className="text-slate-400">Percentage: 77.6%</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
