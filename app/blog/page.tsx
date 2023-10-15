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
        <p className={'under-read'}>On our blog, I regularly update the latest industry trends, technical tutorials, and up-to-date information. <br />If you have any questions or inquiries, please feel free to contact us through our contact page.</p>
        
        <ul className={'flex-blog'}>
          {articles.map((article) => {
            return (
              <li key={article._id}>
                <Link href={`articles/${article.slug}`}>
                <div className={'img-wrapper'}>
                <img
                  src={article.coverImage.src}
                  alt={article.title}
                  width="300"
                  height="200"
                />
                <div className={'date'}>
                  { new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(article.date))}
                </div>
                </div>
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
