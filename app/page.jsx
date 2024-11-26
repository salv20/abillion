import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingNav from "./components/LandingNav";
import LandingProducts from "./components/LandingProducts";
import LandingReviews from "./components/LandingReviews";
const Page = () => {
  return (
    <div>
      <LandingNav />
      <LandingHero />
      <LandingProducts />
      <LandingReviews />
      <LandingFooter />
    </div>
  );
};
export default Page;
