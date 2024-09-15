import React, { useState, useEffect } from "react";
import CategoryBox from "./CategoryBox";
import { categories, deals, newFeature, pickUp } from "./dropdowns";
import BlackScreen from "./BlackScreen";

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

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [activeIndex]);

  return (
    <div className="bg-white flex items-center gap-8 px-10 sticky top-0 text-black shadow-md z-30">
      <div>
        <i className="fa-solid fa-bars text-black md:hidden"></i>
        <i className="fa-solid fa-x text-black md:hidden"></i>
      </div>
      <div className="cursor-pointer">
        <a href="#" aria-label="Home">
          <img src="target.png" alt="" className="w-11 h-10" />
        </a>
      </div>
      <nav
        className="flex justify-around gap-3 w-full items-center"
        aria-label="primary navigation"
      >
        <ul className="flex font-medium">
          {primaryNav.map((item, index) => {
            const { name } = item;
            return (
              <li
                key={index}
                className="py-6 px-3 relative capitalize z-30"
                onClick={() => handleToggle(index)}
              >
                <span className="cursor-pointer hover:bg-dark_white rounded-3xl px-3 py-2 font-bold">
                  {name}
                </span>
                <CategoryBox showBox={activeIndex === index} dropdown={drops} />
              </li>
            );
          })}
        </ul>

        {/* Search bar */}
        <form className="w-96 p-3 rounded-3xl bg-dark_white flex items-center">
          <input
            type="search"
            name="search"
            className="w-11/12 outline-none bg-dark_white"
            placeholder="What can we help you find?"
            aria-label="Search"
          />
          <button className="pl-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {/* Sign-in and cart */}
        <div className="flex gap-10">
          <button className="font-light hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2">
            <i className="fa-solid fa-user mr-3"></i>Sign in
          </button>
          <button className="hover:bg-dark_white rounded-full px-3 cursor-pointer py-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </nav>
      <BlackScreen showBox={activeIndex !== null} />
    </div>
  );
};

export default PrimaryNav;
