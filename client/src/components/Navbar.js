import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 p-4 fixed w-full z-10 top-0">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/">
            <h1 className="text-white font-medium">Quotesly</h1>
          </Link>
        </li>
        <li className="flex">
          <Link to="/login" className="text-white mr-4">
            Login
          </Link>
          <Link to="/signup" className="text-white mr-4">
            Signup
          </Link>
          <Link to="/profile" className="text-white mr-4">
            Profile
          </Link>
          <Link to="/create" className="text-white mr-4">
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
}
