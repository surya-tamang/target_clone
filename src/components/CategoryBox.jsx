import React from "react";

const CategoryBox = ({ showBox, dropdown }) => {
  return (
    <div
      className={`${
        showBox ? "block" : "hidden"
      } categBox shadow-md bg-black text-white w-80 max-h-80 h-auto overflow-y-auto p-4 absolute left-0 z-10`}
    >
      <nav className="font-normal">
        <ul>
          {dropdown.map((item, index) => {
            const { name, path } = item;
            return (
              <li
                key={index}
                className="py-3 border-b-2 border-grey hover:underline"
              >
                {name}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryBox;
