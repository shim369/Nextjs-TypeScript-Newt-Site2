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
              <p>I established this business in 2023 with a mission to leverage technology and accelerate businesses. I am committed to supporting your business success with my experience and skills.</p>
              <Link href="/about" className={'link-btn'}>Learn more here</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>SERVICE</h2>
              <p>We provide tailor-made web solutions for your business, utilizing HTML, CSS, JavaScript, Python, and more. From online shops to corporate websites, we cater to a wide range of needs.</p>
              <Link href="/service" className={'link-btn'}>Learn more here</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>BLOG</h2>
              <p>We regularly publish articles covering a wide range of topics, from the latest technology trends to programming tutorials and up-to-date information. It's a reliable source to stay informed about the latest industry trends.</p>
              <Link href="/blog" className={'link-btn'}>Learn more here</Link>
              </div>
            </div>
            <div className={'contets-item'}>
              <div className={'contets-item-inner'}>
              <h2>FAQ</h2>
              <p>From pricing and post-development support to the technologies we use, we have compiled frequently asked questions and their answers in one place. If you have any uncertainties or questions, this section might provide quick solutions.</p>
              <Link href="/faq" className={'link-btn'}>Learn more here</Link>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
