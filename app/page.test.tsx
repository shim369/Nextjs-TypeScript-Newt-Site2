import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from './Page';
import "@testing-library/react"

const push = jest.fn();
jest.mock('next/navigation', () => {
  const router = jest.requireActual('next/navigation');
  return {
    ...router,
    useRouter: () => {
      return {
        push,
      };
    },
  };
});

global.scrollTo = jest.fn();

describe('Home', () => {
  test('renders home component', async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByAltText(/NEXT TECH/i)).toBeInTheDocument();
      expect(screen.getByText(/Web Development/i)).toBeInTheDocument();
      expect(screen.getByText(/Welcome to NEXT TECH.Your gateway to cutting-edge tech solutions./i)).toBeInTheDocument();
      expect(screen.getByText(/Your gateway to cutting-edge tech solutions/i)).toBeInTheDocument();
      expect(screen.getByText(/Increasing Business Velocity through Technology/i)).toBeInTheDocument();
      expect(screen.getByText(/I established this business in 2023 with a mission to leverage technology and accelerate businesses. I am committed to supporting your business success with my experience and skills./i)).toBeInTheDocument();
      expect(screen.getByText(/I provide tailor-made web solutions for your business, utilizing HTML, CSS, JavaScript, Python, and more. From online shops to corporate websites, I cater to a wide range of needs./i)).toBeInTheDocument();
      expect(screen.getByText(/I regularly publish articles covering a wide range of topics, from the latest technology trends to programming tutorials and up-to-date information. It&apos;s a reliable source to stay informed about the latest industry trends./i)).toBeInTheDocument();
      expect(screen.getByText(/From pricing and post-development support to the technologies I use, I have compiled frequently asked questions and their answers in one place. If you have any uncertainties or questions, this section might provide quick solutions./i)).toBeInTheDocument();
      expect(screen.getByText(/Would you like to try the latest technology?/i)).toBeInTheDocument();
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
      expect(screen.getByText(/Name/i)).toBeInTheDocument();
      expect(screen.getByText(/Email/i)).toBeInTheDocument();
      expect(screen.getByText(/Message/i)).toBeInTheDocument();
      expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    });
  });
});
