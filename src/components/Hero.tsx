import { Container } from './Container'
import { Button } from './Button'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { EMAIL, LINKEDIN_URL } from '../data'

export function Hero() {
  return (
    <section id="top">
      <Container className="flex flex-col-reverse items-center gap-10 py-12 md:py-20 lg:flex-row lg:gap-20 lg:py-[110px]">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <p className="text-base font-semibold leading-[1.4] text-brand">Senior Software Engineer · Team Lead</p>
          <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[56px] lg:text-[72px]">
            Hi, I'm László Sliz.
          </h1>
          <p className="text-lg leading-[1.5] text-muted lg:text-[20px]">
            15+ years in IT. I started in QA and became a software engineer building web and TV applications with
            TypeScript and React.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={`mailto:${EMAIL}`} variant="primary">Get in touch</Button>
            <Button href={LINKEDIN_URL} variant="secondary" external>LinkedIn</Button>
          </div>
        </div>
        <PhotoPlaceholder />
      </Container>
    </section>
  )
}
