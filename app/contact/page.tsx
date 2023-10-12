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
      <p className={'under-read'}>下記項目をご記入の上送信ください。</p>
      
      <form action="/submit" method="post" className={'form'}>
        <dl>
          <dt>Name</dt>
          <dd>
            <input type="text" className={'textarea'} name="name" />
          </dd>
          <dt>Email</dt>
          <dd>
            <input type="text" className={'textarea'} name="emai" />
          </dd>
          <dt>Message</dt>
          <dd>
            <textarea name="message" className={'textarea'} />
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
      </div>
    </section>
  )
}
