import React from "react";

const BlackScreen = ({ showBox }) => {
  return (
    <div
      className={`${
        showBox ? "block" : "hidden"
      }w-full h-screen bg-black opacity-50 absolute left-0 top-16 z-10`}
    ></div>
  );
};

export default BlackScreen;
