import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <nav className="bg-red-500 p-4 fixed w-full z-10 top-0">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/">
            <h1 className="text-white font-medium">Quotesly</h1>
          </Link>
        </li>
        <li className="flex">
          {token ? (
            <>
              <Link to="/profile" className="text-white mr-4">
                Profile
              </Link>
              <Link to="/create" className="text-white mr-4">
                Create
              </Link>

              <Link
                to="/login"
                className="text-white mr-4"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("refreshedProfilePage");
                }}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">
                Login
              </Link>
              <Link to="/signup" className="text-white mr-4">
                Signup
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}
