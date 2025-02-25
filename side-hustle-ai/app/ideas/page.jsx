"use client";
import React from "react";
import SideHustleCard from "../components/SideHustleCard";

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
  ],
};

export default function SideHustlesPage() {
  return (
    <div className="max-w-4xl mx-auto p-12">
      <h2 className="text-3xl font-bold text-[#202f46] mb-8 mt-2 text-center">
        9 Side Hustle Ideas from Beginner to Advanced
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
