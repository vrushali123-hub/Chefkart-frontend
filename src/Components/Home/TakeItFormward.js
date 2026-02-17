/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TakeItForward = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">
        {/* Video Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <video
            src="https://storage.googleapis.com/chefkart-strapi-media/public/AppDemoForWebsite.mp4"
            controls
            className="h-96 w-52 rounded-lg shadow-md"
          ></video>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's take it forward
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            This is as easy as it gets! Good cooks are just a click away. <br />
            Download the App and get started.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {/* App Store Button */}
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-lg flex items-center shadow-md hover:bg-gray-800"
            >
              <img
                src= "https://storage.googleapis.com/chefkart-strapi-media/app_store_icon_555c3446a1.svg"
                alt="App store"
                  className="h-12 w-auto"

                // className="w-6 h-6 mr-2"
              />
              
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-lg flex items-center shadow-md hover:bg-gray-800"
            >
              <img
                src= "https://storage.googleapis.com/chefkart-strapi-media/play_icon_358c0e85c1.svg" 
                alt="Google play "
                  className="h-12 w-auto"

              />
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeItForward;


