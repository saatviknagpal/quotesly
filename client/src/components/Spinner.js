import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="spinner ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
