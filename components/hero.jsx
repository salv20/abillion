"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto pt-5">
        <div className="grid gap-10 lg:gap-5 lg:flex justify-evenly items-center bg-[#03081F] rounded-lg px-5 py-10 lg:px-10 lg:py-16">
          <article className="text-[#D9D9D9] grid gap-4">
            <p>Order raw/unprocessed food, and get it at your convinence.</p>

            <h2 className="capitalize text-[25px] text-white sm:text-[30px] lg:text-[35px] font-bold font-poppins">
              Feast Your Senses,
              <br />
              <span className="text-[#FC8A06]"> Fast and Fresh</span>
            </h2>

            <p className="text-sm">
              Let your food be your medicine, remember health is wealth.
            </p>
          </article>

          <Image
            src="/assets/rice.jpg"
            width={500}
            height={600}
            alt="image"
            className="border-[#FC8A06] border-2 rounded-[200px] rotate-180"
          />
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
