import { Contact } from "../components/Contact";
import type { Metadata } from 'next'
import styles from '../styles/page.module.scss'

export const metaData: Metadata = {
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
