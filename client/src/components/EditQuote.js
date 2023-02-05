import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CREATE_QUOTE, EDIT_QUOTE } from "../graphqloperations/mutations";
import {
  GET_ALL_QUOTES,
  GET_MY_PROFILE,
  GET_QUOTE_BY_ID,
} from "../graphqloperations/queries";
import Spinner from "./Spinner";

export default function EditQuote() {
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_QUOTE_BY_ID, {
    refetchQueries: [GET_QUOTE_BY_ID, `getQuoteById`],
    variables: {
      quoteid: id,
    },
  });

  const [editQuote, { data: updatedData }] = useMutation(EDIT_QUOTE, {
    refetchQueries: [
      GET_ALL_QUOTES,
      GET_MY_PROFILE,
      `getAllQuotes`,
      `getMyProfile`,
      `getQuoteById`,
    ],
  });

  const [quote, setQuote] = useState("");

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error.message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editQuote({
      variables: {
        updateUser: {
          _id: id,
          name: quote,
        },
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
          {updatedData && (
            <div className="text-white text-center p-4 bg-green-500 font-bold">
              {updatedData?.editQuote}
            </div>
          )}
          <h1 className="text-2xl font-bold text-center text-black">
            Edit your quote
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5 space-x-5">
            <textarea
              type="text"
              className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="quote"
              value={quote === "" ? data?.quote.name : quote}
              placeholder="Write your quote here"
              onChange={(e) => setQuote(e.target.value)}
            />

            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
