import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { site, navLinks } from '../data/site.js'

export default function Footer() {
  const mail = site.email ? `mailto:${site.email}` : '#contact'
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-slate-400">{site.role}</p>
          <div className="mt-4 flex gap-3 text-slate-400">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><FiGithub size={20} /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><FiLinkedin size={20} /></a>
            <a href={mail} aria-label="Email" className="hover:text-white"><FiMail size={20} /></a>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-4">
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`} className="text-slate-400 hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-white/5 py-5 text-center text-xs text-slate-500">© 2026 {site.name}. All rights reserved.</p>
    </footer>
  )
}
