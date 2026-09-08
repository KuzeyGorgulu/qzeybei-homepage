import type { ReactNode } from 'react'

type SectionShellProps = {
  id: string
  index: string
  title: string
  statement: string
  aside?: ReactNode
  children?: ReactNode
  className?: string
}

export function SectionShell({
  id,
  index,
  title,
  statement,
  aside,
  children,
  className = '',
}: SectionShellProps) {
  return (
    <section className={`section-shell ${className}`} id={id} aria-labelledby={`${id}-title`}>
      <header className="section-heading">
        <p className="section-index">({index})</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {aside && <div className="section-aside">{aside}</div>}
      </header>

      <div className="section-body">
        <p className="section-statement">{statement}</p>
        {children}
      </div>
    </section>
  )
}

