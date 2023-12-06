import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import "@testing-library/jest-dom"
import { Faq } from './Faq'

describe('FAQ', () => {
  test('renders faq1', () => {
    render(<Faq />)
    const q1 = screen.getByText("How is the service fee determined?");
    const a1 = screen.getByText("The fee varies based on the project's scope, requirements, and the technologies used. The base plan starts at ¥300,000, but a specific estimate will be provided after I have the details of your project.");
    expect(q1).toBeInTheDocument();
    expect(a1).toBeInTheDocument();
  })

  test('renders faq2', () => {
    render(<Faq />)
    const q2 = screen.getByText("Do you offer post-development support?");
    const a2 = screen.getByText("Yes, I provide post-development support with maintenance plans. The basic maintenance fee is ¥20,000 per month.");
    expect(q2).toBeInTheDocument();
    expect(a2).toBeInTheDocument();
  })

  test('renders faq3', () => {
    render(<Faq />)
    const q3 = screen.getByText("What technologies do you use?");
    const a3 = screen.getByText("I utilize a variety of technologies, primarily including HTML, CSS/SASS, Astro, JavaScript, Next.js, Nuxt.js, Python, and Django. For content management systems (CMS), I use MicroCMS, Newt, and WordPress.");
    expect(q3).toBeInTheDocument();
    expect(a3).toBeInTheDocument();
  })
})