type SectionHeaderProps = {
  id: string
  index: string
  title: string
  aside: string
}

export function SectionHeader({ id, index, title, aside }: SectionHeaderProps) {
  return (
    <header className="section-header" data-reveal>
      <span className="section-index">({index})</span>
      <h2 id={`${id}-title`}>{title}</h2>
      <span className="section-aside">{aside}</span>
    </header>
  )
}

