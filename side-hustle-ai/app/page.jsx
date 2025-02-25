import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import SideHustleQuiz from "./components/SideHustleQuiz";
import SideHustleFactsSlider from "./components/Slider";
import CustomerTestimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <SideHustleFactsSlider />
      <SideHustleQuiz />
      <CustomerTestimonials />
      <div className="flex-1 flex-1.bg-[#FBFCF6] min-h-screen "></div>
    </div>
  );
}
