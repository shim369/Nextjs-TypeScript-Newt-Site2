import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'
import type { Metadata } from 'next'
import styles from '../../styles/css/page.module.css'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'BLOG',
    };
  }

  return {
    title: article.title,
  };
}

export default async function Article({ params }: Props) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  if (!article) return null;

  return (
    <section>
      <div className={styles.underInner}>
        <h2>BLOG</h2>
      </div>
      <div className={styles.blogDetail}>
        <hr />
        <div className={styles.blogContent}>
          <h1>{article.title}</h1>
          <div className={styles.date}>
            {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(article.date))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
        <hr />
      </div>
    </section>
  );
}
