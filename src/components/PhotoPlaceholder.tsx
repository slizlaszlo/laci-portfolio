type Props = {
  /** Set to a photo URL (e.g. an import from src/assets) to replace the "LS" placeholder. */
  src?: string
  alt?: string
  initials?: string
}

export function PhotoPlaceholder({ src, alt = 'László Sliz', initials = 'LS' }: Props) {
  return (
    <div className="flex size-[220px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-soft sm:size-[280px] lg:size-[360px]">
      {src ? (
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        <span className="text-[64px] font-bold leading-[1.4] text-brand sm:text-[80px] lg:text-[96px]" aria-label={alt}>
          {initials}
        </span>
      )}
    </div>
  )
}
