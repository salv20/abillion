"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="bg-[#D9D9D9] py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex gap-10 justify-between items-center">
          {/* Company Info */}
          <div className="grid gap-4">
            <h1 className="logo font-danfo text-[25px]">
              Abilli<span className="text-[#FC8A06]">on</span>
            </h1>
            <p>
              <span className="font-serif">Location</span>: New-market Enugu
              state. Registered under Corporate Affairs Commission (CAC).
            </p>
          </div>

          {/* Subscription & Socials */}
          <div className="grid gap-3">
            <h3 className="font-bold">Get Exclusive Deals in your Inbox</h3>
            <form className="grid gap-4 lg:flex">
              <input
                type="email"
                required
                placeholder="youremail@gmail.com"
                className="indent-2 rounded-lg outline-none h-12 lg:h-10 lg:w-[280px]"
              />
              <button
                type="submit"
                aria-label="subscribe_btn"
                className="btn_orange h-12 lg:h-10 relative lg:right-8"
                onClick={(e) => e.preventDefault()}
              >
                Subscribe
              </button>
            </form>
            <p className="font-serif">
              We won&apos;t spam, read our&nbsp;
              <Link href="email-policy">email policy.</Link>
            </p>

            <div className="socials flex gap-6">
              <button aria-label="facebook_btn">
                <FaFacebookF />
              </button>
              <button aria-label="instagram_btn">
                <FaInstagram />
              </button>
              <button aria-label="twitter_btn">
                <FaTwitter />
              </button>
              <button aria-label="whatsapp_btn">
                <FaWhatsapp />
              </button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="grid gap-2">
            <h1 className="font-bold">Legal Pages</h1>
            <div className="grid gap-1 capitalize">
              <Link href="/">Terms and Conditions</Link>
              <Link href="/">Privacy</Link>
              <Link href="/">Email Policy</Link>
            </div>
          </div>

          {/* Important Links */}
          <div className="grid gap-2">
            <h1 className="font-bold">Important Links</h1>
            <div className="grid gap-1 capitalize">
              <Link href="/">Home</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
