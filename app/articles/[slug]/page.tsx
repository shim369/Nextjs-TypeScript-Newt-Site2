import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'


type Props = {
  params: {
    slug: string
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (!article) return

  return (
      <section>
        <div className={'under-inner'}>
          <h2>BLOG</h2>
        </div>
        <div className={'blog-detail'}>
        <hr />
        <div className={'blog-content'}>
          <h1>{article.title}</h1>
          <div className={'date'}>
            {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(article.date))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
        <hr />
        </div>
      </section>
  )
}