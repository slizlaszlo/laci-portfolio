import { Container } from './Container'
import { experience } from '../data'

export function Experience() {
  return (
    <section id="experience" className="bg-soft">
      <Container className="flex flex-col gap-10 py-14 md:py-20 lg:py-[100px]">
        <h2 className="text-[32px] font-bold leading-[1.4] text-ink lg:text-[40px]">Experience</h2>
        <ul className="border-t border-line">
          {experience.map((e) => (
            <li
              key={e.period + e.org}
              className="flex flex-col gap-2 border-b border-line py-8 md:flex-row md:gap-10"
            >
              <p className="text-base font-medium leading-[1.4] text-muted md:w-[200px] md:shrink-0">{e.period}</p>
              <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
                <h3 className="text-lg font-semibold leading-[1.4] text-ink lg:text-[20px]">{e.title}</h3>
                <p className="text-base font-medium leading-[1.4] text-brand">{e.org}</p>
                {e.text && <p className="text-base leading-[1.5] text-muted">{e.text}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
