"use client";

import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingNav from "./components/LandingNav";
import LandingProducts from "./components/LandingProducts";
import LandingReviews from "./components/LandingReviews";
import LandingFeatures from "./components/LandingFeatures";
import ProductDrawer from "./components/ProductDrawer";
import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main>
      <LandingNav />
      <LandingHero />
      <LandingFeatures />

      <div className="py-14 ">
        <LandingProducts
          onProductClick={(product) => setSelectedProduct(product)}
          limit={16}
        />

        <div className="w-fit mx-auto mt-10">
          <Link
            href="/products"
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>

      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <LandingReviews />
      <LandingFooter />
    </main>
  );
};
export default Page;
