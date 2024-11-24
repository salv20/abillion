"use client";

import Image from "next/image";
import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThreeCircles } from "react-loader-spinner";

const Page = () => {
  const passRegex = /^(?=.*[0-9])(?=.*[!@#£$%^&*])[a-zA-Z0-9!@#£$%^&*]{6,16}$/;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordMatch, setPassWordMatch] = useState("");

  const router = useRouter();

  const handleInputChange = (e) => {
    setError("");
    setPassWordMatch("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, userName, email, password } = formData;

    if (!fullName || !userName || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!password.match(passRegex)) {
      setPassWordMatch(
        "Password must have a special character and a number and length more than 5"
      );

      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        const message = data?.message?.includes("ENOTFOUND")
          ? "Please check your internet connection and try again"
          : data?.message || "Something went wrong. Please try again.";
        throw new Error(message);
      }

      e.target.reset();
      setFormData({ fullName: "", userName: "", email: "", password: "" });
      router.push("products");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

          <div className="form-scroll lg:w-[45%]">
            <div>
              <div className=" grid gap-4 lg:gap-8">
                <h1 className="font-bold text-[28px] tracking-wider text-center">
                  Create an account with us
                </h1>

                <div className="text-[16px] flex items-center gap-[8px] font-[400] justify-center">
                  <span className="signup_span" />
                  <p>
                    already have an account?&nbsp;
                    <Link href="/login" className="text-[#37BBCA]">
                      Login
                    </Link>
                  </p>
                  <span className="signup_span" />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="py-4 pt-8 flex flex-col gap-y-6"
              >
                <input
                  type="text"
                  name="fullName"
                  className="input capitalize"
                  placeholder="Full name"
                  required
                  onChange={handleInputChange}
                />

                {/* User Name Input */}
                <input
                  type="text"
                  name="userName"
                  className="input capitalize"
                  placeholder="User name"
                  required
                  onChange={handleInputChange}
                />

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email address"
                    required
                    onChange={handleInputChange}
                  />
                  {error && <p className="error_message">{error}</p>}
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                    onChange={handleInputChange}
                  />
                  <p className="error_message">{passwordMatch}</p>

                  <div
                    className="absolute top-[12px] right-3 text-3xl text-[#848484] cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <BiSolidHide /> : <BiShow />}
                  </div>
                  <Link
                    href="forget"
                    className="text-[#37BBCA] text-[13px] mt-[2px] flex w-fit"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <div className="relative flex justify-center items-center h-[38px]">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-[#37BBCA] font-bold text-[18px] h-full text-white rounded-[10px] w-full ${
                      loading ? "blur-[2px]" : ""
                    }`}
                  >
                    Sign up
                  </button>
                  {loading && (
                    <div className="absolute">
                      <ThreeCircles
                        visible={true}
                        height="35"
                        width="35"
                        color="#ff8804"
                        ariaLabel="loading"
                      />
                    </div>
                  )}
                </div>
              </form>

              <p className="font-roboto font-400 text-[13px]">
                By continuing, you agree to our&nbsp;
                <Link href="/" className="text-[#37BBCA]">
                  Terms of service
                </Link>
                &nbsp; and&nbsp;
                <Link href="/" className="text-[#37BBCA]">
                  Privacy policy
                </Link>
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
