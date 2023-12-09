import type { Metadata } from 'next'
import { Faq } from '../components/Faq'
import styles from '../styles/page.module.scss'
import { UnderInner } from '../components/UnderInner';

export const metadata: Metadata = {
  title: 'FAQ'
}

export default function Page() {
  return (
    <>
      <section id="faq">
        <UnderInner title={metadata.title as string} />
        <div className={styles.containerInner}>
          <p className={styles.underRead}>If you have any inquiries, please don&apos;t hesitate to contact me.</p>
          <Faq />
        </div>
      </section>
    </>
  );
}