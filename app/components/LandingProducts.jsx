"use client";

import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    src: "/assets/Cabbage-Fresh.jpg",
    title: "Fresh Cabbage (2kg)",
    price: "5,000",
    category: "vegetables",
    description:
      "Crisp, farm-fresh green cabbage. Perfect for detox juices, crunchy salads, or traditional steamed sides.",
  },
  {
    src: "/assets/coconut.jpg",
    title: "Large Coconuts (3pcs)",
    price: "6,000",
    category: "local foods",
    description:
      "Mature, heavy coconuts with sweet water and thick meat. Ideal for fresh milk extraction or healthy snacking.",
  },
  {
    src: "/assets/turkey-carton.jpg",
    title: "Turkey Carton (10kg)",
    price: "70,000",
    category: "meat & sea foods",
    description:
      "Premium grade-A turkey parts, frozen at peak freshness to retain succulent flavor and lean protein content.",
  },
  {
    src: "/assets/Chicken-Wings.jpg",
    title: "Chicken Wings (1kg)",
    price: "8,000",
    category: "poultry",
    description:
      "Tender, juicy chicken wings sourced from healthy, grain-fed poultry. Perfect for grilling or air-frying.",
  },
  {
    src: "/assets/peri.jpg",
    title: "Dry Periwinkles (1 Painter)",
    price: "10,000",
    category: "meat & sea foods",
    description:
      "Thoroughly cleaned and sand-free. These add a rich, traditional sea-salt depth to your native soups.",
  },
  {
    src: "/assets/Dry Onion basket.jpg",
    title: "Dry Onion (10kg Basket)",
    price: "40,000",
    category: "vegetables",
    description:
      "Sun-cured purple onions with a sharp aroma. Essential for building the flavor base of any professional meal.",
  },
  {
    src: "/assets/snail.jpg",
    title: "Fresh Snail (20 pcs)",
    price: "50,000",
    category: "meat & sea foods",
    description:
      "Jumbo-sized land snails, rich in protein and incredibly tender when prepared. A true gourmet delicacy.",
  },
  {
    src: "/assets/live-goat.jpg",
    title: "Full Goat (Slaughtered)",
    price: "60,000",
    category: "meat & sea foods",
    description:
      "Freshly slaughtered and processed under strict hygienic conditions. Tender meat with natural, earthy flavor.",
  },
];

const categories = [
  "all",
  "vegetables",
  "poultry",
  "meat & sea foods",
  "seasonings & spices",
  "local foods",
];

const LandingProducts = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#FC8A06] font-bold tracking-widest uppercase text-sm"
            >
              Fresh From Abillion
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-[#03081F]">
              Explore Our <span className="italic font-light">Inventory</span>
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-300 border ${
                  activeTab === cat
                    ? "bg-[#03081F] text-white border-[#03081F] shadow-lg"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-[#FC8A06]"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              key={product.title}
              className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#03081F]">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[#03081F] leading-tight group-hover:text-[#FC8A06] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-[#FC8A06] font-black text-2xl">
                    <TbCurrencyNaira className="text-3xl" />
                    <span>{product.price}</span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#f8f8f8] p-3 rounded-2xl group-hover:bg-[#FC8A06] group-hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingProducts;
