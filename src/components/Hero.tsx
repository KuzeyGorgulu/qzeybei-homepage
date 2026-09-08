import type { SiteContent } from '../content/site'
import { usePointerField } from '../hooks/usePointerField'

type HeroProps = Pick<SiteContent, 'brand' | 'person' | 'year' | 'tagline'>

export function Hero({ brand, person, year, tagline }: HeroProps) {
  const heroRef = usePointerField<HTMLElement>()

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="hero-center">
        <h1 className="hero-title" id="hero-title" aria-label={brand}>
          {brand.split('').map((letter, index) => (
            <span className="hero-letter-mask" key={`${letter}-${index}`} aria-hidden="true">
              <span className="hero-letter" style={{ '--letter-index': index } as React.CSSProperties}>
                {letter}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-tagline">{tagline}</p>
      </div>

      <dl className="hero-meta" aria-label="Profile details">
        <div>
          <dt>Name</dt>
          <dd>{person.name}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{person.role}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{person.location}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{year}</dd>
        </div>
      </dl>

      <a className="explore-cue" href="#projects">
        <span>Explore projects</span>
        <span className="explore-arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

