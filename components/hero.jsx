"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid gap-10 lg:gap-5 lg:flex justify-evenly items-center bg-[#03081F] rounded-lg px-5 py-10 lg:px-10 lg:py-16">
          <article className="text-[#D9D9D9] grid gap-4">
            <p>Order raw/unprocessed food, and get it at your convinence.</p>

            <h2 className="capitalize text-[25px] text-white sm:text-[30px] lg:text-[35px] font-bold font-poppins">
              Feast Your Senses,
              <br />
              <span className="text-[#FC8A06]"> Fast and Fresh</span>
            </h2>

            <div className="grid gap-2">
              <p className="text-sm">Enter a product to see what we deliver</p>

              <form className="grid gap-3 lg:flex">
                <input
                  type="search"
                  required
                  placeholder="Rice"
                  className="placeholder:text-black indent-4 text-black rounded-[40px] outline-none lg:w-[300px] h-12"
                />
                <button
                  type="button"
                  aria-label="search_btn"
                  className="btn_orange h-12 w-[80%] mx-auto lg:w-fit relative lg:right-14"
                  onClick={(e) => e.preventDefault()}
                >
                  search
                </button>
              </form>
            </div>
          </article>

          <Image
            src="/assets/rice.jfif"
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
