import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import { LinkList } from './LinkList';

describe('LinkList', () => {
    test('renders LinkList component', () => {
        render(<LinkList />);

        expect(screen.getByText(/TOP/i)).toBeInTheDocument();
        expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
        expect(screen.getByText(/SERVICE/i)).toBeInTheDocument();
        expect(screen.getByText(/BLOG/i)).toBeInTheDocument();
        expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
    });
});
