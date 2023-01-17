import React from "react";

export default function Profile() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen overflow-hidden text-center pt-10 space-y-5">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt="avatar"
            className="mix-blend-multiply h-44 w-44 rounded-full drop-shadow-lg  "
          />{" "}
          <h5>Saatvik</h5>
          <h5>Email - saatvik@gmail.com</h5>
        </div>
        <h3 className="text-2xl font-bold">Your quotes</h3>

        <blockquote class="p-4 my-4 border-l-8 border-red-500 bg-gray-200 w-full md:w-1/2 mx-auto ">
          <p class="text-xl italic font-medium leading-relaxed text-gray-900 ">
            "If it works, don't touch it"
          </p>
        </blockquote>
      </div>
    </>
  );
}
