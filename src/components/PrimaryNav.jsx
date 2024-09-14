import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import { categories, deals, newFeature, pickUp } from "./dropdowns";

const PrimaryNav = () => {
  const primaryNav = [
    { name: "categories", path: "/" },
    { name: "deals", path: "/" },
    { name: "news & featured", path: "/" },
    { name: "pickup & delivery", path: "/" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [drops, setDrops] = useState([]);

  const handleToggle = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
      setDrops([]);
    } else {
      setActiveIndex(index);
      if (index === 0) {
        setDrops(categories);
      } else if (index === 1) {
        setDrops(deals);
      } else if (index === 2) {
        setDrops(newFeature);
      } else if (index === 3) {
        setDrops(pickUp);
      }
    }
  };
  return (
    <>
      <div className="cursor-pointer">
        <a href="#" aria-label="Home">
          logo
        </a>
      </div>
      <nav
        className="flex justify-around gap-3 w-full items-center"
        aria-label="primary navigation"
      >
        <ul className="flex gap-4 font-medium">
          {primaryNav.map((item, index) => {
            const { name } = item;
            return (
              <li
                key={index}
                className="hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2 relative capitalize z-20"
                onClick={() => handleToggle(index)}
              >
                <a href="#">{name}</a>
                <CategoryBox showBox={activeIndex === index} dropdown={drops} />
              </li>
            );
          })}
        </ul>

        {/* Search bar */}
        <form className="w-96">
          <input
            type="search"
            name="search"
            className="w-full py-2 px-3 rounded-3xl bg-dark_white outline-none"
            placeholder="What can we help you find?"
            aria-label="Search"
          />
        </form>

        {/* Sign-in and cart */}
        <div>
          <button className="font-light hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2">
            <i className="fa-solid fa-user mr-3"></i>Sign in
          </button>
          <button className="hover:bg-dark_white rounded-full px-3 cursor-pointer py-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default PrimaryNav;
