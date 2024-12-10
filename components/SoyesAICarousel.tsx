"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imgList = [
  "/SoyesAI/12422208_1.png",
  "/SoyesAI/12422208_2.png",
  "/SoyesAI/12422208_3.png",
  "/SoyesAI/12422208_4.png",
  "/SoyesAI/12422208_5.png",
  "/SoyesAI/12422208_6.png",
];

const SoyesAICarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={2}
      slidesPerGroup={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {imgList.map((url, index) => {
        return (
          <SwiperSlide key={url}>
            <Image
              src={url}
              alt={"SoyesAI_Carousel_Img_" + index}
              width={1290}
              height={2796}
              style={{
                maxWidth: "100%",
                height: "auto",
                userSelect: "none",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SoyesAICarousel;
