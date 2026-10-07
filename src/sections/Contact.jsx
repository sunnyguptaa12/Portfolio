import { useState } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi'
import { Section, Reveal } from '../components/ui.jsx'
import { site } from '../data/site.js'

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('')
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No backend: opens the visitor's mail app. Swap for Formspree/EmailJS/API later.
  const onSubmit = (e) => {
    e.preventDefault()
    if (!site.email) {
      setStatus('Set VITE_CONTACT_EMAIL in .env to enable sending.')
      return
    }
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    setStatus('Opening your email app to send the message.')
    setForm(empty)
  }

  const info = [
    { icon: FiMail, label: 'Email', value: site.email || site.emailPlaceholder, href: site.email ? `mailto:${site.email}` : undefined },
    { icon: FiPhone, label: 'Phone', value: site.phone, href: site.phone ? `tel:${site.phone.replace(/\s+/g, '')}` : undefined },
    { icon: FiGithub, label: 'GitHub', value: site.github.replace('https://', ''), href: site.github },
    { icon: FiLinkedin, label: 'LinkedIn', value: site.linkedin.replace('https://', ''), href: site.linkedin },
    { icon: FiMapPin, label: 'Location', value: 'Bhopal, India' },
  ]

  return (
    <Section id="contact" title="Let's build something together" subtitle="I'm currently looking for software development opportunities where I can learn, contribute and grow as a developer.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <ul className="space-y-4">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="glass flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent-blue"><Icon /></span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">{label}</p>
                  {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block truncate text-slate-200 hover:text-white">{value}</a> : <p className="truncate text-slate-200">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">Name</label><input id="name" required autoComplete="name" className="input" placeholder="Your name" value={form.name} onChange={set('name')} /></div>
              <div><label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">Email</label><input id="email" type="email" required autoComplete="email" className="input" placeholder="you@company.com" value={form.email} onChange={set('email')} /></div>
            </div>
            <div><label htmlFor="subject" className="mb-1.5 block text-sm text-slate-300">Subject</label><input id="subject" required className="input" placeholder="Software Developer opportunity" value={form.subject} onChange={set('subject')} /></div>
            <div><label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">Message</label><textarea id="message" required rows={5} className="input resize-y" placeholder="How can I help?" value={form.message} onChange={set('message')} /></div>
            <button type="submit" className="btn-primary w-full sm:w-auto"><FiSend />Send Message</button>
            <p role="status" aria-live="polite" className="min-h-5 text-sm text-slate-400">{status}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
