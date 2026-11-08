import type { ReactNode } from 'react'

const variants = {
  primary: 'bg-brand text-white hover:bg-blue-700',
  secondary: 'bg-white border border-line text-ink hover:bg-soft',
  outlineDark: 'border border-night-line text-white hover:bg-night-line/40',
}

export function Button({
  href,
  variant,
  children,
  external,
}: {
  href: string
  variant: keyof typeof variants
  children: ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center rounded-[10px] px-7 py-4 text-base font-semibold leading-[1.4] transition-colors ${variants[variant]}`}
    >
      {children}
    </a>
  )
}
