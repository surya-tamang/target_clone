import React from "react";

const PopularOnSocial = () => {
  const products = [
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
    {
      name: "Small kid clothes for summer + winter",
      image: "kid.jpg",
      price: 250,
    },
  ];
  return (
    <div className="w-full flex overflow-x-auto overflow-y-hidden p-4 md:h-96 h-72 gap-3">
      <div className="md:w-72 w-52 h-full flex-shrink-0 overflow-hidden relative">
        <img
          src="pinkbasket.jpeg"
          alt="basket"
          className="w-full object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center capitalize">
            Popular on social
          </h1>
        </div>
      </div>
      {products.map((item, index) => {
        const { name, price, image } = item;
        return (
          <div
            key={index}
            className="h-full w-48 p-3 bg-dark_white rounded-xl flex-shrink-0 flex flex-col"
          >
            <div className="w-full h-4/6 overflow-hidden rounded-lg">
              <img src={image} alt={name} className="object-cover w-full" />
            </div>
            <div className="h-2/6">
              <p className="text-xs font-bold">$ {price}</p>
              <p className="text-xs mb-3">{name}</p>
            </div>
            <button className="bg-red w-full py-2 rounded-3xl text-white hover:bg-dark_red capitalize font-semibold text-xs">
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PopularOnSocial;
