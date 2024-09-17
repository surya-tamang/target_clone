import React from "react";

const SecondaryNav = () => {
  return (
    <div className="bg-red text-white flex justify-between px-4 py-3 text-sm relative">
      <div className="flex gap-8 text-xs">
        <button className="hover:bg-dark_red py-1 px-3 rounded-3xl">
          <i className="fa-solid fa-location-dot mr-2"></i>Ship to
        </button>
        <button className="hover:bg-dark_red py-1 px-3 rounded-3xl">
          <i className="fa-solid fa-building mr-2"></i> Cedar Rapid South
        </button>
      </div>
      <nav aria-label="secondary navigation">
        <ul className="md:flex hidden gap-6">
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
  );
};

export default SecondaryNav;
