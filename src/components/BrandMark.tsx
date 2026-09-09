type BrandImageProps = {
  className?: string
  label?: string
  loading?: 'eager' | 'lazy'
}

const LOGO_SOURCE = '/brand/qzeybei-logo.png'

function OfficialLogoImage({ loading = 'lazy' }: Pick<BrandImageProps, 'loading'>) {
  return (
    <img
      className="qzeybei-logo-image"
      src={LOGO_SOURCE}
      width="1774"
      height="887"
      alt=""
      loading={loading}
      decoding="async"
      fetchPriority={loading === 'eager' ? 'high' : undefined}
      draggable="false"
    />
  )
}

export function QzeybeiLogo({ className = '', label, loading }: BrandImageProps) {
  return (
    <span
      className={`qzeybei-logo-crop ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <OfficialLogoImage loading={loading} />
    </span>
  )
}

export function QzeybeiMark({ className = '', label, loading }: BrandImageProps) {
  return (
    <span
      className={`qzeybei-mark-crop ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <OfficialLogoImage loading={loading} />
    </span>
  )
}

