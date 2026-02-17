
import React from "react";

const Cater = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        ChefKart से क्यों जुड़ें?
      </h2>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Card 1 */}
        <div className="text-center">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FEarn_Money_c09cff227a.webp&w=1920&q=75"
            alt="Regular Income"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-6 mb-4">
            नियमित पैसे
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            अपनी दैनिक कमाई के पैसे नियमित रूप से उसी दिन पाएं।
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBe_your_own_boss_1_ff6c9822fd.webp&w=1920&q=75"
            alt="Respectful Work"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-6 mb-4">
            सम्मान से काम
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            समाज में एक पेशेवर कुक के रूप में सम्मान और पहचान प्राप्त करें।
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_support_26823bc403.webp&w=1920&q=75"
            alt="Training Support"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-6 mb-4">
            ट्रेनिंग एवं सहायता
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            हमारे शेफ से ट्रेनिंग लें, नए पकवान बनाना सीखें।
            किसी भी समय में तुरंत सहायता पाएं।
          </p>
        </div>

      </div>
    </div>
  );
};

export default Cater;


