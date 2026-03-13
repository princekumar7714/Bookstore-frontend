import React from "react";
import { FaBook, FaUsers, FaRocket } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          About Our BookStore
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform provides high quality books and courses for learners,
          developers and readers around the world. We believe knowledge should
          be accessible to everyone.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:scale-105 transition duration-300">
          <FaBook className="text-4xl text-purple-500 mx-auto mb-4"/>
          <h2 className="text-xl font-semibold mb-2">Quality Books</h2>
          <p className="text-gray-600">
            We provide high quality books and learning materials for students
            and developers.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:scale-105 transition duration-300">
          <FaUsers className="text-4xl text-purple-500 mx-auto mb-4"/>
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <p className="text-gray-600">
            Thousands of learners join our platform to improve their knowledge
            and career.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:scale-105 transition duration-300">
          <FaRocket className="text-4xl text-purple-500 mx-auto mb-4"/>
          <h2 className="text-xl font-semibold mb-2">Fast Learning</h2>
          <p className="text-gray-600">
            Our modern platform provides a smooth and fast learning experience.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;