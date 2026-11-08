import { Container } from './Container'
import { skills } from '../data'

export function Skills() {
  return (
    <section id="skills">
      <Container className="flex flex-col gap-10 py-14 md:py-20 lg:py-[100px]">
        <h2 className="text-[32px] font-bold leading-[1.4] text-ink lg:text-[40px]">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <article key={s.title} className="flex flex-col gap-[10px] rounded-2xl border border-line bg-white p-8">
              <h3 className="text-[22px] font-semibold leading-[1.4] text-ink">{s.title}</h3>
              <p className="text-sm font-semibold leading-[1.4] text-brand">Recently</p>
              <p className="text-base leading-[1.5] text-ink">{s.recently}</p>
              <p className="text-sm font-semibold leading-[1.4] text-muted">Previously</p>
              <p className="text-base leading-[1.5] text-muted">{s.previously}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
