import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import { Footer } from './Footer'

describe('Footer', () => {
  test('renders footer text', () => {
    render(<Footer />)
    const footerText = screen.getByText(/NEXT TECH/i);
    expect(footerText).toBeInTheDocument();
  })
})