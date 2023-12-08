import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LinkButton } from './LinkButton';

describe('LinkButton component', () => {
  test('renders a link button with the correct href', () => {
    const href = '/test';
    render(<LinkButton href={href} />);

    const linkButton = screen.getByRole('link', { name: /show detail/i });

    // リンクが正しい href 属性を持っていることを確認
    expect(linkButton).toHaveAttribute('href', href);
  });
});