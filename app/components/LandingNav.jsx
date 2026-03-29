"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Install react-icons

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="group flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            height={30}
            width={30}
            className="object-contain"
          />
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="font-danfo text-2xl sm:text-3xl tracking-tighter text-[#03081F]"
          >
            Abilli<span className="text-[#FC8A06]">on</span>
          </motion.h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center font-medium">
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
            className="bg-[#03081F] text-white px-8 py-2.5 rounded-full shadow-lg text-xs font-bold uppercase tracking-widest"
          >
            Inquire
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#03081F] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-4 py-8">
              {navLinks.map((item, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-[#03081F] uppercase tracking-tighter block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FC8A06] text-white py-4 rounded-2xl text-center font-bold shadow-lg"
              >
                Inquire via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default LandingNav;
