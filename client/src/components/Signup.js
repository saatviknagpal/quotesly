import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SIGNUP_USER } from "../graphqloperations/mutations";
import Spinner from "./Spinner";
export default function Signup() {
  const [formData, setFormData] = useState({});
  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error.message);
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser({
      variables: {
        userNew: formData,
      },
    });
  };

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-11/12 p-6 m-auto bg-white rounded-xl shadow-xl lg:max-w-xl">
          {error && (
            <div className="text-white text-center p-4 bg-black font-bold">
              {error.message}
            </div>
          )}
          {data && data.user && (
            <div className="text-white text-center p-4 bg-green-500 font-bold">
              {data.user.firstName} is SignedUp. You can login now
            </div>
          )}
          <h1 className="text-3xl pt-3 font-semibold text-center text-red-600">
            Signup
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-800"
              >
                First Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-800"
              >
                Last Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="lastName"
                placeholder="Enter your last name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-8 text-sm font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-red-600 hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
