import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingNav from "./components/LandingNav";
import LandingProducts from "./components/LandingProducts";
import LandingReviews from "./components/LandingReviews";
import LandingFeatures from "./components/LandingFeatures";

const Page = () => {
  return (
    <div>
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingProducts />
      <LandingReviews />
      <LandingFooter />
    </div>
  );
};
export default Page;
