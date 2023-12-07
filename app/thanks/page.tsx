"use client";
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../styles/page.module.scss'

export const metaData: Metadata = {
  title: 'THANKS'
}

export default function Page() {
  return (
    <section id="contact">
      <div className={styles.underInner}>
        <h2>CONTACT</h2>
      </div>
      <div className={styles.containerInner}>
        <p className={styles.underRead}>Thank you for your inquiry.</p>
        <Link href="/contact" className={styles.linkText}>Back to Previous Page</Link>
      </div>
    </section>
  )
}
