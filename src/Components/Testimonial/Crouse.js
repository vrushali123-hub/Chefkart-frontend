

import React from "react";

const Carousel3 = () => {
  const slides = [
    {
      title: "What People Think About Us",
      bgImage: "https://previews.123rf.com/images/kungverylucky/kungverylucky1508/kungverylucky150800026/43589161-many-of-international-food-on-the-white-table.jpg",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex items-center justify-center text-white bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[0].bgImage})`,
        }}
      >
        {/* Text Section */}
        <div className="text-center p-6 md:p-16  rounded-lg">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-3">
            What People Think About Us
          </h1>
          

          <div className="mt-6">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel3;







