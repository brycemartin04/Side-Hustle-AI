import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function QuickLinks() {
  return (
    <div className="max-w-4xl mx-auto  mt-2 p-12 text-center">
      <h2 className="text-3xl font-bold text-[#202f46] mb-14">
        Explore Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Step-by-Step Guides Card */}
        <Link
          href="/guides"
          className="group block overflow-hidden hover:shadow-2xl transition-shadow p-6 bg-white rounded-2xl shadow-md border border-[#23c6854f] w-80 text-center"
        >
          <div className="relative h-48 ">
            <Image
              src="/check.jpg"
              alt="Step-by-Step Guides"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#23C686] group-hover:text-[#18a07b] transition-colors">
              Step-by-Step Guides
            </h3>
            <p className="text-gray-600">
              Learn how to start and grow your side hustle with detailed guides.
            </p>
          </div>
        </Link>

        {/* Ideas List Card */}
        <Link
          href="/ideas"
          className="group block overflow-hidden hover:shadow-2xl transition-shadow p-6 bg-white rounded-2xl shadow-md border border-[#23c6854f] w-80 text-center"
        >
          <div className="relative h-48">
            <Image
              src="/lightbulb.jpg"
              alt="Ideas List"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#23C686] group-hover:text-[#18a07b] transition-colors">
              Ideas List
            </h3>
            <p className="text-gray-600">
              Discover creative side hustle ideas tailored to your interests.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
