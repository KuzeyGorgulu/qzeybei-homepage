import type { NavigationItem } from '../content/site'
import { QzeybeiLogo } from './BrandMark'

type SiteHeaderProps = {
  brand: string
  navigation: NavigationItem[]
}

export function SiteHeader({ brand, navigation }: SiteHeaderProps) {
  return (
    <header className="site-header" aria-label="Site header">
      <a className="brand-mark" href="#top" aria-label={`${brand}, back to top`}>
        <QzeybeiLogo className="header-logo" loading="eager" />
      </a>

      <nav aria-label="Primary navigation">
        <ul className="site-nav">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
