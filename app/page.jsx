"use client";

import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingNav from "./components/LandingNav";
import LandingProducts from "./components/LandingProducts";
import LandingReviews from "./components/LandingReviews";
import LandingFeatures from "./components/LandingFeatures";
import ProductDrawer from "./components/ProductDrawer";
import { useState } from "react";

const Page = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingProducts
        onProductClick={(product) => setSelectedProduct(product)}
      />

      {/* Pass the state and closer function to the drawer */}
      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <LandingReviews />
      <LandingFooter />
    </div>
  );
};
export default Page;
