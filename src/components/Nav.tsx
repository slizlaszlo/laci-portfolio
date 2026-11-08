import { Container } from './Container'
import { navLinks } from '../data'

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-5 md:py-7">
        <a href="#top" className="text-[20px] font-bold leading-[1.4] text-ink">
          László Sliz
        </a>
        <nav className="flex items-center gap-4 text-sm font-medium text-muted sm:gap-10 sm:text-base">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
