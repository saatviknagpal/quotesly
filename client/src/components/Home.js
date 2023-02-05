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

  return (
    <>
      <div className="relative flex flex-col min-h-screen overflow-hidden text-center py-20 space-y-10">
        {data?.quotes?.length !== 0 ? (
          data?.quotes
            .slice()
            .reverse()
            ?.map((data, index) => {
              return <Quote data={data} key={index} />;
            })
        ) : (
          <p>No Quotes Available </p>
        )}
      </div>
    </>
  );
}
