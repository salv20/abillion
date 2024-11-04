import Hero from "@/components/hero";
import Review from "@/components/review";
import Products from "@/components/products";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

const Page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Products />
      <Review />
      <Footer />
    </div>
  );
};

export default Page;
