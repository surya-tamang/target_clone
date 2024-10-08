import React, { useEffect, useRef } from "react";
import { categories, deals, newFeature, pickUp } from "./dropdowns";
import gsap from "gsap";
const MobMenu = ({ isVisible, handleClick }) => {
  const box = useRef();
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        box.current,
        { x: "-100%" }, //from
        { x: "0%", duration: 0.5, ease: "power2.out" } // to
      );
    } else {
      gsap.to(box.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isVisible]);
  return (
    <div
      ref={box}
      className={`absolute ${
        isVisible ? "block" : "hidden"
      } md:hidden sm:w-96 w-full h-screen overflow-y-auto -top-12 bg-white left-0 z-50 capitalize`}
    >
      <div className="text-black bg-white text-2xl w-full sticky top-0 z-20 flex justify-between p-4 border-b-2">
        <h1 className="font-bold">Menu</h1>
        <button onClick={handleClick}>
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <div className="p-4 border-b-2">
        <h1 className="text-2xl font-bold">categories</h1>
        <ul>
          {categories.map((item, index) => {
            const { name, path } = item;
            return (
              <li key={index} className="hover:underline">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4 border-b-2">
        <h1 className="text-2xl font-bold">deals</h1>
        <ul>
          {deals.map((item, index) => {
            const { name, path } = item;
            return (
              <li key={index} className="hover:underline">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4 border-b-2">
        <h1 className="text-2xl font-bold">new & featured</h1>
        <ul>
          {newFeature.map((item, index) => {
            const { name, path } = item;
            return (
              <li key={index} className="hover:underline">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4 border-b-2">
        <h1 className="text-2xl font-bold">pickup & delivery</h1>
        <ul>
          {pickUp.map((item, index) => {
            const { name, path } = item;
            return (
              <li key={index} className="hover:underline">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <nav aria-label="secondary navigation">
        <ul className="p-4 gap-6">
          <li className="hover:underline cursor-pointer border-b-2 py-2">
            Target circle <sup>tm</sup>
          </li>
          <li className="hover:underline cursor-pointer border-b-2 py-2">
            Target circle <sup>tm</sup>Card
          </li>
          <li className="hover:underline cursor-pointer border-b-2 py-2">
            Target circle 360<sup>tm</sup>
          </li>
          <li className="hover:underline cursor-pointer border-b-2 py-2">
            Registry
          </li>
          <li className="hover:underline cursor-pointer border-b-2 py-2">
            Weekly ad
          </li>
          <li className="hover:underline cursor-pointer border-b-2 py-2">
            Find stores
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MobMenu;
