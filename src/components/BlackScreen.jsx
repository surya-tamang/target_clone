import React from "react";

const BlackScreen = ({ showBox }) => {
  return (
    <div
      className={`${
        showBox ? "block" : "hidden"
      } blackscreen w-full h-screen absolute left-0 top-16 z-0`}
    ></div>
  );
};

export default BlackScreen;
