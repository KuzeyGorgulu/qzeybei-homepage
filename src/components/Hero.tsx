import type { SiteContent } from '../content/site'
import { usePointerField } from '../hooks/usePointerField'
import { QzeybeiLogo, QzeybeiMark } from './BrandMark'

type HeroProps = Pick<SiteContent, 'brand' | 'person' | 'year' | 'tagline' | 'heroContext'>

export function Hero({ brand, person, year, tagline, heroContext }: HeroProps) {
  const heroRef = usePointerField<HTMLElement>()

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true" />

      <p className="hero-context">{heroContext}</p>

      <div className="hero-center">
        <h1 className="hero-title" id="hero-title" aria-label={brand}>
          <span className="hero-brand-stage" aria-hidden="true">
            <QzeybeiLogo className="hero-logo-final" loading="eager" />
            <QzeybeiLogo className="hero-wordmark-reveal" loading="eager" />
            <QzeybeiMark className="hero-q-flight" loading="eager" />
          </span>
        </h1>
        <p className="hero-tagline">{tagline}</p>
      </div>

      <dl className="hero-meta" aria-label="Profile details">
        <div><dt>Name</dt><dd>{person.name}</dd></div>
        <div><dt>Role</dt><dd>{person.role}</dd></div>
        <div><dt>Location</dt><dd>{person.location}</dd></div>
        <div><dt>Year</dt><dd>{year}</dd></div>
      </dl>

      <a className="explore-cue" href="#projects">
        <span>Explore projects</span>
        <span className="explore-arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
