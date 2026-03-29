"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const phoneNumber = "2347036223329";
const message = encodeURIComponent(
  "Hello Abillion, I want to inquire about...",
);
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

const LandingFooter = () => {
  return (
    <footer className="bg-[#03081F] text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Big Branding Column */}

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-1">
              <Image
                src="/logo.png"
                alt="logo"
                height={10}
                width={30}
                className="rounded-md"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black tracking-tighter leading-none"
              >
                Abilli<span className="text-[#FC8A06]">on.</span>
              </motion.h2>
            </div>
            <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed">
              We source, process, and deliver nature&apos;s best from{" "}
              <span className="text-white border-b border-[#FC8A06]">
                New-market, Enugu
              </span>{" "}
              to your kitchen table.
            </p>

            {/* CAC & Legitimacy Badge */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gray-700" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">
                CAC REGISTERED ENTITY • NIGERIA
              </span>
            </div>
          </div>

          {/* Contact & Socials Column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-[#FC8A06] text-xs font-bold uppercase tracking-widest mb-2">
                Direct Line
              </h4>

              <span className="text-lg font-bold hover:text-[#FC8A06] transition-all">
                +234 703 622 3329
              </span>
            </div>

            <div>
              <h4 className="text-[#FC8A06] text-xs font-bold uppercase tracking-widest mb-2">
                Visit Us
              </h4>
              <p className="text-gray-400 text-lg leading-snug">
                Block G, New-market Complex,
                <br />
                Enugu State.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[#FC8A06] text-xs font-bold uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xl font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-[#FC8A06] group-hover:w-4 transition-all" />{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-[#FC8A06] group-hover:w-4 transition-all" />{" "}
                  Market
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-[#FC8A06] group-hover:w-4 transition-all" />{" "}
                  Inquire
                </a>
              </li>
            </ul>

            {/* Minimal Social Icons */}
            <div className="flex gap-6 text-2xl pt-6">
              <motion.a whileHover={{ y: -5, color: "#FC8A06" }} href="#">
                <FaWhatsapp />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: "#FC8A06" }} href="#">
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: "#FC8A06" }} href="#">
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Decorative Background Text */}
        <div className="relative mt-20 pt-10 border-t border-white/5">
          <p className="text-[12vw] font-black text-white/[0.02] absolute -bottom-10 left-0 leading-none pointer-events-none select-none">
            UNPROCESSED
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-[0.2em] font-bold uppercase relative z-10">
            <p>© Abillion Food Company {new Date().getFullYear()}</p>
            <p className="mt-4 md:mt-0 italic font-serif lowercase tracking-normal text-sm">
              Let food be your medicine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
