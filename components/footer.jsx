"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] py-10">
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:flex gap-10 justify-between items-center">
          {/*  */}

          <div className="grid gap-4">
            <h1 className="logo font-danfo text-[25px]">
              Abilli<span className="text-[#FC8A06]">on</span>
            </h1>
            <p>
              <span className="font-serif">Location</span>: new-market Enugu
              state. registered under Nigeria Corperate Affairs Commission
              (CAC).
            </p>
          </div>

          <div className="grid gap-3 shadow-lg py-2">
            <h3 className="font-bold">Get Exclusive Deals in your Inbox</h3>

            <form className="grid gap-4 lg:flex">
              <input
                type="email"
                required
                placeholder="youremail@gmail.com"
                className="indent-2 rounded-xl shadow-md border-2 outline-none py-2  lg:w-[280px]"
              />
              <button
                type="submit"
                className="btn_orange relative lg:right-8"
                onClick={(e) => e.preventDefault()}
              >
                subscribe
              </button>
            </form>

            <p>
              we wont spam, read our{" "}
              <Link href="email-policy">email policy</Link>
            </p>

            <div className="socials flex justify">
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

          {/*  */}

          <div className="">
            <h1>Legal Pages</h1>
            <div className="">
              <Link href="/">Terms and conditions</Link>
              <Link href="/">Privacy</Link>
              <Link href="/">email policy</Link>
            </div>
          </div>

          {/*  */}

          <div className="">
            <h1>Important Links</h1>
            <div className="">
              <Link href="/">hone</Link>
              <Link href="home">cart</Link>
              <Link href="signup">signup</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
