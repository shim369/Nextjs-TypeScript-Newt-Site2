import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import styles from '../styles/page.module.scss'
import { UnderInner } from '../components/UnderInner'

export const metadata: Metadata = {
  title: 'ABOUT',
}

export const aboutData = [
  {
    id: "a01",
    title: "VISION",
    image: "/1.webp",
    text: "In the rapid evolution of technology, I always bear the mission of providing the latest innovative services. My vision is to be a true partner in helping clients achieve their desired success through the power of technology. I strive to stand at the forefront of technology and provide innovative solutions."
  },
  {
    id: "a02",
    title: "MISSION",
    image: "/2.webp",
    text: 'My mission is to deeply understand the clients\' businesses and leverage advanced technology to produce tangible results. I value walking alongside my clients as true partners in the pursuit of business success, rather than being just developers.'
  },
  {
    id: "a03",
    title: "REASON",
    image: "/3.webp",
    text: 'The impact of the rapid evolution of technology on modern businesses is immeasurable. I launched this business based on the belief that "technology can make businesses more effective and improved." I believe in solving the challenges faced by clients and elevating businesses to the next level through technology, thereby providing value to society and achieving success.'
  }
];

export default function Page() {
  return (
    <section id="blog">
      <UnderInner title={metadata.title as string} />
      <div className={styles.containerInner}>
        <div className={styles.pageNav}>
          <ul className={styles.pageNavList}>
            {aboutData.map((about, index) => (
              <li key={index}>
                <Link href={`#${about.id}`}>
                  {about.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {aboutData.map((about, index) => (
          <section id={about.id} className={styles.about} key={index} data-testid={about.id}>
            <div className={styles.aboutInner}>
              <h3>{about.title}</h3>
              <div className={`${styles.aboutFlex} ${about.title === 'MISSION' ? styles.visionSection : ''}`}>
                <Image src={about.image} alt={about.title} width={600} height={400} priority={index === 1} />
                <p>{about.text}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};