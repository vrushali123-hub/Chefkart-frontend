import React from "react";

const FoodBanner1 = () => {
  return (
    <div className="relative h-[350px]  bg-center" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/01/32/61/13/360_F_132611338_8QF2IbLH0La8zcfbFYz3qg9HHNdX8Ze7.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          What's better than your favourite food?
        </h2>
        <p className="text-6xl font-bold text-orange-500 mt-4">
          Getting it cooked in<br/> your kitchen.
        </p>
      </div>

      {/* Floating Icons */}
      
      
    </div>
  );
};

export default FoodBanner1;




