"use client";

import Link from "next/link";

const Page = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="grid gap-6">
          {/*  */}

          <div className="gap-2 grid text-center">
            <h2 className="font-semibold text-xl tracking-wider">
              Create an account with us.
            </h2>
            <p className="">
              Already have an account{"  "}
              <Link href="login" className="text-[#FC8A06] font-bold">
                login
              </Link>
            </p>
          </div>

          <form action="" className="grid gap-6">
            <div>
              <label className="label">full name</label>
              <input
                type="text"
                className="input capitalize"
                placeholder="Enter full name"
                required
              />
            </div>

            <div>
              <label className="label">email address</label>
              <input
                type="email"
                className="input"
                placeholder="Enter email address"
                required
              />
            </div>

            <div>
              <label className="label">user name</label>
              <input
                type="text"
                className="input capitalize "
                placeholder="Enter user name"
                required
              />
            </div>

            <div>
              <label className="label">password</label>
              <input
                type="text"
                className="input"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="button"
              aria-label="search_btn"
              className="btn_orange h-12 w-[80%] lg:w-[60%] xl:w-[40%] mx-auto "
              onClick={(e) => e.preventDefault()}
            >
              sign up
            </button>
          </form>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Page;
