"use client";

import Image from "next/image";
import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ThreeCircles } from "react-loader-spinner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { email, password } = formData;
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);

      if (res.error) {
        console.log(res.error);

        throw "Wrong email or password. Please try again.";
      }

      router.push("products");

      console.log(res.url, res.status);
    } catch (error) {
      console.log(error);
      setLoginError(error);
      console.log(loginError);
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

          <div className="form-scroll">
            <div>
              <div className=" grid gap-4 lg:gap-8">
                <h1 className="font-bold text-[28px] tracking-wider text-center">
                  Welcome back, please login.
                </h1>

                <div className="text-[16px] flex items-center gap-[8px] font-[400] justify-center">
                  <span className="signup_span" />
                  <p>
                    Don’t have an account?&nbsp;
                    <Link href="/signup" className="text-[#37BBCA]">
                      Sign up
                    </Link>
                  </p>
                  <span className="signup_span" />
                </div>
              </div>

              <form
                action=""
                className="py-4 pt-8 flex flex-col gap-y-6"
                onSubmit={handleSubmit}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email address"
                  required
                  onChange={handleInputChange}
                />

                {/* Password Input */}
                <div className="relative flex flex-col gap-[4px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                    onChange={handleInputChange}
                  />

                  {/* Toggle Password Visibility */}
                  <div
                    className="absolute top-[10px] right-3 text-3xl text-[#848484] cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <BiSolidHide /> : <BiShow />}
                  </div>

                  <p className="error_message">{loginError}</p>

                  <Link
                    href="/forget"
                    className="text-[#37BBCA] text-[13px] block w-fit"
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
                    Login
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
