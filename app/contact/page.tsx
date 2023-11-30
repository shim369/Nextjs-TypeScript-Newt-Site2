import Contact from "../components/Contact";
import type { Metadata } from 'next'
import '../styles/css/layout.css'

export const metadata: Metadata = {
  title: 'CONTACT'
}

export default function Page() {
  return (
    <>
    <section id="contact">
      <div className='underInner'>
        <h2>CONTACT</h2>
      </div>
      <Contact />
    </section>
    </>
  )
}
