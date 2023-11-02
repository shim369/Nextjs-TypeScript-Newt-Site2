"use client";
import Image from 'next/image';
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

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
                autoplay
                effect={'fade'}
                modules={[Autoplay, EffectFade]}
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

export default SwiperBox;