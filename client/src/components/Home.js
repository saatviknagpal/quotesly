import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_QUOTES } from "../graphqloperations/queries";
import Quote from "./Quote";
import Spinner from "./Spinner";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error.message);
  }

  console.log(data);

  return (
    <>
      <div className="relative flex flex-col min-h-screen overflow-hidden text-center pt-20 space-y-5">
        {data.quotes.map((data, index) => {
          return <Quote data={data} key={index} />;
        })}
      </div>
    </>
  );
}
