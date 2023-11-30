import type { Metadata } from 'next'
import { Faq } from '../components/Faq'
import '../styles/css/layout.css'

export const metadata: Metadata = {
  title: 'FAQ'
}

export default function Page() {
  return (
    <>
    <section id="faq">
      <div className='underInner'>
        <h2>FAQ</h2>
      </div>
      <div className='containerInner'>
      <p className='underRead'>If you have any inquiries, please don&apos;t hesitate to contact me.</p>
        <Faq />
      </div>
    </section>
    </>
  );
}