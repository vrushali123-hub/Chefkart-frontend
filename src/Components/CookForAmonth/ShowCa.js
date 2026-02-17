import React from 'react';

// Sample data array
const cardData = [
  {
    id: 1,
   
  title: "Professional Cooks",
  description: "Professionally trained and background-verified cooks for safe, hygienic, and quality home cooking.",
  image: "https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg",
  },
  {
    id: 2,
    title: "Easy Booking",
    description: "Book a trusted cook quickly and conveniently with our simple and hassle-free process.",
     image: "https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg",
  },
  {
    id: 3,
    title: "Effortless Replacements",
    description: "Get one free, no-questions-asked cook replacement for complete peace of mind.",
    image: "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
  },
  {
    id: 4,
    title: "Prompt Support",
  description: "Receive quick assistance and timely support whenever you need help with your booking.",
  image: "https://storage.googleapis.com/chefkart-strapi-media/prompt_support_ca831687ac.svg",
  },
];

const ShowCa = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="border-2 rounded-lg border-gray-200 border-opacity-50 p-6 flex flex-col sm:flex-row items-center bg-white"
            >
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-2xl bg-[#FFF2F2] flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  width="80"
                  height="80"
                />
              </div>
              <div className="flex-grow ml-4">
                <h2 className="text-gray-900 text-1xl sm:text-xl title-font font-bold mb-2">
                  {card.title}
                </h2>
                <p className="leading-relaxed text-lg sm:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCa;
