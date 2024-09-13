import React from "react";

const Header = () => {
  return (
    <header>
      <div className="bg-red text-white flex justify-between px-8 py-3 text-sm">
        <div className="flex gap-8">
          <button className="hover:bg-dark_red py-1 px-3 rounded-3xl">
            <i className="fa-solid fa-location-dot mr-2"></i>Ship to
          </button>
          <button className="hover:bg-dark_red py-1 px-3 rounded-3xl">
            <i className="fa-solid fa-building mr-2"></i> Cedar rapid South
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
      <div className="bg-white flex items-center gap-10 px-10 py-3 sticky top-0 text-black shadow-md">
        <div className="cursor-pointer">
          <a href="#" aria-label="Home">
            logo
          </a>
        </div>
        <nav
          className="flex justify-around gap-4 w-11/12 items-center"
          aria-label="primary navigation"
        >
          <ul className="flex gap-4 font-medium">
            <li className="hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2">
              <a href="#">Categories</a>
            </li>
            <li className="hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2">
              <a href="#">Deals</a>
            </li>
            <li className="hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2">
              <a href="#">New & featured</a>
            </li>
            <li className="hover:bg-dark_white rounded-3xl p-2">
              <a href="#">Pickup & delivery</a>
            </li>
          </ul>
          <form className="w-5/12">
            <input
              type="search"
              name="search"
              className="w-full py-2 px-3 rounded-3xl bg-dark_white outline-none"
              placeholder="What can we help you find?"
              aria-label="Search"
            />
          </form>
          <button className="font-light hover:bg-dark_white rounded-3xl px-3 cursor-pointer py-2">
            <i className="fa-solid fa-user mr-3"></i>Sign in
          </button>
          <button className="hover:bg-dark_white rounded-full px-3 cursor-pointer py-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
