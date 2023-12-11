import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Contact, validateEmail } from './Contact';
import "@testing-library/jest-dom";

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

describe('Test Contact Component', () => {
  test('renders Contact component', () => {
    render(<Contact />);

    expect(screen.getByText(/Name*/i)).toBeInTheDocument();
    expect(screen.getByText(/Email*/i)).toBeInTheDocument();
    expect(screen.getByText(/Message*/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
  test('should fail on email validation', () => {
    const { getByLabelText } = render(<Contact />);

    const emailInput = getByLabelText(/Email/i) as HTMLInputElement;

    // Enter an invalid email
    fireEvent.change(emailInput, { target: { value: 'shim.com' } });
    expect(validateEmail(emailInput.value)).toBe(false);
  });

  test('should succeed on email validation', () => {
    const { getByLabelText } = render(<Contact />);

    const emailInput = getByLabelText(/Email/i) as HTMLInputElement;

    // Enter a valid email
    fireEvent.change(emailInput, { target: { value: 'shim@gmail.com' } });
    expect(validateEmail(emailInput.value)).toBe(true);
  });
});
