import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticles } from '@/lib/newt'

export const metadata: Metadata = {
  title: 'Blog'
}

export default async function Page() {
  const articles = await getArticles()
  return ( 
    <section id="blog">
    <div className={'under-inner'}>
      <h2>BLOG</h2>
    </div>
      <div className={'container-inner'}>
      <p className={'under-read'}>当ブログでは、業界の最新トレンド、技術チュートリアル、そして最新情報を定期的に更新しています。<br />何か疑問や質問があれば、<Link href="/contact">お問い合わせ</Link>ページからお気軽にどうぞ。</p>
      
      <ul className={'flex-blog'}>
        {articles.map((article) => {
          return (
            <li key={article._id}>
              <Link href={`articles/${article.slug}`}>
              <img
                src={article.coverImage.src}
                alt={article.title}
                loading="lazy"
                width="300"
                height="200"
              />
              <div className={'date'}><span className={'material-icons'}>schedule</span>
              { new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(article.date))}</div>
              <p>{article.title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
      
    </section>    
  )
}
