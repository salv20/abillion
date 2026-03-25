"use client";

import { motion } from "framer-motion";

const allReviews = [
  {
    name: "Mr. Bayo",
    comment: "The goat meat was exceptionally fresh. rare hygiene!",
    location: "Lagos",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Mrs. Chioma",
    comment: "No sand in the crayfish. Abillion saved me market stress.",
    location: "Abuja",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Miss Chidimma",
    comment: "The Onga and Fish spices are clearly fresh stock. Fast delivery!",
    location: "PH",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Alhaji Musa",
    comment: "Jumbo snails, very clean. My new go-to for raw food.",
    location: "Kano",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Ayo",
    comment: "Best ponmo I've ordered online. Clean and well packaged.",
    location: "Ibadan",
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Blessing",
    comment: "The titus fish was still rock hard when it arrived. Fresh!",
    location: "Enugu",
    color: "bg-yellow-100 text-yellow-600",
  },
  // Add as many as you want...
];

const ReviewCard = ({ review }) => (
  <div className="w-[350px] shrink-0 bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm mx-4">
    <p className="text-gray-600 mb-6 line-clamp-3">
      &quot;{review.comment}&quot;
    </p>
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${review.color}`}
      >
        {review.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-sm text-[#03081F]">{review.name}</h4>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          {review.location}
        </p>
      </div>
    </div>
  </div>
);

const LandingReviews = () => {
  return (
    <section className="py-20 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#FC8A06] font-bold tracking-[0.2em] uppercase mb-2 text-sm"
        >
          Testimonials
        </motion.h1>
        <h2 className="text-4xl font-bold font-poppins text-[#03081F]">
          Trusted by <span className="text-[#FC8A06]">Hundreds</span>
        </h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {[...allReviews, ...allReviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {[...allReviews, ...allReviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays for the "Fade Out" effect on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
      </div>
    </section>
  );
};

export default LandingReviews;
