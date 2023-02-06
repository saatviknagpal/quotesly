import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../graphqloperations/mutations";
import { GET_MY_PROFILE } from "../graphqloperations/queries";
import Spinner from "./Spinner";
export default function Login() {
  const [formData, setFormData] = useState({});
  const [signinUser, { data, loading, error, client }] = useMutation(
    LOGIN_USER,
    {
      refetchQueries: [GET_MY_PROFILE, `getMyProfile`],
      onCompleted(data) {
        localStorage.setItem("token", data.user.token);
        client.resetStore();
        navigate("/profile");
      },
    }
  );
  const navigate = useNavigate();

  if (loading) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser({
      variables: {
        userSign: formData,
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
          <h1 className="text-3xl p-3 font-semibold text-center text-red-500">
            Login
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-red-500 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                className="block w-full px-4 py-2 mt-2 text-red-500 bg-white border rounded-md focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-red-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
