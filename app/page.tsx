// import Image from 'next/image'
import Link from 'next/link'
import './styles/style.scss'

export default function Home() {
  return (
    <>
      <section id="home" className={'main-visual'}>
          <div className={'main-visual-inner'}>
            <h1>テクノロジーでビジネスを加速</h1>
          </div>
      </section>
      <main className={'main'}>
        <section id="about">
          <div className={'container'}>
            <h2>アバウト</h2>
            <p>私は2023年にこの事業を設立し、テクノロジーを活用してビジネスを加速することをミッションとしています。経験とスキルを活かして、あなたのビジネス成功のために全力でサポートします。</p>
            <Link href="/about">詳しくはこちら</Link>
          </div>
        </section>

        <section id="services">
          <div className={'container'}>
            <h2>サービス</h2>
            <p>HTML, CSS, JavaScript, Pythonなどを駆使して、あなたのビジネスに最適なウェブソリューションを提供します。オンラインショップから企業サイトまで、多様なニーズに対応します。</p>
            <Link href="/service">詳しくはこちら</Link>
          </div>
        </section>

        <section id="blog">
          <div className={'container'}>
            <h2>ブログ</h2>
            <p>最新のテクノロジートレンドからプログラミングのチュートリアル、最新情報まで、幅広いトピックを網羅した記事を定期的に公開しています。業界の最新動向を把握するための信頼性の高い情報源です。</p>
            <Link href="/blog">詳しくはこちら</Link>
          </div>
        </section>

        <section id="faq">
          <div className={'container'}>
            <h2>よくある質問</h2>
            <p>料金設定から開発後のサポート、使用技術に至るまで、頻繁に寄せられる質問とその回答を一覧でご紹介しています。不明点や疑問があれば、このセクションで速やかに解決できるかもしれません。</p>
            <Link href="/faq">詳しくはこちら</Link>
          </div>
        </section>

        <section id="contact">
          <div className={'container'}>
            <h2>お問い合わせ</h2>
            <p>ご質問やお見積りのご依頼は、電話またはメールでお気軽にどうぞ。専門のスキルを活かして、丁寧に対応させていただきます。ビジネスの成功に向けて、最適なソリューションを一緒に考えましょう。</p>
            <Link href="/contact">詳しくはこちら</Link>
          </div>
        </section>
      </main>
    </>
  )
}
