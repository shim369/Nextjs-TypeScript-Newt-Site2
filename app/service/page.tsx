import type { Metadata } from 'next'
import '../styles/css/layout.css'

export const metadata: Metadata = {
  title: 'SERVICE'
}

export default function Page() {
  return (
    <section id="service">
    <div className='underInner'>
      <h2>SERVICE</h2>
    </div>
      <div className='containerInner'>
      <p className='underRead'>The prices listed above are all reference prices and may vary depending on the project&apos;s scope and requirements.<br />For more details, please inquire.</p>
      
      <ul className='services'>
        <li>
          <h3 className='tblTitle'>1. Website Development</h3>
          <table className='tbl'>
            <tbody>
            <tr>
              <th>Technologies</th>
              <td>HTML, CSS/SASS, JavaScript, Astro</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>¥300,000 ~</td>
            </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h3 className='tblTitle'>2. Web Application Development</h3>
          <table className='tbl'>
            <tbody>
            <tr>
              <th>Technologies</th>
              <td>Next.js, Nuxt.js, Python, Django</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>¥500,000 ~</td>
            </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h3 className='tblTitle'>3. CMS Construction</h3>
          <table className='tbl'>
            <tbody>
            <tr>
              <th>Technologies</th>
              <td>WordPress, MicroCMS, Newt</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>¥200,000 ~</td>
            </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h3 className='tblTitle'>4. Design & UI/UX</h3>
          <table className='tbl'>
            <tbody>
            <tr>
              <th>Technologies</th>
              <td>Figma, Adobe (Photoshop, Illustrator)</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>¥150,000 ~</td>
            </tr>
            </tbody>
          </table>
        </li>
      </ul>

      <h3 className='tblTitle opTitle'>Additional Options</h3>
      <table className='tbl2'>
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