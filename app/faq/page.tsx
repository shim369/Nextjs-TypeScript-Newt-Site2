import type { Metadata } from 'next'
import { Faq } from '../components/Faq'
import styles from '../styles/css/page.module.css'

export const metadata: Metadata = {
  title: 'FAQ'
}

export default function Page() {
  return (
    <>
    <section id="faq">
      <div className={styles.underInner}>
        <h2>FAQ</h2>
      </div>
      <div className={styles.containerInner}>
      <p className={styles.underRead}>If you have any inquiries, please don&apos;t hesitate to contact me.</p>
        <Faq />
      </div>
    </section>
    </>
  );
}