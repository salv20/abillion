"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Product = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <section className="py-10">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <h1>welcome {session?.user?.userName}</h1>
          <div className="relative flex justify-center items-center h-[38px]">
            <button
              type="submit"
              onClick={() => signOut()}
              className={`bg-[#37BBCA] font-bold text-[18px] h-full text-white rounded-[10px] w-fit px-6`}
            >
              sign out
            </button>
          </div>
        </div>

        <h1>products</h1>
      </div>
    </section>
  );
};

export default Product;
