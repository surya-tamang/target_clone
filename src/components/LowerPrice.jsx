import React from "react";
import Heading from "./Heading";

const LowerPrice = () => {
  const products = [
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
    {
      image: "src/assets/shake.jpg",
      price: "9.66",
      old_price: "11.66",
      title: " Chocolate milk shake very tasty and flavor",
    },
  ];
  return (
    <div className="lowerPrice bg-cream text-black px-5 capitalize ">
      <Heading text="new lower prices on must-haves" />
      <div className="w-full overflow-x-auto pt-8 flex">
        {products.map((item, index) => {
          const { image, price, old_price, title } = item;
          return (
            <div className="min-w-40 w-40 h-72 bg-white rounded-md flex flex-shrink-0 flex-col py-2 px-4 ml-4">
              <div className="h-32 w-full">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="h-24 py-1 text-xs">
                <p className="font-semibold text-base">$ {price}</p>
                <div>
                  <strike>$ {old_price}</strike>
                  <span className="text-red ml-3">new lower price</span>
                </div>
                <p className="font-semibold">{title}</p>
              </div>
              <button className="bg-red rounded-3xl py-2 text-white capitalize font-semibold text-xs">
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowerPrice;
