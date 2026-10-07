import { useState, useCallback } from 'react'
import { Section, Reveal } from '../components/ui.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])
  return (
    <Section id="projects" title="Projects" subtitle="Applications I've built to solve real problems, from attendance systems to digital services.">
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <ProjectCard project={p} onDetails={() => setSelected(p)} />
          </Reveal>
        ))}
      </div>
      <ProjectModal project={selected} onClose={close} />
    </Section>
  )
}
