import React from "react";

const StatsSections = () => {
  return (
    <section className="text-gray-600 body-font">
      
      {/* Stats Section */}
      <div className="container mx-auto flex justify-center py-12">
        <div className="flex flex-wrap justify-around w-full">
          
          {/* Stats Card 1 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2">3M+</div>
            <p className="text-gray-600 text-lg">Meals cooked with love</p>
          </div>

          {/* Stats Card 2 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2">4500+</div>
            <p className="text-gray-600 text-lg">Verified & Trained Cooks</p>
          </div>

          {/* Stats Card 3 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2">10K+</div>
            <p className="text-gray-600 text-lg">Households served</p>
          </div>

        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto flex justify-center pb-16">
        <div className="relative w-[80%] h-[500px] rounded-3xl overflow-hidden shadow-2xl">

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source
              src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <h2 className="text-white text-4xl font-bold mb-4">
              Your Safety, Our Top-Priority
            </h2>
            <p className="text-white text-lg max-w-2xl">
              All our cooks follow the food safety guidelines & adhere to hygienic practices.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default StatsSections;
