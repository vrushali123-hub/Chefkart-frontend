
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Custom Arrow Components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md"
      onClick={onClick}
    >
      <FaChevronRight className="text-black text-lg" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md"
      onClick={onClick}
    >
      <FaChevronLeft className="text-black text-lg" />
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 px-6">
      
      {/* ✅ Heading same size */}
      <h1 className="text-5xl text-center font-bold mb-12">
        एक प्रमुख पहल
      </h1>

      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          
          <div className="px-3">
            <img
              src="/slider1.png"
              alt="Slide 1"
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>

          <div className="px-3">
            <img
              src="/slider2.png"
              alt="Slide 2"
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>

          <div className="px-3">
            <img
              src="/slider3.png"
              alt="Slide 3"
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>

          <div className="px-3">
            <img
              src="/slider4.png"
              alt="Slide 4"
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>
     
         
        <div>
          <img src="/slider6.png" 
          alt="Slide 6" 
         className="w-full h-80 object-contain rounded-lg" />
        </div>

          <div>
          <img src="/slider5.png" 
          alt="Slide 5" 
          className="w-full h-80 object-contain rounded-lg"/>
         
        </div>




        </Slider>
      </div>
    </div>
  );
}



