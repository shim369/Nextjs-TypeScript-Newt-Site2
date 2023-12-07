"use client";
import Image from 'next/image';
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../styles/page.module.scss'
SwiperCore.use([Autoplay, EffectFade])

export const SwiperBox = () => {
    const images = [
        "/1.webp",
        "/2.webp",
        "/3.webp",
        "/4.webp"
    ];

    return (
        <Swiper
            autoplay={{ delay: 3000 }}
            effect={'fade'}
            className={styles.swiperBox}
            loop={true}
        >
            {images.map((src: string, index: number) => {
                return (
                    <SwiperSlide key={index}>
                        <Image
                            src={src}
                            width={1920}
                            height={1280}
                            alt='NEXT TECH'
                            priority={index === 1 || index === 2}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};