import { Contact } from "../components/Contact"
import { UnderInner } from "../components/UnderInner"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CONTACT'
}

export default function Page() {
  return (
    <section id="contact">
      <UnderInner title={metadata.title as string} />
      <Contact />
    </section>
  )
}
