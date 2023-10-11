import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact'
}

export default function Page() {
  return (
    <section id="contact">
      <div className={'under-inner'}>
        <h2>CONTACT</h2>
      </div>
      <div className={'container-inner'}>
      <form action="/submit" method="post">
        <div className={'form-group'}>
          <label htmlFor="name">名前（必須）</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className={'form-group'}>
          <label htmlFor="email">メールアドレス（必須）</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={'form-group'}>
          <label htmlFor="subject">件名</label>
          <input type="text" id="subject" name="subject" />
        </div>

        <div className={'form-group'}>
          <label htmlFor="message">メッセージ</label>
          <textarea id="message" name="message"></textarea>
        </div>

        <button type="submit">送信</button>
      </form>
      </div>
    </section>
  )
}
