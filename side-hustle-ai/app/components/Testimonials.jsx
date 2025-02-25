// CustomerTestimonials.js
import React from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    feedback:
      "This platform helped me start my first side hustle with ease! The guidance and tips were invaluable.",
    image: "/customer1.jpg",
  },
  {
    name: "Samantha Lee",
    feedback:
      "I found the perfect side hustle idea here and turned it into a full-time income. Highly recommended!",
    image: "/customer2.jpg",
  },
  {
    name: "David Martinez",
    feedback:
      "Clear, concise, and incredibly helpful! The investment breakdowns made it easy to choose the right hustle.",
    image: "/customer3.jpg",
  },
];

export default function CustomerTestimonials() {
  return (
    <div className="max-w-4xl mx-auto p-12 text-center">
      <h2 className="text-3xl font-bold text-[#202f46] mb-6">
        What Our Users Say
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
