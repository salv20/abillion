import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <h1>
        Abillion
        <span>AB</span>
      </h1>

      <div className="">
        <div className="">
          <button type="button">
            <Link href="/">home</Link>
          </button>

          <button type="button">search</button>
          <button type="button">
            <Link href="cart">cart</Link>
          </button>
        </div>

        <button type="button">sign up</button>
      </div>
    </nav>
  );
};

export default Nav;
