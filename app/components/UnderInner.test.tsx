import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { UnderInner } from './UnderInner';
import "@testing-library/jest-dom";

describe('UnderInner Component', () => {
    it('renders with the provided title', () => {
      const title = 'Test Title';
      render(<UnderInner title={title} />);
  
      // Assert that the component renders with the correct title
      expect(screen.getByText(title)).toBeInTheDocument();
    });
});
