import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import SideHustleQuiz from "./components/SideHustleQuiz";
import SideHustleFactsSlider from "./components/Slider";
import CustomerTestimonials from "./components/Testimonials";
import QuickLinks from "./components/QuickLinks";

export const metadata = {
  title: "Side Hustle Hub - Find Your Perfect Side Hustle",
  description:
    "Discover the best side hustle ideas and take our interactive quiz to find the perfect side hustle for you. Explore expert insights, real success stories, and essential resources to start your journey.",
  keywords: [
    "side hustle",
    "make money online",
    "passive income",
    "side hustle quiz",
    "work from home",
    "business ideas",
    "freelancing",
    "entrepreneurship",
  ],
};

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <SideHustleFactsSlider />
      <SideHustleQuiz />
      <QuickLinks />
      <CustomerTestimonials />
    </div>
  );
}
