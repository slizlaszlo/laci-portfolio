import { Container } from './Container'

export function Footer() {
  return (
    <footer className="bg-ink">
      <Container className="flex flex-col gap-2 py-7 text-sm leading-[1.4] text-night-text sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 László Sliz</p>
        <p>Designed in Figma with Claude</p>
      </Container>
    </footer>
  )
}
