"use client";
import React from "react";

export default function SideHustleCard({
  title,
  description,
  investment,
  image,
}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-[#23c6854f] text-center mb-4 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-[#202f46] mb-4">{title}</h3>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full max-w-lg h-auto object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm font-semibold text-[#23C686]">
        Investment: {investment}
      </p>
      <button className="mt-4 px-4 py-2 cursor-pointer bg-[#23C686] text-white rounded-lg hover:bg-[#1ea56f] transition">
        Learn More
      </button>
    </div>
  );
}
