// "use client";

// import LandingFooter from "./components/LandingFooter";
// import LandingHero from "./components/LandingHero";
// import LandingNav from "./components/LandingNav";
// import LandingProducts from "./components/LandingProducts";
// import LandingReviews from "./components/LandingReviews";
// import LandingFeatures from "./components/LandingFeatures";
// import ProductDrawer from "./components/ProductDrawer";
// import { useState } from "react";
// import Link from "next/link";

// const Page = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <main>
//       <LandingNav />
//       <LandingHero />
//       <LandingFeatures />

//       <div className="py-14 ">
//         <LandingProducts
//           onProductClick={(product) => setSelectedProduct(product)}
//           limit={16}
//         />

//         <div className="w-fit mx-auto mt-10">
//           <Link
//             href="/products"
//             className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
//           >
//             View All Products
//           </Link>
//         </div>
//       </div>

//       <ProductDrawer
//         product={selectedProduct}
//         onClose={() => setSelectedProduct(null)}
//       />

//       <LandingReviews />
//       <LandingFooter />
//     </main>
//   );
// };
// export default Page;

"use client";

import { motion } from "framer-motion";

import { FiLock as Lock } from "react-icons/fi";

/*
import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingNav from "./components/LandingNav";
import LandingProducts from "./components/LandingProducts";
import LandingReviews from "./components/LandingReviews";
import LandingFeatures from "./components/LandingFeatures";
import ProductDrawer from "./components/ProductDrawer";
import { useState } from "react";
import Link from "next/link";
*/

const Page = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full text-center"
      >
        {/* Glassmorphic Icon Container */}
        <div className="mb-8 flex justify-center">
          <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
            <Lock className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <h1 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">
          Service suspended
        </h1>

        <p className="text-gray-500 leading-relaxed mb-8">
          Access to this website has been restricted due to refusal to make
          payment. The grace period for payment has concluded.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-sm text-gray-600">
            Please settle the remaining balance to restore full access to your
            platform and services.
          </div>

          <p className="text-xs text-gray-400">
            If you believe this is an error, please reach out to your developer.
          </p>
        </div>
      </motion.div>

      {/* 
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
      */}
    </main>
  );
};

export default Page;
