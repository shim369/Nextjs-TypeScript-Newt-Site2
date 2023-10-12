import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About'
}

export default function Page() {
  return (
    <section id="blog">
    <div className={'under-inner'}>
      <h2>ABOUT</h2>
    </div>
    <div className={'container-inner'}>
      <div className={'pageNav'}>
        <ul className={'pageNav__list'}>
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
          <p>テクノロジーが日々進化する中で、常に最前線で最高のサービスを提供することを目指しています。私のビジョンは、クライアントが目指す成功をテクノロジーで実現するパートナーであることです。</p>
        </div>
      </section>
      <section id="a02" className={'about'}>
        <div className={'about-inner'}>
        <h3>MISSION</h3>
        <p>私のミッションは、クライアントのビジネスを理解し、それを高度なテクノロジーで具現化することです。単なる開発者ではなく、ビジネスの成功を共に目指すパートナーでありたいと考えています。</p>
        </div>
      </section>
      <section id="a03" className={'about'}>
        <div className={'about-inner'}>
          <h3>REASON</h3>
          <p>テクノロジーの進化がビジネスに多大な影響を与える現代において、「テクノロジーでビジネスをより良く、より効率的にする」という信念のもと、この事業を始めました。クライアントが抱える問題を解決し、ビジネスを次のレベルに引き上げることで、社会に貢献できると信じています。</p>
        </div>
      </section>
    </div>
    </section>
  )
}
