import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { Section, Reveal } from '../components/ui.jsx'
import { site } from '../data/site.js'

export default function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="View or download my resume as a PDF." className="resume-section">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e1a] shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4 sm:px-6">
            <p className="font-semibold text-white">{site.name} — Resume</p>
            <div className="flex flex-wrap gap-2">
              <a href={site.resume} target="_blank" rel="noreferrer" className="btn-ghost !px-3.5 !py-2">
                <FiExternalLink />Open PDF
              </a>
              <a href={site.resume} download="Sunny-Kumar-Resume.pdf" className="btn-primary !px-3.5 !py-2">
                <FiDownload />Download PDF
              </a>
            </div>
          </div>
          <iframe src={site.resume} title={`${site.name} resume PDF`} className="resume-pdf-frame" />
        </div>
      </Reveal>
    </Section>
  )
}
