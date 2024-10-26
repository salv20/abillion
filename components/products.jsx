"use client";

import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef } from "react";

const products = [
  {
    src: "/assets/beans_1.jpg",
    title: "beans bag-10kg",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },

  {
    src: "/assets/beans_2.jpg",
    title: "beans bag-10kg",
    price: "50,000",
    description:
      "Lorem  ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
  // {
  //   src: "/assets/groundnutoil.jpg",
  //   title: "groundnut oil-100ml",
  //   price: "15,000",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  // },
  {
    src: "/assets/palmoil_2.jpg",
    title: "palmoil bag-10kg",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
  {
    src: "/assets/palm_oil.jpg",
    title: "palmoil bag-10kg",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
  {
    src: "/assets/sweet_potato.jpg",
    title: "sweet potato bag-10kg",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
  {
    src: "/assets/yam.jpg",
    title: "yam",
    price: "20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!",
  },
];

const Products = () => {
  const [toggleSearch, settoggleSearch] = useState(false);
  const focus = useRef();

  return (
    <section className="my-12">
      <div className="container mx-auto">
        <div className="grid gap-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif lg:text-lg">Fresh From abillion</h3>
            <h1 className="text-[25px] uppercase sm:text-[30px] lg:text-[35px] font-bold font-poppins">
              our Products
            </h1>
          </div>

          <div className="grid grid-cols-2 w-full p-4 sm:p-0 rounded-[200px] lg:w-[60%] mx-auto sm:flex justify-between shadow-lg border-2 bg-black">
            <button type="button" className="btn_orange h-12">
              all
            </button>
            <button type="button" className="btn_black">
              processed
            </button>
            <button type="button" className="btn_black">
              unprocessed
            </button>

            <button
              type="button"
              className="btn_orange h-12 "
              onClick={() => (
                settoggleSearch(!toggleSearch),
                setTimeout(() => {
                  focus.current?.focus();
                }, 100)
              )}
            >
              <FaSearch className="w-full" />
            </button>
          </div>

          {/*  */}

          {toggleSearch && (
            <div className="w-full lg:w-[80%] mx-auto ">
              <form className="grid gap-3 sm:flex">
                <input
                  ref={focus}
                  type="search"
                  required
                  placeholder="Rice"
                  className="placeholder:text-black indent-4 w-full border-2 border-[#FC8A06] text-black rounded-[40px] outline-none h-12"
                />
                <button
                  type="button"
                  aria-label="search_btn"
                  className="btn_orange h-12 hidden sm:block relative  md:right-14"
                  onClick={(e) => e.preventDefault()}
                >
                  search
                </button>
              </form>
            </div>
          )}

          <article className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            {products &&
              products.map((product, index) => (
                <div
                  className="text-center w-fit pb-4  border-[#FC8A06] border-2 grid gap-2 rounded-[20px] bg-[#D9D9D9]"
                  key={index}
                >
                  <Image
                    src={product.src}
                    alt="product"
                    width={350}
                    height={300}
                    className="rounded-[20px] shadow-lg rounded-b-none h-[150px] sm:h-[210px] border-b-[#FC8A06] border-b-2"
                  />

                  <h1 className="uppercase font-semibold">{product.title}</h1>
                  <p className="text-[#FC8A06] font-bold text-lg">
                    #{product.price}
                  </p>
                </div>
              ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Products;
