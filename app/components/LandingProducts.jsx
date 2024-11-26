"use client";

import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";

const products = [
  {
    src: "/assets/Cabbage-Fresh.jpg",
    title: "Fresh Cabbage (2kg)",
    price: "5,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
  {
    src: "/assets/coconut.jpg",
    title: "large sized coconuts (3pcs)",
    price: "6,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
  {
    src: "/assets/turkey-carton.jpg",
    title: "turkey-carton (10kg)",
    price: "70,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/Chicken-Wings.jpg",
    title: "Chicken Wings (1kg)",
    price: "8,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/peri.jpg",
    title: "dry periwinkles (1painter)",
    price: "10,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/Dry Onion basket.jpg",
    title: "Dry Onion (basket 10kg)",
    price: "40,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/broiler.jpg",
    title: "chicken (broiler)",
    price: "10,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/chicken gizz.jpg",
    title: "chicken gizzard",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/snail.jpg",
    title: "fresh snail (20 pcs)",
    price: "50,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/onga.jpg",
    title: "songa spice",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/fish-spice.jpg",
    title: "fish spice ",
    price: "750",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/crayfish.jpg",
    title: "crayfish (10kg bag)",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/live-goat.jpg",
    title: "full goat (slaughtered)",
    price: "60,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/titus-fish.jpg",
    title: "frozen titus fish (5pcs)",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/cat-fish.jpg",
    title: "roasted cat-fish",
    price: "2,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/melon.jpg",
    title: "equsi/melon (1 derica)",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/palm-fruit.jpg",
    title: "palm kernel fruit",
    price: "2,500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/cow-kidney.jpg",
    title: "cow-kidney",
    price: "3,500",
    description:
      "Lorem  ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
];

const LandingProducts = () => {
  return (
    <section className="my-12 products_container">
      <div className="container mx-auto">
        <div className="grid gap-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif lg:text-lg">Fresh From abillion</h3>
            <h1 className="text-[25px] uppercase sm:text-[30px] lg:text-[35px] font-bold font-poppins">
              our Products
            </h1>
          </div>

          <div className="bg-black text-white font-bold grid grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4 xl:grid-cols-6 gap-y-4 py-4 px-4 sm:px-8 rounded-[50px] justify-items-center">
            <button type="button" className="active">
              all
            </button>
            <button type="button">vegetables</button>
            <button type="button">poultry</button>
            <button type="button">meat & sea foods</button>
            <button type="button"> seasonings & spices</button>
            <button type="button">local foods</button>
          </div>

          {/*  */}

          <article className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            {products &&
              products.map((product, index) => (
                <div
                  className="text-center pb-2 md:pb-4 h-[250px] sm:h-[300px] items-center  border-[#FC8A06] border-2 grid gap-2 rounded-[20px] "
                  key={index}
                >
                  <Image
                    src={product.src}
                    alt="product"
                    width={350}
                    height={350}
                    className="rounded-[20px] shadow-lg rounded-b-none h-[150px] sm:h-[210px] border-b-[#FC8A06] border-b-2"
                  />

                  <h1 className="capitalize font-semibold px-1">
                    {product.title}
                  </h1>
                  <p className="text-[#FC8A06] font-bold text-lg h-fit flex items-center justify-center ">
                    <span className=" text-2xl">
                      <TbCurrencyNaira />
                    </span>
                    {product.price}
                  </p>
                </div>
              ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default LandingProducts;
