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
      expect(screen.getByText(/Would you like to try the latest technology?/i)).toBeInTheDocument();
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });
  });
});
