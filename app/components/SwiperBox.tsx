"use client";
import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
    `/1.jpg`,
    `/2.jpg`,
    `/3.jpg`,
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
                                alt='sample'
                                className='text-c'
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default SwiperBox;