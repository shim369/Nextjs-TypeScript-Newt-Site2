"use client";
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import Page from './page';
import { validateEmail } from "../components/Contact";

describe('CONTACT Page', () => {
    test('renders Contact Page', () => {
        render(<Page />);

        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
        // await waitFor(() => {
        //     const title = screen.getByText(/CONTACT/i);
        //     expect(title).toBeInTheDocument();
        // });
    });

    test("should be failed on email validation", () => {
        const testEmail = "shim.com";
        expect(validateEmail(testEmail)).not.toBe(true);
    });

    test("should be successed on email validation", () => {
        const testEmail = "shim@gmail.com";
        expect(validateEmail(testEmail)).toBe(true);
    });
});
