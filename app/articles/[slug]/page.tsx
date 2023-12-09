import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'
import type { Metadata } from 'next'
import styles from '../../styles/page.module.scss'
import { UnderInner } from '@/app/components/UnderInner'

type Props = {
  params: {
    slug: string
  }
}

export async function generatemetadata({ params }: Props): Promise<Metadata> {
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
      <UnderInner title={"BLOG"} />
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
