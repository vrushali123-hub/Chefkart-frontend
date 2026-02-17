import React, { useState } from "react";
import Slider from "react-slick";

const GalleryWithState = () => {
  // State to manage the zoomed image
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(0);

  const images = [
    "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_08_852bd73dec.png",
    "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_03_980b84a7ff.png",
    " https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_23_be73f77f6f.png",
    "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_20_fb2b9b8032.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_07_dd8dd8a4b0.png",
    "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_04_24e9f6a36d.png",
    " https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_05_56785e7856.png",
    "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_25_6ed7e4df8e.png ",
    " https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_10_5ddf0b07ef.png",
    " https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_09_40fd87e1bd.png",
    " https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_20_fb2b9b8032.png",
    " https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_14_2f200a48bb.png",
     "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_24_9f0f37936a.png ",
    
  ];

  const settings = {
    slidesToShow: 3, // Show 3 images at once
    slidesToScroll: 1, // Scroll one image at a time
    draggable: true, // Enable mouse dragging
    centerMode: true, // Centers the active image
    focusOnSelect: true, // Makes image clickable to zoom
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2, // Show 2 images at once
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 image at a time
        },
      },
    ],
  };

  // Handle Zoom
  const handleZoom = (index) => {
    setZoomedIndex(index);
    setIsZoomed(true);
  };

  // Handle Zoom Navigation
  const handleNextZoom = () => {
    setZoomedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevZoom = () => {
    setZoomedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#f1f1f1] py-12">
      <div className="container mx-auto max-w-7xl px-5">
        <h1 className="text-3xl font-bold mb-8 text-center"> Gallery</h1>

        {/* Image Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="px-8" // Add padding to create spacing between slides
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-64 rounded-md object-cover cursor-pointer"
                onClick={() => handleZoom(index)}
              />
            </div>
          ))}
        </Slider>

        {/* Zoomed Image Modal */}
        {isZoomed && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-lg"
              onClick={() => setIsZoomed(false)}
            >
              Close
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg"
              onClick={handlePrevZoom}
            >
              Prev
            </button>

            {/* Zoomed Image */}
            <div className="relative w-full sm:w-2/3 lg:w-1/2 max-h-1/2 flex justify-center items-center">
              <img
                src={images[zoomedIndex]}
                width="500px"
                alt={`Zoomed ${zoomedIndex}`}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Next Button */}
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg"
              onClick={handleNextZoom}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryWithState;



