"use client";

import Image from "next/image";
import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import Link from "next/link";

const Page = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="container mx-auto lg:w-[100%] lg:p-0 lg:m-0 lg:max-w-full">
        <div className="lg:flex items-center gap-[28px] justify-between ">
          {/* IMAGE DIV */}
          <div className="relative hidden lg:block bg-frame_img bg-cover h-[100vh] w-[650px]">
            <div className="bg-[#03081F] absolute w-full h-full">
              <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
                <h1 className=" font-danfo text-white text-[25px] sm:text-[35px]">
                  Abilli<span className="text-[#FC8A06]">on</span>
                </h1>

                <Image
                  src="/assets/rice.jpg"
                  width={300}
                  height={300}
                  alt="image"
                  className="border-[#FC8A06] border-2 rounded-[200px] rotate-180"
                />

                <p className="text-[#FBA04B] font-[700] text-[16px]">
                  Let your food be your medicine, health is wealth ...
                </p>
              </div>
            </div>
          </div>

          {/* FORM DIV */}

          <div className="form-scroll">
            <div>
              <div className=" grid gap-4 lg:gap-8">
                <h1 className="font-bold text-[28px] tracking-wider text-center">
                  Create an account with us
                </h1>

                <div className="text-[16px] flex items-center gap-[8px] font-[400] justify-center">
                  <span className="signup_span" />
                  <p>
                    already have an account?{" "}
                    <Link href="/login" className="text-[#37BBCA]">
                      Login
                    </Link>
                  </p>
                  <span className="signup_span" />
                </div>
              </div>

              <form action="" className="py-4 pt-8 flex flex-col gap-y-6">
                <input
                  type="text"
                  className="input capitalize"
                  placeholder="Full name"
                  required
                  name="name"
                />

                <input
                  type="text"
                  className="input capitalize "
                  placeholder="User name"
                  required
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email address"
                />

                <div className="relative">
                  <input
                    type={!show ? "password" : "text"}
                    id="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />

                  <div className="absolute top-[10px] text-[#848484] cursor-pointer right-3 text-3xl">
                    <BiShow
                      className={show ? "hidden" : "block"}
                      onClick={() => setShow(true)}
                    />
                    <BiSolidHide
                      className={!show ? "hidden" : "block"}
                      onClick={() => setShow(false)}
                    />
                  </div>

                  <Link
                    href="forget"
                    className="text-[#37BBCA] text-[13px] mt-[2px] flex w-fit"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="bg-[#FBA04B] font-bold text-[20px] text-[#FFFFFF] px-[12px] py-[11px] h-[46px] rounded-[10px]"
                >
                  Sign up
                </button>
              </form>

              <p className="font-roboto font-400 text-[13px]">
                By continuing, you agree to our{" "}
                <Link href="/" className="text-[#37BBCA]">
                  Terms of service
                </Link>{" "}
                and{" "}
                <Link href="/" className="text-[#37BBCA]">
                  Privacy policy
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
