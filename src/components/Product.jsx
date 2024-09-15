import React from "react";

const Product = () => {
  return (
    <>
      <a
        href="#"
        className="group h-92 bg-dark_red w-72 flex flex-col rounded-md"
      >
        <img
          src="src/assets/bounty.jpg"
          alt=""
          className="aspect-square w-full h-52 rounded object-cover"
        />

        <div className="text-white h-40 flex items-center justify-center flex-col">
          <h3 className="text-3xl font-bold">$10</h3>
          <h3 className="text-3xl font-bold">Gift card</h3>
        </div>
      </a>
      <a
        href="#"
        className="group h-92 bg-dark_red w-72 flex flex-col rounded-md"
      >
        <img
          src="src/assets/donna.png"
          alt=""
          className="aspect-square w-full h-52 rounded object-cover"
        />

        <div className="text-white h-40 flex items-center justify-center flex-col">
          <h3 className="text-3xl font-bold">$10</h3>
          <h3 className="text-3xl font-bold">Gift card</h3>
        </div>
      </a>
      <a
        href="#"
        className="group h-92 bg-dark_red w-72 flex flex-col rounded-md"
      >
        <img
          src="src/assets/butrish.webp"
          alt=""
          className="aspect-square w-full h-52 rounded object-cover"
        />

        <div className="text-white h-40 flex items-center justify-center flex-col">
          <h3 className="text-3xl font-bold">$10</h3>
          <h3 className="text-3xl font-bold">Gift card</h3>
        </div>
      </a>
      <a
        href="#"
        className="group h-92 bg-dark_red w-72 flex flex-col rounded-md"
      >
        <img
          src="src/assets/drink.webp"
          alt=""
          className="aspect-square w-full h-52 rounded object-cover"
        />

        <div className="text-white h-40 flex items-center justify-center flex-col">
          <h3 className="text-3xl font-bold">$10</h3>
          <h3 className="text-3xl font-bold">Gift card</h3>
        </div>
      </a>
    </>
  );
};

export default Product;
