import React from "react";

const FoodBanner1 = () => {
  return (
  <div className="relative w-full h-[350px]">
    
      {/* Background Image */}
      <img
        src="/banner.png"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      {/* <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          What are you waiting for, when it’s
        </h2> */}
        {/* <p className="text-6xl font-bold text-orange-500 mt-4">
          Good Food. Good <br /> People Good Life.
        </p>
      </div> */}

    </div>
  );
};

export default FoodBanner1;



