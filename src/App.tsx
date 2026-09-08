import { FutureSections } from './components/FutureSections'
import { Hero } from './components/Hero'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { siteContent } from './content/site'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader brand={siteContent.brand} navigation={siteContent.navigation} />
      <Hero
        brand={siteContent.brand}
        person={siteContent.person}
        tagline={siteContent.tagline}
        year={siteContent.year}
      />
      <FutureSections
        currently={siteContent.currently}
        futureProjects={siteContent.futureProjects}
        socialLinks={siteContent.socialLinks}
        person={siteContent.person}
      />
      <SiteFooter
        brand={siteContent.brand}
        location={siteContent.person.location}
        year={siteContent.year}
      />
    </>
  )
}

