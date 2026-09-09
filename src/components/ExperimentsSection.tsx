import type { Experiment } from '../content/site'
import { SectionHeader } from './SectionHeader'

type ExperimentsSectionProps = {
  heading: string
  items: Experiment[]
}

export function ExperimentsSection({ heading, items }: ExperimentsSectionProps) {
  return (
    <section className="page-section experiments-section" id="experiments" aria-labelledby="experiments-title">
      <SectionHeader id="experiments" index="04" title="Playground" aside="Living archive / Ongoing" />

      <p className="section-lead experiments-lead" data-reveal>{heading}</p>
      <ol className="experiment-list" data-reveal>
        {items.map((item, index) => (
          <li key={`${item.category}-${item.title}`}>
            <span className="experiment-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="experiment-category">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <span className="experiment-status">{item.status}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
