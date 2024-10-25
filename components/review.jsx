"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Image from "next/image";

const reveiews = [
  {
    image: "/assets/user.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, non a veniam aliquam est temporibus.",
    country: "nigeria",
    name: "mr bayo",
  },

  {
    image: "/assets/user.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, non a veniam aliquam est temporibus.",
    country: "nigeria",
    name: "mr bayo",
  },

  {
    image: "/assets/user.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, non a veniam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, non a veniam  aliquam est temporibus.",
    country: "nigeria",
    name: "mr bayo",
  },
];

const Review = () => {
  return (
    <section className="mt-14 bg-[#D9D9D9] p-8">
      <div className="container mx-auto ">
        <div className="grid gap-10 ">
          <div className="text-center space-y-2">
            <h1 className="font-serif text-lg lg:text-[30px]">
              What Say Our Clients
            </h1>
            <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] font-bold font-poppins">
              CUSTOMER REVIEWS
            </h1>
          </div>

          <Swiper
            breakpoints={{
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            // autoplay={{
            //   delay: 6000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            navigation={true}
            modules={[
              EffectFade,
              Autoplay,
              Pagination,
              Navigation,
              Mousewheel,
              Keyboard,
            ]}
            className="w-full"
          >
            {reveiews &&
              reveiews.map((review, index) => (
                <SwiperSlide key={index} className="bg-white rounded-lg p-4">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={review.image}
                        alt="user"
                        width={35}
                        height={35}
                        className="rounded-[50%] border-[#FC8A06]  border-[1px] p-0.5"
                      />
                      <div className="capitalize font-bold text-[#FC8A06] text-center">
                        <h1 className="text-[#FC8A06] text-lg">
                          {review.name}
                        </h1>
                        <p>{review.country}</p>
                      </div>
                    </div>
                    <div className="font-serif">{review.comment}</div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
