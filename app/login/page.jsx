"use client";

const Page = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid gap-6">
          <h1 className="font-bold text-lg tracking-wider text-center">
            Welcome back, please Login.
          </h1>

          <form action="" className="grid gap-8">
            <div>
              <label className="label">email address</label>
              <input
                type="email"
                className="input"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="label">password</label>
              <input
                type="text"
                className="input"
                placeholder="Enter password"
              />
            </div>

            <button
              type="button"
              aria-label="search_btn"
              className="btn_orange h-12 w-[80%] lg:w-[60%] xl:w-[40%] mx-auto "
              onClick={(e) => e.preventDefault()}
            >
              sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
