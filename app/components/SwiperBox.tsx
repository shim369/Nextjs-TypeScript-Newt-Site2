"use client";
import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
                navigation
                pagination={{ type: "bullets" }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
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