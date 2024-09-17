import React, { useState, useEffect } from "react";
import CategoryBox from "./CategoryBox";
import { categories, deals, newFeature, pickUp } from "./dropdowns";
import BlackScreen from "./BlackScreen";
import MobMenu from "./MobMenu";

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

  const [visibilityNav, setVisibiltyNav] = useState(false);

  const handleOpenNav = () => {
    setVisibiltyNav(true);
  };
  const handleCloseNav = () => {
    setVisibiltyNav(false);
  };

  return (
    <div className="md:px-8 px-0 sticky top-0 text-black shadow-md w-full md:h-20 h-32 flex flex-col">
      <MobMenu isVisible={visibilityNav} handleClick={handleCloseNav} />
      <div className="flex w-full md:px-0 px-6 items-center justify-between py-2">
        {/* menu bar */}
        <button onClick={handleOpenNav}>
          <i className="fa-solid fa-bars text-black md:hidden text-2xl"></i>
        </button>

        {/* logo */}
        <div className="cursor-pointer">
          <a href="#" aria-label="Home">
            <img src="target.png" alt="" className="w-11 h-10" />
          </a>
        </div>

        {/* nav */}
        <nav
          className="flex justify-around items-center"
          aria-label="primary navigation"
        >
          <ul className="md:flex hidden font-medium">
            {primaryNav.map((item, index) => {
              const { name } = item;
              return (
                <li
                  key={index}
                  className="relative capitalize z-30"
                  onClick={() => handleToggle(index)}
                >
                  <div className="relative z-30 bg-white py-6 px-3">
                    <span className="cursor-pointer hover:bg-dark_white rounded-3xl px-3 py-2 font-bold ">
                      {name}
                    </span>
                  </div>
                  <CategoryBox
                    showBox={activeIndex === index}
                    dropdown={drops}
                  />
                </li>
              );
            })}
          </ul>

          {/* Search bar */}
          <div className="bg-white py-3 px-4 z-50 md:block hidden">
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
          </div>

          {/* Sign-in and cart */}
          <div className="flex md:gap-10">
            <button className="font-light hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2">
              <i className="fa-solid fa-user md:mr-3"></i>
              <span className="md:inline hidden">Sign in</span>
            </button>
            <button className="hover:bg-dark_white rounded-full px-3 cursor-pointer py-2">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </nav>
      </div>
      <div className="py-3 px-4 w-full md:hidden block">
        <form className="w-full p-3 rounded-3xl bg-dark_white flex items-center">
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
      </div>
      <BlackScreen showBox={activeIndex !== null} />
    </div>
  );
};

export default PrimaryNav;
