"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbCurrencyNaira } from "react-icons/tb";

const ProductCard = ({ product, onClick, index = 0 }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      whileHover={{ y: -10 }}
      onClick={() => onClick(product)}
      className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-[240px] overflow-hidden bg-gray-50">
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

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-[#03081F] group-hover:text-[#FC8A06] transition-colors truncate">
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
          <div className="bg-[#f8f8f8] p-3 rounded-2xl group-hover:bg-[#FC8A06] group-hover:text-white transition-colors">
            <svg
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
