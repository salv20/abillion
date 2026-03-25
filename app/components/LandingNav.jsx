"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const LandingNav = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="group flex items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="font-danfo text-3xl sm:text-4xl tracking-tighter"
          >
            Abilli<span className="text-[#FC8A06]">on</span>
          </motion.h1>
        </Link>

        <div className="hidden md:flex gap-10 items-center font-medium text-gray-800">
          {["Shop", "Source", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FC8A06] transition-all group-hover:w-full" />
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#03081F] text-white px-8 py-2.5 rounded-full shadow-lg"
          >
            Inquire
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default LandingNav;
