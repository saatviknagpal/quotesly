import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_BY_ID } from "../graphqloperations/queries";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

export default function OtherUserProfile() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userid: id,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error.message);
  }

  return (
    <>
      <div className="relative flex flex-col min-h-screen overflow-hidden text-center py-20 space-y-5">
        <div className="flex flex-col justify-center items-center">
          <img
            src={`https://ui-avatars.com/api/?background=random&name=${data?.user.firstName}+${data?.user.lastName}`}
            alt="avatar"
            className="mix-blend-multiply h-44 w-44 rounded-full drop-shadow-lg  "
          />{" "}
          <h5 className="mt-3">
            {data?.user.firstName + " " + data?.user.lastName}
          </h5>
          <h5>Email - {data?.user.email}</h5>
        </div>
        <h3 className="text-2xl font-bold">{data?.user?.firstName}'s quotes</h3>

        {data?.user.quotes.map((data, index) => {
          return (
            <blockquote
              key={index}
              className="p-4 my-4 border-l-8 border-red-500 bg-gray-200 w-full md:w-1/2 mx-auto"
            >
              <p className="text-xl italic font-medium leading-relaxed text-gray-900 ">
                {data?.name}
              </p>
            </blockquote>
          );
        })}
      </div>
    </>
  );
}
