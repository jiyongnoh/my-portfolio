"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const kikleImgList: string[] = [
  "/KikleEdu/main.png",
  "/KikleEdu/contents.png",
  "/KikleEdu/class.png",
  "/KikleEdu/classDetail.png",
];

const soyesaiImgList: string[] = [
  "/SoyesAI/5761024_1.png",
  "/SoyesAI/5761024_2.png",
  "/SoyesAI/5761024_3.png",
  "/SoyesAI/5761024_4.png",
  "/SoyesAI/5761024_5.png",
  "/SoyesAI/5761024_6.png",
];

type CarouselType = {
  type: string;
  isOpen: boolean;
  mobileFlag: boolean;
};

const Carousel = ({ type, isOpen, mobileFlag }: CarouselType) => {
  return (
    <div
      style={{
        visibility: isOpen ? "hidden" : "visible",
        opacity: isOpen ? 0 : 1,
        transition: "0.5s",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        slidesPerGroup={mobileFlag ? 1 : 2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {type === "kikle"
          ? kikleImgList.map((url: string, index: number) => {
              return (
                <SwiperSlide key={url}>
                  <Image
                    src={url}
                    alt={"Kikle_Carousel_Img_" + index}
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
            })
          : soyesaiImgList.map((url: string, index: number) => {
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
    </div>
  );
};

export default Carousel;
