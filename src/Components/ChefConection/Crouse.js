import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "ChefKart का हिस्सा बनें",
    description:
      "हमसे जुड़े 4500 से भी ज्यादा कुक्स का हिस्सा बनें और अपने कौशल को आगे बढ़ाएं।",
    image:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_02_6c8df4e377.webp&w=1920&q=75",
  },
  {
    title: "अपना करियर बढ़ाएं",
    description:
      "ChefKart के साथ जुड़कर अपने कुकिंग स्किल्स को एक नई ऊंचाई दें।",
    image:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_01_f31e87e92e.webp&w=1920&q=75",
  },
  {
    title: "आज ही जुड़ें",
    description:
      "ChefKart के साथ अपने भविष्य को सुरक्षित और सफल बनाएं।",
    image:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_03_e679e84c56.webp&w=1920&q=75",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="w-full h-full bg-black/60 flex items-center">
              <div className="text-white px-6 md:px-20 w-full md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl">
                  {slide.description}
                </p>
                <button className="mt-8 bg-orange-500 px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition">
                  ChefKart से जुड़ें
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-4 rounded-full text-white z-20"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-4 rounded-full text-white z-20"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;





