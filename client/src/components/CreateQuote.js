import React, { useState } from "react";

export default function CreateQuote() {
  const [quote, setQuote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden">
        <div className="w-11/12 p-6 m-auto bg-white rounded-xl shadow-xl lg:max-w-xl space-y-5">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Add a new quote
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <textarea
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="quote"
              value={quote}
              placeholder="Write your quote here"
              onChange={(e) => e.target.value}
            />
            <button
              type="submit"
              className="bg-green-300 text-xl p-3 rounded-full font-bold text-white"
            >
              Create Quote
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
