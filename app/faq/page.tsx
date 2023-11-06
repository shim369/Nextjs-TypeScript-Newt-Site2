import type { Metadata } from 'next'
import { Faq } from '../components/Faq';

export const metadata: Metadata = {
  title: 'FAQ'
}

export default function Page() {
  return (
    <>
    <section id="faq">
      <div className={'under-inner'}>
        <h2>FAQ</h2>
      </div>
      <div className={'container-inner'}>
      <p className={'under-read'}>If you have any inquiries, please don&apos;t hesitate to contact me.</p>
        <Faq />
      </div>
    </section>
    </>
  );
}