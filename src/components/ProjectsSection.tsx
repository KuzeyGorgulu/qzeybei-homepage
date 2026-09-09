import type { Project } from '../content/site'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeader } from './SectionHeader'

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="page-section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionHeader id="projects" index="01" title="Projects" aside="Selected systems / 2026" />
      <p className="projects-intro" data-reveal>
        Independent ideas,<br />built to be used.
      </p>

      <div className="project-stack">
        {projects.map((project, index) => (
          <article className="project-feature" key={project.name} data-reveal>
            <div className="project-visual-wrap">
              <ProjectVisual visual={project.visual} />
            </div>

            <div className="project-copy">
              <div className="project-kicker">
                <span>{String(index + 1).padStart(2, '0')} / {project.shortName}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-links">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    <span>Open project</span><span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="project-link-muted">Not public yet</span>
                )}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
                    <span>GitHub</span><span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

