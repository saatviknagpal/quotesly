import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DELETE_QUOTE } from "../graphqloperations/mutations";
import { GET_MY_PROFILE } from "../graphqloperations/queries";

import Spinner from "./Spinner";

export default function Profile() {
  const { loading, error, data } = useQuery(GET_MY_PROFILE);
  const [deleteData, { data: updatedData }] = useMutation(DELETE_QUOTE, {
    refetchQueries: [GET_MY_PROFILE, `getMyProfile`],
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("refreshedProfilePage")) {
      window.location.reload();
      localStorage.setItem("refreshedProfilePage", "true");
    }
  }, []);

  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error.message);
  }

  const handleDelete = (id) => {
    window.alert("Are you sure you want to delete this quote?");
    deleteData({
      variables: {
        delete: id,
      },
    });
  };

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
        <h3 className="text-2xl font-bold">Your quotes</h3>

        {data?.user.quotes.length !== 0 ? (
          data?.user.quotes
            .slice()
            .reverse()
            .map((data, index) => {
              return (
                <blockquote
                  key={index}
                  className="p-4 my-4 border-l-8 border-red-500 bg-gray-200 w-full md:w-1/2 mx-auto"
                >
                  <p className="text-xl italic font-medium leading-relaxed text-gray-900 ">
                    {data?.name}
                  </p>
                  <div className="flex items-end justify-end space-x-2">
                    <Link to={`/edit/${data?._id}`}>
                      <img
                        alt="edit_button"
                        src="https://www.pngfind.com/pngs/m/275-2755033_edit-png-file-on-phone-svg-edit-icon.png"
                        className="items-end justify-end flex w-6 h-6 cursor-pointer  drop-shadow-lg"
                      />
                    </Link>
                    <img
                      alt="edit_button"
                      src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png"
                      className="items-end justify-end flex w-6 h-6 cursor-pointer  drop-shadow-lg"
                      onClick={() => handleDelete(data?._id)}
                    />
                  </div>
                </blockquote>
              );
            })
        ) : (
          <a href="/create" className="newQuote w-max mx-auto">
            Create your first quote
          </a>
        )}
      </div>
    </>
  );
}
