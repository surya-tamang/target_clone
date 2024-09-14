import React, { useState } from "react";
import BlackScreen from "./BlackScreen";
import PrimaryNav from "./PrimaryNav";

const Header = () => {
  return (
    <header className="relative z-20">
      {/* Top navigation */}
      <div className="bg-red text-white flex justify-between px-8 py-3 text-sm z-20">
        <div className="flex gap-8">
          <button className="hover:bg-dark_red py-1 px-3 rounded-3xl">
            <i className="fa-solid fa-location-dot mr-2"></i>Ship to
          </button>
          <button className="hover:bg-dark_red py-1 px-3 rounded-3xl">
            <i className="fa-solid fa-building mr-2"></i> Cedar Rapid South
          </button>
        </div>
        <nav aria-label="secondary navigation">
          <ul className="flex gap-6">
            <li className="hover:underline cursor-pointer">
              Target circle <sup>tm</sup>
            </li>
            <li className="hover:underline cursor-pointer">
              Target circle <sup>tm</sup>Card
            </li>
            <li className="hover:underline cursor-pointer">
              Target circle 360<sup>tm</sup>
            </li>
            <li className="hover:underline cursor-pointer">Registry</li>
            <li className="hover:underline cursor-pointer">Weekly ad</li>
            <li className="hover:underline cursor-pointer">Find stores</li>
          </ul>
        </nav>
      </div>
      {/* main navigation  */}
      <div className="bg-white flex items-center gap-10 px-10 py-3 sticky top-0 text-black shadow-md z-20">
        <PrimaryNav />
      </div>
    </header>
  );
};

export default Header;
