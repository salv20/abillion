"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const LandingHero = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafafa]">
      {/* Decorative background shape */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[40%] h-full bg-[#fdf2e9] -z-10 rounded-l-[200px] hidden lg:block"
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.article
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={itemVars}>
              <span className="inline-block text-[#FC8A06] font-bold tracking-widest uppercase text-xs bg-orange-100 px-4 py-1.5 rounded-full mb-4">
                Raw • Unprocessed • Pure
              </span>
              <h2 className="text-6xl lg:text-8xl font-bold font-poppins text-[#03081F] leading-tight">
                Feast Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC8A06] to-[#ffba6a]">
                  Senses.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVars}
              className="text-gray-500 text-xl max-w-md leading-relaxed"
            >
              Order earth&apos;s finest raw foods. No chemicals, just the pure
              energy of nature delivered to you.
            </motion.p>

            <motion.div variants={itemVars} className="relative max-w-lg">
              <div className="relative group">
                <input
                  type="search"
                  placeholder="Search raw honey, grains..."
                  className="w-full pl-8 pr-36 py-6 bg-white border-none rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-[#FC8A06] outline-none transition-all text-lg"
                />
                <button className="absolute right-3 top-3 bottom-3 bg-[#FC8A06] text-white px-8 rounded-xl font-bold hover:bg-[#03081F] transition-colors shadow-lg">
                  Search
                </button>
              </div>
            </motion.div>

            <motion.p
              variants={itemVars}
              className="flex items-center gap-3 text-sm font-semibold text-gray-400"
            >
              <span className="w-8 h-[2px] bg-[#FC8A06]" />
              HEALTH IS WEALTH
            </motion.p>
          </motion.article>

          {/* Visual Side with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[320px] h-[450px] sm:w-[500px] sm:h-[600px]"
            >
              {/* Image Frame */}
              <div className="absolute inset-0 border-[16px] border-white shadow-2xl rounded-[60px] overflow-hidden">
                <Image
                  src="/hero-img.png"
                  alt="Raw Food Showcase"
                  fill
                  className="object-cover scale-110 hover:scale-125 transition-transform duration-1000"
                />
              </div>

              {/* Floating Stat Card */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -right-8 top-1/4 bg-[#03081F] text-white p-6 rounded-3xl shadow-2xl hidden sm:block"
              >
                <p className="text-3xl font-bold">100%</p>
                <p className="text-xs uppercase tracking-widest opacity-70">
                  Organic Raw
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
