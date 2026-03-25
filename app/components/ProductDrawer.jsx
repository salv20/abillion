"use client";

import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

// --- Sub-component: ProductDrawer ---
const ProductDrawer = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = `Hello Abillion, I am interested in ${product.title} (${product.price}). Is it available for delivery?`;
  const whatsappUrl = `https://wa.me/2347036223329?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-end"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl bg-white h-full shadow-2xl overflow-y-auto p-8 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="text-2xl text-gray-400" />
          </button>

          <div className="space-y-8 mt-10">
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-inner bg-gray-50">
              <Image
                src={product.src}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <span className="text-[#FC8A06] font-bold text-sm tracking-widest uppercase">
                {product.category}
              </span>
              <h2 className="text-4xl font-black text-[#03081F]">
                {product.title}
              </h2>
              <div className="flex items-center text-3xl font-black text-[#03081F]">
                <TbCurrencyNaira />
                <span>{product.price}</span>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="font-bold text-[#03081F] mb-4">Ready to order?</h4>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-xl hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all active:scale-95"
              >
                <FaWhatsapp className="text-2xl" />
                Message on WhatsApp
              </a>
              <p className="text-center text-gray-400 text-sm mt-4 italic">
                Response time: Typically within 15 minutes
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
