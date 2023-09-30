import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service'
}

export default function Page() {
  return (
    <section id="service">
    <div className={'container'}>
      <h2>SERVICE</h2>
      
      <h3>サービス一覧</h3>
      <ul>
        <li>
          <strong>1. ウェブサイト開発</strong><br />
          使用技術: HTML, CSS/SASS, JavaScript, Astro<br />
          価格: 基本プラン ¥300,000 ~
        </li>
        <li>
          <strong>2. Webアプリケーション開発</strong><br />
          使用技術: Next.js, Nuxt.js, Python, Django<br />
          価格: 基本プラン ¥500,000 ~
        </li>
        <li>
          <strong>3. CMS構築</strong><br />
          使用技術: WordPress, MicroCMS, Newt<br />
          価格: 基本プラン ¥200,000 ~
        </li>
        <li>
          <strong>4. デザイン・UI/UX</strong><br />
          使用ツール: Figma, Adobe (Photoshop, Illustrator)<br />
          価格: 基本プラン ¥150,000 ~
        </li>
      </ul>
      
      <h3>プラン詳細</h3>
      <ul>
        <li><strong>基本プラン:</strong> ウェブサイトまたはWebアプリの基本的な機能とデザイン 価格: ¥300,000 ~</li>
        <li><strong>スタンダードプラン:</strong> 基本プランに加え、SEO対策、パフォーマンス最適化 価格: ¥500,000 ~</li>
        <li><strong>プレミアムプラン:</strong> スタンダードプランに加え、CMS構築、E-commerce機能、高度なUI/UXデザイン 価格: ¥800,000 ~</li>
        <li><strong>カスタムプラン:</strong> クライアントの特定の要件に合わせてカスタマイズ 価格: 要相談</li>
      </ul>
      
      <h3>追加オプション</h3>
      <ul>
        <li>メンテナンス: ¥20,000/月</li>
        <li>SEO対策: ¥50,000 ~</li>
        <li>コンテンツ作成: ¥30,000 ~</li>
      </ul>
      
      <p>以上の価格はすべて参考価格であり、プロジェクトの規模や要件によって変動する場合があります。詳細は<Link href="/contact">お問い合わせ</Link>ください。</p>
      </div>
    </section>
  )
}