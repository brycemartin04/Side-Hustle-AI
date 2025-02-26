import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Side Hustle Guides | Step-by-Step Business Guides",
  description:
    "Explore expert step-by-step guides on starting side hustles, including reselling, dropshipping, YouTube content creation, and more. Turn your passion into profit today!",
};

export default function GuidesPage() {
  const guides = [
    {
      title: "How to Start Reselling Products",
      description:
        "Learn the basics of reselling products on platforms like eBay and Facebook Marketplace. A perfect guide for beginners.",
      link: "/guides/reselling",
    },
    {
      title: "Step-by-Step Dropshipping Guide",
      description:
        "This guide walks you through the process of setting up a dropshipping business with Shopify, from choosing a niche to scaling your business.",
      link: "/guides/dropshipping",
    },
    {
      title: "How to Create YouTube Content",
      description:
        "Discover the secrets to successful YouTube content creation, from selecting your niche to monetizing your channel.",
      link: "/guides/youtube-content-creation",
    },
    {
      title: "Starting a Print on Demand Store",
      description:
        "A beginner's guide to creating and selling custom products online through print-on-demand platforms like Printful.",
      link: "/guides/print-on-demand",
    },
    {
      title: "Creating Your Own Mobile App",
      description:
        "Learn how to develop a mobile app from scratch, whether you’re looking to create a personal app or start a freelance business.",
      link: "/guides/app-development",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-[#202f46] mb-8 text-center">
        Step-by-Step Guides to Help You Start Your Side Hustle
      </h2>
      <div className="space-y-8">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-[#23C686] mb-4">
              {guide.title}
            </h3>
            <p className="text-gray-600 mb-4">{guide.description}</p>
            <Link
              href={guide.link}
              className="text-[#23C686] font-semibold border-[#23C686] border-[.5px] rounded-lg p-2 transition-transform transform hover:scale-105 hover:text-white hover:bg-[#23C686] duration-300"
            >
              Read Full Guide
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
