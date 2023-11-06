import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ABOUT'
}

export default function Page() {
  return (
    <section id="blog">
      <div className={'under-inner'}>
        <h2>ABOUT</h2>
      </div>
      <div className={'container-inner'}>
        <div className={'page-nav'}>
          <ul className={'page-nav-list'}>
            <li>
              <Link href="#a01">
                VISION
              </Link>
            </li>
            <li>
              <Link href="#a02">
                MISSION
              </Link>
            </li>
            <li>
              <Link href="#a03">
                REASON
              </Link>
            </li>
          </ul>
        </div>

        <section id="a01" className={'about'}>
          <div className={'about-inner'}>
            <h3>VISION</h3>
            <div className="about-flex">
              <Image src="/1.webp" alt="VISION" width={600} height={400} />
              <p>In the rapid evolution of technology, I always bear the mission of providing the latest innovative services. My vision is to be a true partner in helping clients achieve their desired success through the power of technology. I strive to stand at the forefront of technology and provide innovative solutions.</p>
            </div>
          </div>
        </section>
        <section id="a02" className={'about'}>
          <div className={'about-inner'}>
            <h3>MISSION</h3>
            <div className="about-flex">
              <p>My mission is to deeply understand the clients&apos; businesses and leverage advanced technology to produce tangible results. I value walking alongside our clients as true partners in the pursuit of business success, rather than being just developers.</p>
              <Image src="/2.webp" alt="MISSION" width={600} height={400} />
            </div>
          </div>
        </section>
        <section id="a03" className={'about'}>
          <div className={'about-inner'}>
            <h3>REASON</h3>
            <div className="about-flex">
              <Image src="/3.webp" alt="REASON" width={600} height={400} />
              <p>The impact of the rapid evolution of technology on modern businesses is immeasurable. I launched this business based on the belief that &quot;technology can make businesses more effective and improved.&quot; I believe in solving the challenges faced by clients and elevating businesses to the next level through technology, thereby providing value to society and achieving success.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
