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
      
      <ul className={'services'}>
        <li>
          <h3>1. ウェブサイト開発</h3>
          <table className={'tbl'}>
            <tr>
              <th>使用技術</th>
              <td>HTML, CSS/SASS, JavaScript, Astro</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>¥300,000 ~</td>
            </tr>
          </table>
        </li>
        <li>
          <h3>2. Webアプリケーション開発</h3>
          <table className={'tbl'}>
            <tr>
              <th>使用技術</th>
              <td>Next.js, Nuxt.js, Python, Django</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>¥500,000 ~</td>
            </tr>
          </table>
        </li>
        <li>
          <h3>3. CMS構築</h3>
          <table className={'tbl'}>
            <tr>
              <th>使用技術</th>
              <td>WordPress, MicroCMS, Newt</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>¥200,000 ~</td>
            </tr>
          </table>
        </li>
        <li>
          <h3>4. デザイン・UI/UX</h3>
          <table className={'tbl'}>
            <tr>
              <th>使用技術</th>
              <td>Figma, Adobe (Photoshop, Illustrator)</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>¥150,000 ~</td>
            </tr>
          </table>
        </li>
        <li>
          <h3>追加オプション</h3>
          <table className={'tbl'}>
            <tr>
              <th>
              メンテナンス
              </th>
              <td>
                ¥20,000 ~ /Month
              </td>
            </tr>
            <tr>
              <th>
              SEO対策
              </th>
              <td>
              ¥50,000 ~
              </td>
            </tr>
            <tr>
              <th>
              コンテンツ作成
              </th>
              <td>
              ¥30,000 ~
              </td>
            </tr>
          </table>
        </li>
      </ul>
      <p>以上の価格はすべて参考価格であり、プロジェクトの規模や要件によって変動する場合があります。<br />詳細は<Link href="/contact">お問い合わせ</Link>ください。</p>
      </div>
    </section>
  )
}