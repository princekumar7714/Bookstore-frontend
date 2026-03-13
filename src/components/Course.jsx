import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {

  const [book, setBook] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-u6cu.onrender.com/book");
        setBook(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBook();
  }, []);

  // Search Filter
  const filteredBooks = book.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

        {/* HEADER SECTION */}
        <div className="mt-28 items-center justify-center text-center">

          <h1 className="text-2xl md:text-4xl font-bold">
            Explore Our <span className="text-pink-500">Book Collection</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Welcome to our digital bookstore platform where you can explore
            various books related to programming, web development, and modern
            technologies. This project is built using the MERN Stack and allows
            users to discover both free and premium learning resources to grow
            their technical skills.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Search books..."
              className="border px-4 py-2 rounded-md w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-300 shadow-md">
              Back to Home
            </button>
          </Link>
        </div>

        {/* BOOK INFO */}
        <div className="mt-10 text-center text-gray-500">
          {loading ? "Loading books..." : `${filteredBooks.length} Books Available`}
        </div>

        {/* BOOK GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {filteredBooks.map((item) => (
            <div
              key={item._id}
              className="transform hover:scale-105 transition duration-300"
            >
              <Cards item={item} />
            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Course;