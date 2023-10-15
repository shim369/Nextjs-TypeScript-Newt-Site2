"use client";
import Link from 'next/link'

export default function Page() {
  return (
    <section id="contact">
      <div className={'under-inner'}>
        <h2>CONTACT</h2>
      </div>
      <div className={'container-inner'}>
      <p className={'under-read'}>お問い合わせの送信が失敗しました。</p>
        <Link href="/contact">Back to Previous Page</Link>
      </div>
    </section>
  )
}
