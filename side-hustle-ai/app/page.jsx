import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import SideHustleQuiz from "./components/SideHustleQuiz";
import SideHustleFactsSlider from "./components/Slider";
import CustomerTestimonials from "./components/Testimonials";
import QuickLinks from "./components/QuickLinks";

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
