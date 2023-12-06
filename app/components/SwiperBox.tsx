"use client";
import Image from 'next/image';
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from '../styles/page.module.scss'


export const SwiperBox = () => {
    const images = [
        "/1.webp",
        "/2.webp",
        "/3.webp",
        "/4.webp"
    ];

    return (
        <>
            <Swiper
                autoplay
                effect={'fade'}
                modules={[Autoplay, EffectFade]}
                className={styles.swiperBox}
                loop={true}
            >
                {images.map((src: string, index: number) => {
                    return (
                        <SwiperSlide key={`${index}`}>
                            <Image
                                src={src}
                                width={1920}
                                height={1280}
                                alt='NEXT TECH'
                                priority={index === 0}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};