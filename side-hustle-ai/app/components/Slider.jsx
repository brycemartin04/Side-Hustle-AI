"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";

const facts = [
  "57% of Americans have a side hustle.",
  "The average side hustle earns $1,122 per month.",
  "Freelancing makes up 36% of the U.S. workforce.",
  "Dropshipping can start with as little as $100.",
  "Social media influencers earn up to $5,000 per month.",
  "Affiliate marketers can earn passive income while they sleep.",
  "Etsy sellers made over $13 billion in sales last year.",
  "YouTube creators can monetize videos with just 1,000 subscribers.",
];

export default function SideHustleFactsSlider() {
  return (
    <div className="py-6 -mt-14 mb-8">
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        {facts.map((fact, index) => (
          <Slider.Slide key={index}>
            <div
              className="border-[#23C686] border-[.5px] text-[#202f46] bg-white shadow-lg rounded-lg m-4 flex items-center justify-center text-center"
              style={{
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "10px",
                whiteSpace: "normal",
                lineHeight: "1.2rem",
              }}
            >
              {fact}
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}
