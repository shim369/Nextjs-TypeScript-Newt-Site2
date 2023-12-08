import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import Page, { aboutData } from './page';

describe('Page Component', () => {
    // ナビゲーションが正しく動作していることを確認するテスト
    it('handles navigation correctly', () => {
        render(<Page />);
        aboutData.forEach((about) => {
            // ナビゲーションリンクをクリック
            const linkElement = screen.getByText(about.title as string, { selector: 'a' });
            userEvent.click(linkElement);

            // 対応するセクションが表示されていることを確認
            const sectionElement = screen.getByTestId(about.id);
            expect(sectionElement).toBeInTheDocument();

            // セクション内のテキストが一致していることを確認
            expect(screen.getByText(about.text)).toBeInTheDocument();
        });
    });
});
