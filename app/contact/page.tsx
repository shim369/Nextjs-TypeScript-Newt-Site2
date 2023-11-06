import Contact from "../components/Contact";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CONTACT'
}

export default function Page() {
  return (
    <>
    <section id="contact">
      <div className={'under-inner'}>
        <h2>CONTACT</h2>
      </div>
      <Contact />
    </section>
    </>
  )
}
