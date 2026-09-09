import type { SocialLink } from '../content/site'
import { QzeybeiLogo, QzeybeiMark } from './BrandMark'
import { SectionHeader } from './SectionHeader'

type ContactSectionProps = {
  heading: string
  email: string
  signoff: string
  socialLinks: SocialLink[]
}

export function ContactSection({ heading, email, signoff, socialLinks }: ContactSectionProps) {
  return (
    <section className="page-section contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeader id="contact" index="05" title="Contact" aside="The next thing / Maybe together" />

      <div className="contact-scene" data-reveal>
        <div className="contact-orbit" aria-hidden="true">
          <QzeybeiMark />
        </div>
        <div className="contact-copy">
          <p className="contact-heading">{heading}</p>
          <a className="contact-email" href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
        </div>

        <div className="contact-bottom">
          <p>{signoff}</p>
          <nav className="contact-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>{link.label}</span><span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <span className="contact-lockup" role="img" aria-label="Qzeybei">
            <QzeybeiLogo />
          </span>
        </div>
      </div>
    </section>
  )
}
