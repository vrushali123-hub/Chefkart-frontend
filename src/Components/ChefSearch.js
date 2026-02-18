/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChefDirectory = () => {
  const navigate = useNavigate();

  // ✅ Static Chef Data (No Backend)
  const [chefs] = useState([
    {
      _id: "1",
      name: "Mr. Monu",
      phone: "+91-76XXXXXXXX",
      city: "Gurgaon",
      area: "Sector 53",
      locality: "DLF Exclusive Floor",
      experience: 10,
      starRating: 4.5,
      totalRatings: 342,
      profilepic:
        "https://storage.googleapis.com/chefkartimages/cook-profile/2146-2353-Monu.png",
    },
    {
      _id: "2",
      name: "Mr. Shankar Prasad",
      phone: "91-95XXXXXXXX",
      city: "Gurgaon",
      area: "Sector 65",
      locality: "Emerald Premier Floor",
      experience: 9,
      starRating: 4.8,
      totalRatings: 181,
      profilepic:
        "https://storage.googleapis.com/chefkartimages/cook-profile/14787-shan.png",
    },

    {
      _id: "3",
      name: " Ms. Sangita Dev",
      phone: "+91-99XXXXXXXX",
      city: "Gurgaon",
      area: "Sector 41, ",
      locality: "Block C,South city 1, Gurgaon, 3+ locations",
      experience: 10,
      starRating: 4.8,
      totalRatings: 566,
      profilepic: "https://storage.googleapis.com/chefkartimages/cook-profile/38849-Sangita.png",
    },

    
    {
      _id: "4",
      name: " Mr.Santosh Ram",
      phone: "+91-90XXXXXXXX",
      city: "Gurgaon",
      area: " Sector 56 ",
      locality: " HUDA CGHS Housing,7+ locations ",
      experience: 7,
      starRating: 4.6,
      totalRatings: 484,
      profilepic: "https://storage.googleapis.com/chefkartimages/cook-profile/47770-santosh.png",
    },

  ]);

  // ✅ Search State
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    city: "",
    area: "",
    locality: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Filtering Logic Same
  const filteredChefs = chefs.filter((chef) => {
    const matchesGlobalSearch =
      chef.name.toLowerCase().includes(search.toLowerCase()) ||
      chef.phone.includes(search);

    const matchesCity =
      filters.city === "" ||
      chef.city.toLowerCase().includes(filters.city.toLowerCase());

    const matchesArea =
      filters.area === "" ||
      chef.area.toLowerCase().includes(filters.area.toLowerCase());

    const matchesLocality =
      filters.locality === "" ||
      chef.locality.toLowerCase().includes(filters.locality.toLowerCase());

    return (
      matchesGlobalSearch &&
      matchesCity &&
      matchesArea &&
      matchesLocality
    );
  });

  return (
    <div className="p-4 bg-gray-100 min-h-screen mt-16">
      {/* 🔍 Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Global Search..."
          className="p-2 border rounded shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="Search by City"
          className="p-2 border rounded shadow-sm"
          value={filters.city}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="area"
          placeholder="Search by Area"
          className="p-2 border rounded shadow-sm"
          value={filters.area}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="locality"
          placeholder="Search by Locality"
          className="p-2 border rounded shadow-sm"
          value={filters.locality}
          onChange={handleFilterChange}
        />
      </div>

      {/* 👨‍🍳 Trending Cooks */}
      <h1 className="text-xl font-bold mb-4">Trending cooks</h1>

      <div className="space-y-6">
        {filteredChefs.map((chef) => (
          <div
            key={chef._id}
            className="flex items-center bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition cursor-pointer"
            onClick={() => navigate(`/chef/${chef._id}`)}
          >
            {/* Image */}
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-orange-500 flex-shrink-0">
              <img
                src={chef.profilepic}
                alt={chef.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">
                  {chef.name}
                </h3>

                <div className="text-sm text-gray-600">
                  ⭐ {chef.starRating}
                  <span className="ml-1 text-gray-400">
                    ({chef.totalRatings} Ratings)
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {chef.locality}, {chef.area}, {chef.city}
              </p>

              <div className="flex items-center text-sm text-gray-600 mt-2 gap-6">
                <div className="text-green-600">
                  📞 {chef.phone}
                </div>

                <div className="text-gray-500">
                  {chef.experience} Years of Exp
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDirectory;
