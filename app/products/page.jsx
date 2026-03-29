"use client";
import { useState } from "react";
import LandingFooter from "../components/LandingFooter";
import ProductDrawer from "../components/ProductDrawer";
import LandingProducts from "../components/LandingProducts";
import LandingNav from "../components/LandingNav";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="bg-white pt-24">
      <LandingNav />

      {/* Page Header for context */}
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-black text-[#03081F]">
          Marketplace
        </h1>
        <p className="text-gray-500 mt-2 max-w-lg">
          Browse our full selection of raw, farm-fresh ingredients. Everything
          listed here is currently available for same-day delivery in Enugu.
        </p>
      </div>

      <LandingProducts
        onProductClick={(p) => setSelectedProduct(p)}
        showSearch={true}
        // No limit passed, so it shows all
      />

      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <LandingFooter />
    </main>
  );
}
