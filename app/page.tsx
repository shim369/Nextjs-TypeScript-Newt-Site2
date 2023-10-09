import Link from 'next/link'
import './styles/style.scss'
import SwiperBox from './components/SwiperBox'

export default function Home() {
  return (
    <>
      <section id="home" className={'main-visual'}>
          <div className={'main-visual-inner'}>
            <SwiperBox />
            <h1>Increasing Business Velocity <br />through Technology</h1>
          </div>
      </section>

      <section>
          <div className={'contents-box'}>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>ABOUT</h2>
              <p>私は2023年にこの事業を設立し、テクノロジーを活用してビジネスを加速することをミッションとしています。経験とスキルを活かして、あなたのビジネス成功のために全力でサポートします。</p>
              <Link href="/about" className={'link-btn'}>詳しくはこちら</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>SERVICE</h2>
              <p>HTML, CSS, JavaScript, Pythonなどを駆使して、あなたのビジネスに最適なウェブソリューションを提供します。オンラインショップから企業サイトまで、多様なニーズに対応します。</p>
              <Link href="/service" className={'link-btn'}>詳しくはこちら</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>BLOG</h2>
              <p>最新のテクノロジートレンドからプログラミングのチュートリアル、最新情報まで、幅広いトピックを網羅した記事を定期的に公開しています。業界の最新動向を把握するための信頼性の高い情報源です。</p>
              <Link href="/blog" className={'link-btn'}>詳しくはこちら</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>FAQ</h2>
              <p>料金設定から開発後のサポート、使用技術に至るまで、頻繁に寄せられる質問とその回答を一覧でご紹介しています。不明点や疑問があれば、このセクションで速やかに解決できるかもしれません。</p>
              <Link href="/faq" className={'link-btn'}>詳しくはこちら</Link>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
