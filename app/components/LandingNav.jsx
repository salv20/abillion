import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const LandingNav = () => {
  return (
    <nav>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <h1 className=" font-danfo text-[25px] sm:text-[35px]">
            Abilli<span className="text-[#FC8A06]">on</span>
          </h1>

          <div className="flex gap-4 sm:gap-10 items-center ">
            <Link href="/">
              <button
                type="button"
                aria-label="home_btn"
                className="btn_orange hidden md:flex"
              >
                home
              </button>
            </Link>

            <Link href="cart">
              <button
                type="button"
                aria-label="cart_btn"
                className="btn_neutral "
              >
                <span className="hidden sm:flex items-center">
                  cart( <FaShoppingCart className="text-[#FC8A06] text-xl" />)
                </span>

                <span>
                  <FaShoppingCart className="text-[#FC8A06] text-2xl sm:hidden" />
                </span>
              </button>
            </Link>

            <Link href="signup">
              <button
                type="button"
                aria-label="signup_btn"
                className="btn_black  "
              >
                sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
