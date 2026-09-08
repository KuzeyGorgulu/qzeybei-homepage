import type { SiteContent } from '../content/site'
import { SectionShell } from './SectionShell'

type FutureSectionsProps = Pick<SiteContent, 'currently' | 'futureProjects' | 'socialLinks' | 'person'>

export function FutureSections({ currently, futureProjects, socialLinks, person }: FutureSectionsProps) {
  return (
    <main id="content">
      <SectionShell
        id="projects"
        index="01"
        title="Projects"
        statement="Independent ideas, becoming real places."
        aside={<span>Selected work / Soon</span>}
      >
        <ul className="project-index" aria-label="Projects in development">
          {futureProjects.map((project, index) => (
            <li key={project.domain}>
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="project-name">{project.name}</span>
              <span className="project-note">{project.note}</span>
              <span className="project-domain">{project.domain}</span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        id="currently"
        index="02"
        title="Currently"
        statement={currently.heading}
        aside={<span>Ankara / 2026</span>}
      >
        <p className="section-detail">{currently.detail}</p>
      </SectionShell>

      <SectionShell
        id="about"
        index="03"
        title="About"
        statement="A personal space for useful objects, strange ideas, and everything between."
        aside={<span>{person.name}</span>}
      />

      <SectionShell
        id="experiments"
        index="04"
        title="Experiments"
        statement="Small studies in interaction, motion, and code."
        aside={<span>Archive / Eventually</span>}
      />

      <SectionShell
        id="contact"
        index="05"
        title="Contact"
        statement="Have an idea worth making? Let’s talk."
        className="contact-section"
        aside={<span>Open to thoughtful conversations</span>}
      >
        <div className="contact-links">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </SectionShell>
    </main>
  )
}

