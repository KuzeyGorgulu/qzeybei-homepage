type SiteFooterProps = {
  brand: string
  year: string
  location: string
}

export function SiteFooter({ brand, year, location }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <p>{brand} / {year}</p>
      <p>Built in {location}</p>
      <a href="#top">Back to top ↑</a>
      <p>© {year} Kuzey Görgülü</p>
    </footer>
  )
}
