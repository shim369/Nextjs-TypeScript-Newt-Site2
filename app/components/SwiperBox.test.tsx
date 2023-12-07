import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { SwiperBox } from './SwiperBox';

describe('SwiperBox', () => {
    it('renders SwiperBox with images', async () => {
        render(<SwiperBox />);

        await waitFor(() => {
            const images = screen.queryAllByAltText('NEXT TECH');

            //fadeをしようしているので、前後の画像の枚数=プラス2を足して6で検証
            expect(images.length).toBe(6);

            images.forEach((image) => {
                const srcAttribute = image.getAttribute('src');

                expect(srcAttribute).toContain(".webp");
            });
        });
    });
});