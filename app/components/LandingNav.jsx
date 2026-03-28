"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const phoneNumber = "2347036223329";

const message = encodeURIComponent(
  "Hello Abillion, I want to inquire about...",
);

const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

const navLinks = [
  { name: "Market", href: "/products" },
  { name: "Our Story", href: "/#About" },
  { name: "Reviews", href: "/#Testimonials" },
];

const LandingNav = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="group flex gap-1 items-center">
          <Image src="/logo.png" alt="logo" height={10} width={40} />
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="font-danfo text-3xl sm:text-4xl tracking-tighter"
          >
            Abilli<span className="text-[#FC8A06]">on</span>
          </motion.h1>
        </Link>

        <div className="hidden md:flex gap-10 items-center font-medium text-gray-800">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group text-[#03081F] font-bold uppercase tracking-widest text-[10px]"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FC8A06] transition-all group-hover:w-full" />
            </Link>
          ))}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#03081F] text-white px-8 py-2.5 rounded-full shadow-lg inline-block text-center"
          >
            Inquire
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default LandingNav;
