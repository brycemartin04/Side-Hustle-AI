import React from "react";
import SideHustleCard from "../components/SideHustleCard";

export const metadata = {
  title: "Side Hustle Ideas - Beginner to Advanced",
  description:
    "Explore various side hustle ideas categorized by skill level, from beginner to advanced, with investment estimates and descriptions.",
  keywords: [
    "side hustles",
    "make money online",
    "passive income",
    "freelancing",
    "business ideas",
  ],
};

const sideHustles = {
  Beginner: [
    {
      title: "Reselling",
      description:
        "Buy and resell items on platforms like Facebook Marketplace and eBay. Look for underpriced or in-demand products and flip them for a profit.",
      investment: "$0 - $100",
      image: "/facebook.jpeg",
    },
    {
      title: "Online Surveys",
      description:
        "Sign up for platforms like Swagbucks or Survey Junkie to earn money by sharing your opinions. While it won’t make you rich, it’s an easy way to earn a few extra dollars in your free time.",
      investment: "$0",
      image: "/online-survey.avif",
    },
    {
      title: "Pet Sitting",
      description:
        "Use services like Rover or Care.com to offer pet-sitting or dog-walking services. If you love animals, this can be a rewarding way to make money while spending time with pets.",
      investment: "$0 - $50",
      image: "/pet-sitting.avif",
    },
    {
      title: "Freelance Writing",
      description:
        "Write articles, blogs, or copy for websites. Platforms like Fiverr and Upwork can connect you with clients looking for writers.",
      investment: "$0",
      image: "/freelance-writing.jpg",
    },
    {
      title: "Virtual Assistant",
      description:
        "Offer administrative services to businesses or entrepreneurs, such as email management, scheduling, or customer support.",
      investment: "$0 - $50",
      image: "/virtual-assistant.jpg",
    },
    {
      title: "Social Media Management",
      description:
        "Help businesses grow their online presence by managing their social media accounts. This includes creating content, scheduling posts, and engaging with followers.",
      investment: "$0",
      image: "/social-media-manager.webp",
    },
    {
      title: "Transcription Services",
      description:
        "Transcribe audio files into text. Platforms like Rev or TranscribeMe offer paid transcription jobs for beginners.",
      investment: "$0",
      image: "/transcription.webp",
    },
    {
      title: "Delivery Driver",
      description:
        "Sign up with companies like UberEats, DoorDash, or Grubhub to earn money by delivering food to customers.",
      investment: "$0",
      image: "/delivery-driver.jpg",
    },
    {
      title: "Online Tutoring",
      description:
        "Teach subjects you're knowledgeable in through online platforms like Chegg or Tutor.com. You can tutor subjects like math, languages, or test prep.",
      investment: "$0",
      image: "/online-tutoring.jpg",
    },
  ],
  Intermediate: [
    {
      title: "Dropshipping",
      description:
        "Create an online store using Shopify or WooCommerce without holding inventory. Partner with suppliers who handle fulfillment while you focus on marketing and customer service.",
      investment: "$500+",
      image: "/dropshipping.png",
    },
    {
      title: "YouTube Content Creation",
      description:
        "Start a YouTube channel around a niche you enjoy. Monetize through ads, sponsorships, and affiliate marketing. Consistency and engaging content are key to growing an audience.",
      investment: "$100 - $500",
      image: "/YouTube.jpg",
    },
    {
      title: "Print on Demand",
      description:
        "Design and sell custom apparel, mugs, and phone cases using platforms like Printful or Redbubble. No inventory management is required, and profits come from each sale.",
      investment: "$100 - $300",
      image: "/print-on-demand.webp",
    },
    {
      title: "Affiliate Marketing",
      description:
        "Promote products from other companies and earn commissions for every sale made through your referral links. This can be done through blogs, social media, or websites.",
      investment: "$100 - $500",
      image: "/affiliate marketing.png",
    },
    {
      title: "Stock Photography",
      description:
        "Take high-quality photos and sell them on stock photography websites like Shutterstock or Adobe Stock.",
      investment: "$100",
      image: "/stock-photography.jpeg",
    },
    {
      title: "Podcasting",
      description:
        "Create a podcast around a specific niche. Monetize through ads, sponsorships, or listener support on platforms like Patreon.",
      investment: "$100 - $500",
      image: "/podcasting.jpg",
    },
    {
      title: "Flipping Furniture",
      description:
        "Find used furniture at thrift stores or garage sales, refurbish them, and resell them for a profit.",
      investment: "$100 - $500",
      image: "/furniture-flipping.jpg",
    },
    {
      title: "Blogging",
      description:
        "Start a blog around a niche you're passionate about. Monetize with ads, affiliate links, or sponsored content.",
      investment: "$50 - $100",
      image: "/blogging.jpg",
    },
    {
      title: "Voiceover Work",
      description:
        "Do voiceover work for audiobooks, podcasts, or advertisements. Sites like Voices.com offer opportunities for beginners.",
      investment: "$100",
      image: "/voiceover.jpeg",
    },
    {
      title: "Online Course Creation",
      description:
        "Create and sell online courses using platforms like Teachable or Udemy. Share your knowledge on topics you're passionate about.",
      investment: "$100 - $500",
      image: "/online-course.jpg",
    },
  ],
  Advanced: [
    {
      title: "App Development",
      description:
        "Develop mobile or web apps and monetize them through sales, ads, or subscriptions. You can build your own products or take on freelance app development projects for clients.",
      investment: "$1000+",
      image: "/app-development.png",
    },
    {
      title: "Amazon FBA",
      description:
        "Source and sell products on Amazon while using Fulfillment by Amazon (FBA) to handle storage and shipping. This requires significant research and investment but has high earning potential.",
      investment: "$2000+",
      image: "/amazon-fba.png",
    },
    {
      title: "Consulting",
      description:
        "Leverage your industry expertise to provide consulting services to businesses or individuals. This could be in areas like marketing, finance, or career coaching.",
      investment: "$500+",
      image: "/consulting.png",
    },
    {
      title: "Real Estate Investing",
      description:
        "Invest in real estate properties to rent or flip. This requires a significant upfront investment but can offer long-term returns.",
      investment: "$5000+",
      image: "/real-estate.jpg",
    },
    {
      title: "E-commerce Store",
      description:
        "Create an online store with platforms like Shopify, selling products in a niche you’re passionate about. This requires inventory management and marketing skills.",
      investment: "$1000+",
      image: "/e-commerce.png",
    },
    {
      title: "Vending Machine Business",
      description:
        "Invest in vending machines, place them in high-traffic areas, and earn passive income as people purchase snacks or drinks.",
      investment: "$1000+",
      image: "/vending-machine.jpeg",
    },
    {
      title: "Digital Marketing Agency",
      description:
        "Offer marketing services like SEO, PPC, and social media management to businesses. If you have experience in marketing, you can scale this quickly.",
      investment: "$500 - $2000",
      image: "/digital marketing agency.png",
    },
    {
      title: "Stock Market Trading",
      description:
        "Invest in stocks, bonds, or options. This requires a solid understanding of the market and can involve a higher risk but can be highly profitable.",
      investment: "$1000+",
      image: "/stock.jpeg",
    },
  ],
};

export default function SideHustlesPage() {
  return (
    <div className="max-w-4xl mx-auto p-12">
      <h2 className="text-3xl font-bold text-[#202f46] mb-8 mt-2 text-center">
        Side Hustle Ideas from Beginner to Advanced
      </h2>
      {Object.entries(sideHustles).map(([level, hustles]) => (
        <div key={level} className="mb-8">
          <h3 className="text-2xl font-bold text-[#23C686] mb-4">{level}</h3>
          {hustles.map((hustle, index) => (
            <SideHustleCard key={index} {...hustle} skillLevel={level} />
          ))}
        </div>
      ))}
    </div>
  );
}
