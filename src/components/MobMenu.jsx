import React from "react";

const MobMenu = () => {
  return (
    <div className="absolute md:hidden w-96 h-screen top-0 bg-black left-0">
      <div>
        <h1>Menu</h1>
        <i className="fa-solid fa-x text-black"></i>
      </div>
    </div>
  );
};

export default MobMenu;
