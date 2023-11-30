"use client";
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import styles from '../styles/css/page.module.css'

export default function Contact() {
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
      <div className={styles.containerInner}>
      
      <form onSubmit={onSubmit} className={styles.form}>
        <dl>
          <dt><label htmlFor="name">Name*</label></dt>
          <dd>
            <input id="name" name="name" type="text" className={styles.textarea} autoComplete="name" required />
          </dd>
          <dt><label htmlFor="email">Email*</label></dt>
          <dd>
            <input id="email" name="email" type="email" className={styles.textarea} autoComplete="email" required />
          </dd>
          <dt><label htmlFor="message">Message*</label></dt>
          <dd>
            <textarea id="message" name="message" className={styles.textarea} required />
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
      </div>
  )
}
