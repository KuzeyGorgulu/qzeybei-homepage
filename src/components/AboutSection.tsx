import { SectionHeader } from './SectionHeader'

type AboutSectionProps = {
  statement: string
  details: string[]
  name: string
}

export function AboutSection({ statement, details, name }: AboutSectionProps) {
  return (
    <section className="page-section about-section" id="about" aria-labelledby="about-title">
      <SectionHeader id="about" index="03" title="About" aside={name} />

      <div className="about-layout">
        <p className="about-statement" data-reveal>{statement}</p>
        <ul className="about-details" data-reveal aria-label="About details">
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </div>
    </section>
  )
}

