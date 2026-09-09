import type { CurrentlyItem } from '../content/site'
import { SectionHeader } from './SectionHeader'

type CurrentlySectionProps = {
  heading: string
  items: CurrentlyItem[]
  location: string
}

export function CurrentlySection({ heading, items, location }: CurrentlySectionProps) {
  return (
    <section className="page-section currently-section" id="currently" aria-labelledby="currently-title">
      <SectionHeader id="currently" index="02" title="Currently" aside={`${location} / Now`} />

      <div className="currently-layout">
        <p className="section-lead" data-reveal>{heading}</p>
        <dl className="currently-list" data-reveal>
          {items.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

