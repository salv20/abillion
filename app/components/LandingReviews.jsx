"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const reviews = [
  {
    image: "/assets/user.png",
    comment:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly and the staff was friendly.",
    country: "Nigeria",
    name: "Mr. Bayo",
  },
  {
    image: "/assets/user.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, non a veniam aliquam est temporibus.",
    country: "Nigeria",
    name: "Mrs. Chioma",
  },
  {
    image: "/assets/user.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, non a veniam aliquam est temporibus.",
    country: "Nigeria",
    name: "Miss Chidimma",
  },
];

const LandingReviews = () => {
  return (
    <section className="bg-[#D9D9D9] py-8 my-12">
      <div className="container mx-auto">
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
            1200: { slidesPerView: 3, spaceBetween: 20 },
            750: { slidesPerView: 2, spaceBetween: 20 },
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          navigation={true}
          className="w-full"
        >
          {Array.isArray(reviews) &&
            reviews.map((review, index) => (
              <SwiperSlide
                key={index}
                className="bg-white rounded-lg py-6 px-4 shadow-lg border-2"
              >
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.image}
                      alt="user"
                      width={35}
                      height={35}
                      className="rounded-full border-[#FC8A06] border-[1px] p-0.5"
                    />
                    <div className="text-center">
                      <h1 className="text-[#FC8A06] text-lg font-bold">
                        {review.name}
                      </h1>
                      <p className="capitalize">{review.country}</p>
                    </div>
                  </div>
                  <div className="font-serif text-gray-700">
                    {review.comment}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LandingReviews;
