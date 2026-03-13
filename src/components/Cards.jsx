import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <Link to={`/book/${item._id}`}> 
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">

        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-52 object-cover"
          />

          <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {item.name}
          </h2>

          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {item.title}
          </p>

          <div className="flex items-center mt-3 text-yellow-400 text-sm">
            ⭐⭐⭐⭐☆
            <span className="text-gray-500 ml-2">(4.5)</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-pink-500">
              ₹{item.price}
            </span>

            <button   className="bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-700">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;