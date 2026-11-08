import { Container } from './Container'
import { Button } from './Button'
import { EMAIL, LINKEDIN_LABEL, LINKEDIN_URL } from '../data'

export function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <Container className="flex flex-col gap-6 py-14 md:py-20 lg:py-[100px]">
        <h2 className="text-[36px] font-bold leading-[1.4] text-white lg:text-[48px]">Let's talk</h2>
        <p className="max-w-[900px] text-lg leading-[1.5] text-night-text lg:text-[20px]">
          Interested in working together, or just want to say hi? Send me a message.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href={`mailto:${EMAIL}`} variant="primary">{EMAIL}</Button>
          <Button href={LINKEDIN_URL} variant="outlineDark" external>{LINKEDIN_LABEL}</Button>
        </div>
      </Container>
    </section>
  )
}
