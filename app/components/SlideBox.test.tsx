import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { SlideBox } from './SlideBox';
import "@testing-library/jest-dom";

describe('SlideBox', () => {
    it('renders SlideBox with images', async () => {
        render(<SlideBox />);

        // Slideの初期化と画像の読み込みが完了するまで待機
        await waitFor(async () => {
            const images = screen.queryAllByAltText('NEXT TECH');

            images.forEach((image) => {
                const srcAttribute = image.getAttribute('src');

                expect(srcAttribute).toContain(".webp");
            });
        });
    });
});
