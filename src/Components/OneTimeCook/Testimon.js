import React from "react";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Diwakar Kumar",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=1920&q=75",
   text: "I like cooking my own meals, but when I am occupied with work, I book Chefit. It's a much-required service that is convenient and more affordable than ordering online.",
  },
  {
    id: 2,
    name: "Rohan Pal",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_testimonial_5274df66dc.webp&w=1920&q=75",
    text: "I like cooking my own meals, but when I am occupied with work, I book Chefit. It's a much-required service that is convenient and more affordable than ordering online.",
 
  },
  {
    id: 3,
    name: "Pooja Sachdeva",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_04_bc36b188a4.webp&w=1920&q=75",
    text: "I like cooking my own meals, but when I am occupied with work, I book Chefit. It's a much-required service that is convenient and more affordable than ordering online.",


  },
  {
    id: 4,
    name: "Akhil Desai",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_01_25aa96ff9c.webp&w=1920&q=75",
  text: "Pretty impressed by the personalised approach. The cook prepared delicious & nutritious homemade food according to my specific dietary needs and preferences. Will definitely book again!",
  
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true} // 🔥 Infinite loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
         <div className="relative bg-[#2f4f3f] text-white rounded-3xl p-8 pt-20 shadow-lg min-h-[380px] flex flex-col justify-between">

                {/* Profile Image */}
<div className="relative bg-[#2f4f3f] text-white rounded-3xl p-8 pt-24 shadow-lg min-h-[25px] flex flex-col justify-between">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover"

                

                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4 text-yellow-400 text-lg">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="text-center text-lg mb-6">
                  "{item.text}"
                </p>

                <div className="w-10 h-[2px] bg-gray-300 mx-auto mb-4"></div>

                <h3 className="text-center font-semibold text-lg">
                  {item.name}
                </h3>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Testimonial;
