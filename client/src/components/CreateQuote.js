import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../graphqloperations/mutations";
import { GET_ALL_QUOTES } from "../graphqloperations/queries";
import Spinner from "./Spinner";

export default function CreateQuote() {
  const [quote, setQuote] = useState("");

  const [createQuote, { loading, data, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [`getAllQuotes`, `getMyProfile`],
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error.message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        name: quote,
      },
    });
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden">
        <div className="w-11/12 p-6 m-auto bg-white rounded-xl shadow-xl lg:max-w-xl space-y-5">
          {error && (
            <div className="text-white text-center p-4 bg-black font-bold">
              {error.message}
            </div>
          )}
          {data && (
            <div className="text-white text-center p-4 bg-green-500 font-bold">
              {data.quote}
            </div>
          )}
          <h1 className="text-2xl font-bold text-center text-black">
            Add a new quote
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <textarea
              type="text"
              className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="quote"
              value={quote}
              placeholder="Write your quote here"
              onChange={(e) => setQuote(e.target.value)}
            />
            <button
              type="submit"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create Quote
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
