"use client";
import Image from 'next/image';
import { Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import 'swiper/css/scrollbar';

const images = [
    `/1.webp`,
    `/2.webp`,
    `/3.webp`,
    `/4.webp`,
];

const SwiperBox = () => {
    return (
        <>
            <Swiper
                scrollbar={{hide: true}}
                autoplay
                effect={'fade'}
                pagination={{ type: "bullets" }}
                modules={[Scrollbar, Autoplay, EffectFade]}
                className={'swiper-box'}
                loop={true}
            >
                {images.map((src: string, index: number) => {
                    return (
                        <SwiperSlide key={`${index}`}>
                            <Image
                                src={src}
                                width={1920}
                                height={1280}
                                alt='Next Tech'
                                priority={index === 0}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default SwiperBox;