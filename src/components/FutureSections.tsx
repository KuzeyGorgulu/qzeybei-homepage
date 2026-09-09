import type { SiteContent } from '../content/site'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { CurrentlySection } from './CurrentlySection'
import { ExperimentsSection } from './ExperimentsSection'
import { ProjectsSection } from './ProjectsSection'

type FutureSectionsProps = Pick<
  SiteContent,
  'projects' | 'currently' | 'about' | 'experiments' | 'contact' | 'socialLinks' | 'person'
>

export function FutureSections({
  projects,
  currently,
  about,
  experiments,
  contact,
  socialLinks,
  person,
}: FutureSectionsProps) {
  return (
    <main id="content">
      <ProjectsSection projects={projects} />
      <CurrentlySection heading={currently.heading} items={currently.items} location={person.location} />
      <AboutSection statement={about.statement} details={about.details} name={person.name} />
      <ExperimentsSection heading={experiments.heading} items={experiments.items} />
      <ContactSection
        heading={contact.heading}
        email={contact.email}
        signoff={contact.signoff}
        socialLinks={socialLinks}
      />
    </main>
  )
}
