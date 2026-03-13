import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import Contact from "./components/Contact";
import BookDetails from "./components/BookDetails";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/book/:id" element={<BookDetails />} /> */}
          <Route path="/search/:keyword" element={<SearchBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
