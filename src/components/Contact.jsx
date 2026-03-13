import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "919090909993"; // your whatsapp number with country code

    const text = `Hello, my name is ${name}.
Email: ${email}
Message: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">

      <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaPhone className="text-purple-500 text-2xl"/>
            <p className="text-gray-700">+91 9090909993</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-500 text-2xl"/>
            <p className="text-gray-700">support@bookstore.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-500 text-2xl"/>
            <p className="text-gray-700">India</p>
          </div>

          <p className="text-gray-600 mt-6">
            Have questions about books or courses? Send us a message and our
            team will respond as soon as possible.
          </p>

        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleWhatsApp}
          className="bg-white shadow-xl rounded-xl p-8 space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message on WhatsApp
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;