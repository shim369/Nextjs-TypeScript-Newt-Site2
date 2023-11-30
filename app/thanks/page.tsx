"use client";
import Link from 'next/link'
import '../styles/css/layout.css'

export default function Page() {
  return (
    <section id="contact">
      <div className='underInner'>
        <h2>CONTACT</h2>
      </div>
      <div className='containerInner'>
      <p className='underRead'>Thank you for your inquiry.</p>
        <Link href="/contact" className='linkText'>Back to Previous Page</Link>
      </div>
    </section>
  )
}
