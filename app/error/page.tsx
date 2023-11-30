import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../styles/css/page.module.css'

export const metadata: Metadata = {
  title: 'ERROR'
}

export default function Page() {
  return (
    <section id="contact">
      <div className={styles.underInner}>
        <h2>CONTACT</h2>
      </div>
      <div className={styles.containerInner}>
      <p className={styles.underRead}>Sending your inquiry failed.</p>
        <Link href="/contact" className={styles.linkText}>Back to Previous Page</Link>
      </div>
    </section>
  )
}
