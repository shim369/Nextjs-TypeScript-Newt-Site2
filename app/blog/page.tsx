import Link from 'next/link'
import { getArticles } from '@/lib/newt'
import type { Metadata } from 'next'
import styles from '../styles/page.module.scss'

export const metadata: Metadata = {
  title: 'BLOG'
}

export default async function Page() {
  const articles = await getArticles()
  return ( 
    <section id="blog">
      <div className={styles.underInner}>
        <h2>BLOG</h2>
      </div>
      <div className={styles.containerInner}>
        <p className={styles.underRead}>On our blog, I regularly update the latest industry trends, technical tutorials, and up-to-date information. <br />If you have any questions or inquiries, please feel free to contact us through our contact page.</p>
        
        <ul className={styles.flexBlog}>
          {articles.map((article) => {
            return (
              <li key={article._id}>
                <Link href={`articles/${article.slug}`}>
                <div className={styles.imgWrapper}>
                <img
                  src={article.coverImage.src}
                  alt={article.title}
                  width="300"
                  height="200"
                />
                <div className={styles.date}>
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
