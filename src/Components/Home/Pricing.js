import React from "react";

const Pricing = () => {
  const pricingData = [
    {
      title: "Chefit: One-time cook",
      price: "Get a professional cook for one-time within 60 minutes",
      frequency: "",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste"
      ],
      buttonText1: "Book Now",
      buttonText: "Know More",
      note: "Starting from ₹399/ visit",
      popular: false
    },
    {
      title: "Chefit: One-time cook",
      price: "Get a professional cook for one-time within 60 minutes",
      frequency: "",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste"
      ],
      buttonText1: "Book Now",
      buttonText: "Know More",
      note: "Starting from ₹399/ visit",
      popular: false
    },
    {
      title: "Chefit: Chef for Party",
      price: "Get a professional cook for one-time within 60 minutes",
      frequency: "",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste"
      ],
      buttonText1: "Book Now",
      buttonText: "Know More",
      note: "Starting from ₹2000/ visit",
      popular: false
    },
    {
      title: "Chefit: Chef for Party",
      price: "Get a professional cook for one-time within 60 minutes",
      frequency: "",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste"
      ],
      buttonText1: "Book Now",
      buttonText: "Know More",
      note: "Starting from ₹2000/ visit",
      popular: false
    },
  ];

  return (
    <div>
      <section className="text-black bg-gradient-to-br from-gray-100 via-white to-gray-200 body-font overflow-hidden">
        <div className="container px-5 py-28 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Discover your perfect service
            </h1>
            <p className="text-gray-600 text-lg">
              Choose the plan that fits your needs perfectly
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {pricingData.map((plan, index) => (
              <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div
                  className={`h-full p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 flex flex-col relative overflow-hidden shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(255,115,0,0.4)] hover:-translate-y-3 hover:scale-105 transition-all duration-500 ${
                    plan.popular ? "ring-2 ring-orange-400" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 text-xs absolute right-0 top-0 rounded-bl-xl shadow-md">
                      POPULAR
                    </span>
                  )}

                  <h2 className="text-sm tracking-wider uppercase text-gray-500 font-semibold mb-3">
                    {plan.title}
                  </h2>

                  <h1 className="text-xl font-semibold text-gray-800 leading-snug pb-6 mb-6 border-b border-gray-200">
                    <span>{plan.price}</span>
                    {plan.frequency && (
                      <span className="text-lg ml-1 font-normal text-gray-500">
                        {plan.frequency}
                      </span>
                    )}
                  </h1>

                  {plan.features.map((feature, idx) => (
                    <p key={idx} className="flex items-center text-gray-700 mb-4">
                      <span className="w-6 h-6 mr-3 inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full flex-shrink-0 shadow-md">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}

                  <button
                    className="flex items-center justify-center mt-auto text-white py-3 px-6 w-full rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-300 shadow-md"
                  >
                    {plan.buttonText}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>

                  <p className="text-sm text-gray-500 mt-4 font-medium text-center">
                    {plan.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
