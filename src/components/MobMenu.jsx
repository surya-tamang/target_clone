import React from "react";
import { categories, deals, newFeature, pickUp } from "./dropdowns";
const MobMenu = () => {
  return (
    <div className="absolute md:hidden w-96 h-screen -top-12 bg-white left-0 z-50 capitalize">
      <div className="text-black text-2xl w-full relative flex justify-between p-4 border-b-2">
        <h1 className="font-bold">Menu</h1>
        <i className="fa-solid fa-x "></i>
      </div>
      <div className="p-4">
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
    </div>
  );
};
export default MobMenu;
