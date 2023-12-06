import Contact from "../components/Contact";
import type { Metadata } from 'next'
import styles from '../styles/page.module.scss'

export const metadata: Metadata = {
  title: 'CONTACT'
}

export default function Page() {
  return (
    <>
      <section id="contact">
        <div className={styles.underInner}>
          <h2>CONTACT</h2>
        </div>
        <Contact />
      </section>
    </>
  )
}
