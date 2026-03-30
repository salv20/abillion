"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import ProductCard from "./ProductCard";
import Categories from "@/utils/categories";
import Products from "@/utils/products";

console.log(Products.length);

const LandingProducts = ({
  onProductClick,
  limit = null,
  showSearch = true,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const displayProducts = useMemo(() => {
    let filtered = Products.filter((p) => {
      const matchCat = activeTab === "all" || p.category === activeTab;
      const matchSearch = p.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
    return limit ? filtered.slice(0, limit) : filtered;
  }, [activeTab, searchQuery, limit]);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-4 gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#03081F]">
              {limit ? "Featured" : "All"}{" "}
              <span className="italic font-light text-[#FC8A06]">Items</span>
            </h2>
          </div>

          {showSearch && (
            <div className="relative w-full lg:w-[400px]">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search inventory..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-600 py-4 pl-12 pr-10 rounded-2xl focus:border-[#FC8A06] outline-none transition-all"
              />
              {searchQuery && (
                <FiX
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-red-400"
                />
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar mb-10 border-b border-gray-50">
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 capitalize rounded-full whitespace-nowrap font-medium transition-all border ${
                activeTab === cat
                  ? "bg-[#03081F] text-white border-[#03081F]"
                  : "text-gray-800 border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {displayProducts.map((p, i) => (
              <ProductCard
                key={p.title}
                product={p}
                index={i}
                onClick={onProductClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LandingProducts;
