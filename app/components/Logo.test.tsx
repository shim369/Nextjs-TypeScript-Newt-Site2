import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import { Logo } from './Logo'

describe('Logo', () => {
  test('renders Logo text', () => {
    render(<Logo />)
    const logoText = screen.getByText(/NEXT TECH/i);
    expect(logoText).toBeInTheDocument();
  })
})