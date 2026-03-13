import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`https://bookstore-backend-u6cu.onrender.com/book/${id}`);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, [id]);

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading Book...
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Book Image */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center">
          <img
            src={book.image}
            alt={book.name}
            className="h-[400px] object-contain rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Book Info */}
        <div>

          {/* Category */}
          <span className="bg-pink-500 text-white text-sm px-3 py-1 rounded-full">
            {book.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold mt-4">
            {book.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center mt-3 text-yellow-400 text-lg">
            ⭐⭐⭐⭐☆
            <span className="text-gray-500 ml-2 text-sm">(4.5 Reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            {book.title}
          </p>

          {/* Price */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-pink-500">
              ₹{book.price}
            </h2>
            <p className="text-green-600 text-sm mt-1">
              Limited time offer
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition"
              onClick={() => alert(`You purchased ${book.name}`)}
            >
              Buy Now
            </button>

            <button
              className="border border-pink-500 text-pink-500 px-6 py-3 rounded-md hover:bg-pink-500 hover:text-white transition"
            >
              Add to Cart
            </button>

          </div>

          {/* Extra Info */}
          <div className="mt-10 border-t pt-6 text-gray-500 text-sm space-y-2">
            <p>📚 Category: {book.category}</p>
            <p>🚚 Instant digital access</p>
            <p>⭐ Trusted by 10,000+ readers</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookDetails;