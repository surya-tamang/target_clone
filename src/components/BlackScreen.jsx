import React from "react";

const BlackScreen = ({ showBox }) => {
  return (
    <div
      className={`${
        showBox ? "md:block" : "hidden"
      } blackscreen w-full h-screen absolute left-0 md:top-20 z-0`}
    ></div>
  );
};

export default BlackScreen;
