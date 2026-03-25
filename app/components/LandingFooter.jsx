// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaWhatsapp,
// } from "react-icons/fa";

// const LandingFooter = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#03081F] text-white pt-20 pb-10">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//           {/* Brand Column */}
//           <div className="space-y-6">
//             <h1 className="font-danfo text-4xl tracking-tighter">
//               Abilli<span className="text-[#FC8A06]">on</span>
//             </h1>
//             <p className="text-gray-400 leading-relaxed">
//               Sourcing the finest raw and unprocessed foods directly from the
//               heart of Enugu. Pure quality, handled with care.
//             </p>
//             <div className="inline-block px-4 py-2 border border-gray-700 rounded-lg text-xs font-mono text-gray-500">
//               RC: ENTER_YOUR_CAC_NUMBER
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6">
//             <h4 className="text-lg font-bold">Explore</h4>
//             <ul className="space-y-4 text-gray-400">
//               <li>
//                 <Link
//                   href="/"
//                   className="hover:text-[#FC8A06] transition-colors"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/shop"
//                   className="hover:text-[#FC8A06] transition-colors"
//                 >
//                   Our Inventory
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="hover:text-[#FC8A06] transition-colors"
//                 >
//                   Sourcing Map
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="hover:text-[#FC8A06] transition-colors"
//                 >
//                   Direct Inquiry
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Support & Legal */}
//           <div className="space-y-6">
//             <h4 className="text-lg font-bold">Trust & Legal</h4>
//             <ul className="space-y-4 text-gray-400">
//               <li>
//                 <Link
//                   href="/terms"
//                   className="hover:text-[#FC8A06] transition-colors"
//                 >
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/privacy"
//                   className="hover:text-[#FC8A06] transition-colors"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/shipping"
//                   className="hover:text-[#FC8A06] transition-colors"
//                 >
//                   Delivery Areas
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter/Contact */}
//           <div className="space-y-6">
//             <h4 className="text-lg font-bold">Stay Updated</h4>
//             <p className="text-sm text-gray-400">
//               Join our broadcast list for fresh stock alerts.
//             </p>
//             <form className="relative">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#FC8A06] transition-colors"
//               />
//               <button className="absolute right-2 top-2 bottom-2 bg-[#FC8A06] px-4 rounded-lg text-white font-bold text-sm hover:bg-orange-600 transition-all">
//                 Join
//               </button>
//             </form>

//             <div className="flex gap-4 pt-4">
//               {[
//                 {
//                   icon: <FaFacebookF />,
//                   link: "#",
//                   color: "hover:bg-blue-600",
//                 },
//                 {
//                   icon: <FaInstagram />,
//                   link: "#",
//                   color: "hover:bg-pink-600",
//                 },
//                 { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
//                 {
//                   icon: <FaWhatsapp />,
//                   link: "#",
//                   color: "hover:bg-green-500",
//                 },
//               ].map((social, i) => (
//                 <motion.a
//                   key={i}
//                   href={social.link}
//                   whileHover={{ y: -5 }}
//                   className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors ${social.color}`}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-gray-500 text-sm">
//             © {currentYear} Abillion Raw Foods. All Rights Reserved.
//           </p>
//           <div className="flex items-center gap-2 text-gray-500 text-sm">
//             <span>Location:</span>
//             <span className="text-gray-300">
//               New-market, Enugu State, Nigeria
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default LandingFooter;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="bg-[#03081F] text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Big Branding Column */}
          <div className="lg:col-span-6 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter leading-none"
            >
              Abilli<span className="text-[#FC8A06]">on.</span>
            </motion.h2>
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
              <a
                href="https://wa.me/2347036223329"
                className="text-lg font-bold hover:text-[#FC8A06] transition-all"
              >
                +234 810 000 0000
              </a>
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
                  href="#products"
                  className="hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-[#FC8A06] group-hover:w-4 transition-all" />{" "}
                  Market
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-[#FC8A06] group-hover:w-4 transition-all" />{" "}
                  Inquire
                </Link>
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
