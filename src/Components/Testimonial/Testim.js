/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Diwakar Kumar ",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=1920&q=75",
    text: "I like cooking my own meals, but when I am occupied with work, I book Chefit. It’s a much-required service that is convenient and more affordable than ordering online.", 
  },
  {
    id: 2,
    name: "हफीजुद्दीन मियां",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_05_55cf1d4be3.webp&w=1920&q=75",
    text: "बेटे के इलाज के दौरान मैंने जो भी सहायता मांगी, मुझे मिली। मेरे कठिन समय में मेरा परिवार की तरह साथ दिया। इसके लिए ChefKart की जितनी भी प्रशंसा की जाए कम है।",
  },
  {
    id: 3,
    name: "Tarun Gehlaut ",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_05_686a6d403a.png&w=1920&q=75",
    text:"I joined a home with a ChefKart cook 5 months ago. It has been very easy for me to be onboarded into the process and to manage my cook timings, etc.",
    },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#2f4f3f] text-white rounded-3xl p-8 pt-16 shadow-lg"
          >
            {/* Profile Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-4 text-yellow-400 text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Text */}
            <p className="text-center text-lg leading-relaxed mb-6">
              "{item.text}"
            </p>

            {/* Line */}
            <div className="w-10 h-[2px] bg-gray-300 mx-auto mb-4"></div>

            {/* Name */}
            <h3 className="text-center font-semibold text-lg">
              {item.name}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonial;


