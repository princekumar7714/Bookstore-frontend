
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const [authUser] = useAuth();
  const navigate = useNavigate();

  // Search state
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  // Theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/course">Books</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 dark:bg-slate-800 dark:text-white ${
          sticky
            ? "shadow-md bg-base-200 dark:bg-slate-700 duration-300 transition-all"
            : ""
        }`}
      >
        <div className="navbar">

          {/* Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown">

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>

            </div>

            <Link
              to="/"
              className="text-2xl font-bold cursor-pointer"
            >
              BookStore
            </Link>

          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Right Section */}
          <div className="navbar-end space-x-3">

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="hidden md:block"
            >
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search books..."
                  className="grow outline-none px-1 dark:bg-slate-900 dark:text-white"
                />

                <button type="submit">
                  🔍
                </button>

              </label>
            </form>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="text-xl"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>

            {/* Login / Logout */}
            {authUser ? (
              <Logout />
            ) : (
              <div>

                <button
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>

                <Login />

              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;

