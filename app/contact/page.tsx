"use client";
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'

export default function Page() {
  const router = useRouter()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
    }
    const data = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    }

    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all fields.')
      return
    }

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT + '',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        },
      )

      if (response.ok) {
        router.push('/thanks')
      } else {
        router.push('/error')
      }
    } catch (err) {
      router.push('/error')
    }
  }
  return (
    <section id="contact">
      <div className={'under-inner'}>
        <h2>CONTACT</h2>
      </div>
      <div className={'container-inner'}>
      <p className={'under-read'}>Please fill out the following items and submit.</p>
      
      <form onSubmit={onSubmit} className={'form'}>
        <dl>
          <dt><label htmlFor="name">Name*</label></dt>
          <dd>
            <input id="name" name="name" type="text" className={'textarea'} required />
          </dd>
          <dt><label htmlFor="email">Email*</label></dt>
          <dd>
            <input id="email" name="email" type="email" className={'textarea'} required />
          </dd>
          <dt><label htmlFor="message">Message*</label></dt>
          <dd>
            <textarea id="message" name="message" className={'textarea'} required />
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
      </div>
    </section>
  )
}
