import Link from 'next/link'
import type { Metadata } from 'next'
import '../styles/css/layout.css'

export const metadata: Metadata = {
  title: 'ERROR'
}

export default function Page() {
  return (
    <section id="contact">
      <div className='underInner'>
        <h2>CONTACT</h2>
      </div>
      <div className='containerInner'>
      <p className='underRead'>Sending your inquiry failed.</p>
        <Link href="/contact" className='linkText'>Back to Previous Page</Link>
      </div>
    </section>
  )
}
