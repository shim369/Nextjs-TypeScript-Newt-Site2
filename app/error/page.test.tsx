import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Page from './page';

describe('ERROR Page', () => {
    test('renders Error Page', () => {
        render(<Page />);

        expect(screen.getByText(/ERROR/i)).toBeInTheDocument();
        expect(screen.getByText(/Sending your inquiry failed./i)).toBeInTheDocument();
        expect(screen.getByText(/Back to Previous Page/i)).toBeInTheDocument();
    });
});
