/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Investors = () => {
  const [investors, setInvestors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 Dummy Data
  const dummyData = [
    {
       name : "Mukul Singhal",
      title: "Co-founder & Partner at Pravega Venture",
      description: "ChefKart is driven by the idea to digitise an essential service that is largely unorganised. They are the pioneers in streamlining an industry with tremendous untapped market potential",
      image: " https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPravega_logo_e65d821b25.webp&w=1920&q=75"
    },
    {
      name: 'Titan Capita',
      title: 'Venture Capital Firm',
      description: 'Titan Capital is known to support exceptional entrepreneurs who aim to make a significant impact on India and the world,ChefKart focus on providing trained verified and professional cooks to busy professionals and families aligns with the firms commitment to investing in businesses that promote positive lifestyle changes',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FTitan_d8b7827ada.webp&w=1920&q=75'
    },
    {
      name: 'Deepinder Goyal',
      title: 'Founder & CEO, Zomato',
      description: 'Deepinder Goyal is the founder and CEO of Zomato, one of the largest food tech companies in India. As an investor of Chefkart, Goyal is backing a promising idea to offer authentic and affordable meals prepared in the comfort of one\'s home. His investment is a testament to the potential of Chefkart and its innovative approach to at-home cooking services.',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FGoyal_aa638560fb.webp&w=1920&q=75'
    
    }
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/investor/getinvestor")
      .then((res) => {
        setInvestors(res.data);
      })
      .catch(() => {
        setInvestors(dummyData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (investors.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === investors.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [investors]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16 w-full">

      {/* ✅ Blog Section Above Investors */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold mb-8">Blogs</h2>

        <div className="flex overflow-x-auto space-x-6">
          <div className="min-w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_01_d49831e21c.webp&w=1920&q=75"
              alt="blog"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm">Subi Kumari</p>
              <h3 className="text-2xl font-bold mt-2">
                How to find the best cook for home
              </h3>
              <div className="flex justify-between text-gray-400 text-sm mt-4">
                <span>February 10, 2023</span>
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Investors Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Investors
        </h2>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {investors.map((item, index) => (
          
           <div
  key={index}
  className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center justify-between"
>
  {/* LEFT SIDE */}
  <div className="lg:w-1/2 space-y-6">
    <p className="text-gray-600 text-lg leading-relaxed">
      “{item.description}”
    </p>

    <div>
      <h3 className="text-2xl font-semibold text-gray-800">
        {item.title}
      </h3>
      <p className="text-gray-500">
        {item.subtitle}
      </p>
    </div>
  </div>

  {/* RIGHT SIDE IMAGE CARD */}
  <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
    <div className="bg-black rounded-3xl w-[400px] h-[250px] flex items-center justify-center">
      <img
        src={item.image}
        alt={item.title}
        className="max-h-[120px] object-contain"
      />
    </div>
  </div>
</div>


            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Investors;
