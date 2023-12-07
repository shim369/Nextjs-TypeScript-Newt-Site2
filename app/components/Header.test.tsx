import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

test('Header component renders correctly', () => {
  render(<Header />);

  // Headerが正しく表示されているかテスト
  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('Navigation toggle button works correctly', () => {
  render(<Header />);

  const navToggleButton = screen.getByTestId('jsNavToggle');
  fireEvent.click(navToggleButton);

  // ナビゲーションが開かれているかテスト
  expect(document.body.classList.contains('open')).toBe(true);

  fireEvent.click(navToggleButton);

  // ナビゲーションが閉じられているかテスト
  expect(document.body.classList.contains('open')).toBe(false);
});