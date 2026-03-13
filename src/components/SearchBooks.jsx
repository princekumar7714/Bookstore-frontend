import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cards from "./Cards";

function SearchBooks() {

  const { keyword } = useParams();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {

    const getBooks = async () => {

      try {

        const res = await axios.get("https://bookstore-backend-u6cu.onrender.com/book");

        setBooks(res.data);

        const result = res.data.filter((book) =>
          book.name.toLowerCase().includes(keyword.toLowerCase())
        );

        setFilteredBooks(result);

      } catch (error) {
        console.log(error);
      }

    };

    getBooks();

  }, [keyword]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">

      <h1 className="text-3xl font-bold mb-10">
        Search Results for "{keyword}"
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {filteredBooks.length > 0 ? (

          filteredBooks.map((item) => (
            <Cards key={item._id} item={item} />
          ))

        ) : (

          <p className="text-xl text-gray-500">
            No books found
          </p>

        )}

      </div>

    </div>
  );
}

export default SearchBooks;