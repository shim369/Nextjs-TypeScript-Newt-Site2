import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog'
}

export default function Page() {
  return ( 
    <section id="blog">
    <div className={'under-inner'}>
      <h2>BLOG</h2>
    </div>
      <div className={'container-inner'}>
      <p className={'under-read'}>当ブログでは、業界の最新トレンド、技術チュートリアル、そして最新情報を定期的に更新しています。<br />何か疑問や質問があれば、<Link href="/contact">お問い合わせ</Link>ページからお気軽にどうぞ。</p>
      
      <div className="category">
        <h3>News</h3>
        <ul>
          <li><Link href="/blog/new-service-launch">新サービスローンチのお知らせ</Link></li>
        </ul>
      </div>

      <div className="category">
        <h3>Trend & Tech</h3>
        <ul>
          <li><Link href="/blog/2023-web-development-trends">2023年のWeb開発トレンド: 注目すべき5つのポイント</Link></li>
          <li><Link href="/blog/nextjs-vs-nuxtjs">Next.js vs Nuxt.js: どちらを選ぶべきか</Link></li>
        </ul>
      </div>
      
      <div className="category">
        <h3>Tutorials & guides</h3>
        <ul>
          <li><Link href="/blog/ssr-and-ssg-in-nextjs">Next.jsでのSSRとSSGの基本的な使い方</Link></li>
          <li><Link href="/blog/efficient-ui-design-in-figma">Figmaで効率的なUIデザインをするためのテクニック</Link></li>
        </ul>
      </div>
    </div>
      
    </section>    
  )
}
