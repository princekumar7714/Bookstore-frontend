import React, { useState } from "react";
import banner from "../../public/Banner.png";

function Banner() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setMessage("⚠️ Please enter your email first.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    setMessage("✅ Welcome! You can now explore free books.");
    setEmail("");
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">

        {/* LEFT CONTENT */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">

          <div className="space-y-8">

            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Discover Amazing{" "}
              <span className="text-pink-500">Books & Learning Resources</span>
            </h1>

            <p className="text-sm md:text-lg text-gray-600">
              Welcome to our online Book Store platform where you can explore 
              a wide collection of programming, development, and learning books. 
              Start with our **free books section** and improve your knowledge 
              in web development, MERN stack, and modern technologies.
            </p>

            {/* EMAIL INPUT */}
            <label className="input input-bordered flex items-center gap-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793L8 8.5l7-3.207V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11A1.5 1.5 0 0 0 15 11.5V6.954Z" />
              </svg>

              <input
                type="email"
                className="grow"
                placeholder="Enter your email to get started"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            {message && (
              <p className="text-sm font-medium text-green-600">{message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="btn mt-6 btn-secondary hover:scale-105 transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 drop-shadow-2xl"
            alt="Book learning banner"
          />
        </div>

      </div>
    </>
  );
}

export default Banner;