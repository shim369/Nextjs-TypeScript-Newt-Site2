import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../styles/page.module.scss'
import { UnderInner } from '../components/UnderInner'

export const metadata: Metadata = {
  title: 'THANKS'
}

export default function Page() {
  return (
    <section id="contact">
      <UnderInner title={metadata.title as string} />
      <div className={styles.containerInner}>
        <p className={styles.underRead}>Thank you for your inquiry.</p>
        <Link href="/contact" className={styles.linkText}>Back to Previous Page</Link>
      </div>
    </section>
  )
}
