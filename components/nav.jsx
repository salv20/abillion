import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <h1 className="logo font-danfo text-[25px] sm:text-[35px]">
            Abilli<span className="text-[#FC8A06]">on</span>
          </h1>

          <div className="hidden md:flex gap-10 items-center ">
            <Link href="/">
              <button
                type="button"
                aria-label="home_btn"
                className="btn_orange"
              >
                home
              </button>
            </Link>

            <Link href="cart">
              <button
                type="button"
                aria-label="cart_btn"
                className="btn_neutral flex items-center"
              >
                cart( <FaShoppingCart className="text-[#FC8A06] text-xl" />)
              </button>
            </Link>

            <Link href="signup">
              <button
                type="button"
                aria-label="signup_btn"
                className="btn_black"
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

export default Nav;
