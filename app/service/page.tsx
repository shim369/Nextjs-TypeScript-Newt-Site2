import { Metadata } from 'next'
import styles from '../styles/page.module.scss'

export const metadata: Metadata = {
  title: 'SERVICE'
}

export default function Page() {
  const services = [
    {
      title: "Website Development",
      technologies: "HTML, CSS/SASS, JavaScript, Astro",
      price: "¥300,000 ~"
    },
    {
      title: "Web Application Development",
      technologies: "Next.js, Nuxt.js, Python, Django",
      price: "¥500,000 ~"
    },
    {
      title: "CMS Construction",
      technologies: "WordPress, MicroCMS, Newt",
      price: "¥200,000 ~"
    },
    {
      title: "Design & UI/UX",
      technologies: "Figma, Adobe Photoshop, Illustrator",
      price: "¥150,000 ~"
    },
  ];

  return (
    <section id="service">
      <div className={styles.underInner}>
        <h2>SERVICE</h2>
      </div>
      <div className={styles.containerInner}>
        <p className={styles.underRead}>The prices listed above are all reference prices and may vary depending on the project&apos;s scope and requirements.<br />For more details, please inquire.</p>

        <ul className={styles.services}>
          {services.map((service, index) => {
            if (!service.title) return null;

            return (
              <li key={index}>
                <h3 className={styles.tblTitle}>{index + 1}. {service.title}</h3>
                <table className={styles.tbl}>
                  <tbody>
                    <tr>
                      <th>Technologies</th>
                      <td>{service.technologies}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>{service.price}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            );
          })}
        </ul>

        <h3 className={`${styles.tblTitle} ${styles.opTitle}`}>Additional Options</h3>
        <table className={styles.tbl2}>
          <tbody>
            <tr>
              <th>
                Maintenance
              </th>
              <td>
                ¥20,000 ~ /Month
              </td>
            </tr>
            <tr>
              <th>
                SEO Optimization
              </th>
              <td>
                ¥50,000 ~
              </td>
            </tr>
            <tr>
              <th>
                Content Creation
              </th>
              <td>
                ¥30,000 ~
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}