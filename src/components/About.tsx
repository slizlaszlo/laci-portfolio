import { Container } from './Container'

export function About() {
  return (
    <section id="about" className="bg-soft">
      <Container className="flex flex-col gap-6 py-14 md:py-20 lg:py-[100px]">
        <h2 className="text-[32px] font-bold leading-[1.4] text-ink lg:text-[40px]">About me</h2>
        <p className="max-w-[800px] text-lg leading-[1.55] text-muted lg:text-[20px]">
          I have worked in IT for more than 15 years, first as a QA engineer and then as a software engineer. Along the
          way I have dealt with challenging situations, worked with a wide variety of people, and enjoyed finding
          solutions that help companies grow. I keep developing my skills continuously, and I still enjoy coding at home
          after work.
        </p>
        <p className="text-base font-medium leading-[1.4] text-ink">
          Spoken languages: Hungarian (native), English (upper intermediate, used daily).
        </p>
      </Container>
    </section>
  )
}
