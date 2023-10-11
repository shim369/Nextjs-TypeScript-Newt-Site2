import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ'
}

export default function Page() {
  return (
    <section id="faq">
      <div className={'under-inner'}>
        <h2>FAQ</h2>
      </div>
      <div className={'container-inner'}>
      <dl>
        <dt>Q1: サービスの料金はどのように決まりますか？</dt>
        <dd>A1: 料金はプロジェクトの規模、要件、使用する技術によって異なります。基本プランは¥300,000からとなっていますが、具体的な見積もりはプロジェクトの詳細をお知らせいただいた上でお出しします。</dd>

        <dt>Q2: 開発後のサポートはありますか？</dt>
        <dd>A2: はい、開発後もメンテナンスプランをご用意しています。基本的なメンテナンス料金は¥20,000/月となっています。</dd>

        <dt>Q3: 使用する技術は何ですか？</dt>
        <dd>A3: 我々は多様な技術を用いますが、主にHTML, CSS/SASS, Astro, JavaScript, Next.js, Nuxt.js, Python, Djangoを使用しています。CMSにはMicroCMS, Newt, WordPressを使用しています。</dd>

        <dt>Q4: デザインツールは何を使用していますか？</dt>
        <dd>A4: デザインにはFigmaとAdobeのツールセット（Photoshop, Illustrator）を使用しています。</dd>

        <dt>Q5: 納期はどれくらいですか？</dt>
        <dd>A5: 納期はプロジェクトの規模と要件によりますが、基本プランであれば通常4〜6週間を見ています。</dd>

        <dt>Q6: 途中で要件が変更になった場合はどうなりますか？</dt>
        <dd>A6: 要件が途中で変更になった場合、追加料金が発生する可能性があります。変更内容とその影響をしっかりとご説明した上で、新たな見積もりをお出しします。</dd>

        <dt>Q7: コンテンツ作成も行っていますか？</dt>
        <dd>A7: はい、コンテンツ作成サービスも提供しています。基本料金は¥30,000からとなっています。</dd>
      </dl>
      </div>
    </section>
  )
}
