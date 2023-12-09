import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Page from './page';

describe('THANKS Page', () => {
    test('renders Thanks Page', () => {
        render(<Page />);

        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
        expect(screen.getByText(/Thank you for your inquiry./i)).toBeInTheDocument();
        expect(screen.getByText(/Back to Previous Page/i)).toBeInTheDocument();
    });
});
