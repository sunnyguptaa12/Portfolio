import { FiGithub, FiExternalLink, FiMaximize2 } from 'react-icons/fi'
import { Tag } from './ui.jsx'
import ProjectThumb from './ProjectThumb.jsx'
import { site } from '../data/site.js'

export function ProjectLinks({ project, onDetails }) {
  const github = project.github || site.github
  return (
    <div className="flex flex-wrap gap-2">
      <a href={github} target="_blank" rel="noreferrer" className="btn-ghost !px-3.5 !py-2"><FiGithub />GitHub</a>
      {project.live ? (
        <a href={project.live} target="_blank" rel="noreferrer" className="btn-ghost !px-3.5 !py-2"><FiExternalLink />Live Demo</a>
      ) : (
        <span aria-disabled="true" title="Add a live URL in src/data/projects.js" className="btn !px-3.5 !py-2 cursor-not-allowed border border-dashed border-white/10 text-slate-500"><FiExternalLink />Live Demo</span>
      )}
      {onDetails && <button onClick={onDetails} className="btn-primary !px-3.5 !py-2"><FiMaximize2 />View Details</button>}
    </div>
  )
}

export default function ProjectCard({ project, onDetails }) {
  return (
    <article className="group glass-hover flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d1119]/80 shadow-[0_20px_50px_rgba(15,23,42,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
      <ProjectThumb gradient={project.gradient} variant={project.variant} image={project.image} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-[1.65rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-white">{project.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => <Tag key={t}>{t}</Tag>)}
          {project.tech.length > 6 && <Tag>+{project.tech.length - 6}</Tag>}
        </div>
        <div className="mt-auto pt-6"><ProjectLinks project={project} onDetails={onDetails} /></div>
      </div>
    </article>
  )
}
