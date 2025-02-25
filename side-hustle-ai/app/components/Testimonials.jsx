// CustomerTestimonials.js
import React from "react";

const testimonials = [
  {
    name: "Marie Forleo, Founder of B-School",
    feedback:
      "In today's world, anyone with a passion and a laptop can turn their ideas into income. But success doesn't come overnight. Focus on building value, and the profits will follow.",
    image: "/marie.jpeg",
  },
  {
    name: "Pat Flynn, Founder of Smart Passive Income",
    feedback:
      "Your side hustle isn't just a way to make extra money—it's a chance to build something you're passionate about. When you focus on solving real problems, your side hustle will turn into something bigger than you ever imagined.",
    image: "/pat-flynn.webp",
  },
  {
    name: 'Gary Vaynerchuk, Entrepreneur and Author of "Crushing It!"',
    feedback:
      "You need to constantly be in do mode…Being unafraid of making mistakes makes everything easy for me. Hear me now: you are better off being wrong ten times and being right three than you are if you try only three times and always get it right.",
    image: "/gary-v.jpg",
  },
];

export default function CustomerTestimonials() {
  return (
    <div className="max-w-4xl mx-auto  mt-2 p-12 text-center">
      <h2 className="text-3xl font-bold text-[#202f46] mb-6">
        Hear From The Experts
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md border border-[#23c6854f] w-80 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 mb-3">"{testimonial.feedback}"</p>
            <p className="text-sm font-semibold text-[#23C686]">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
