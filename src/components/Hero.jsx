import React from "react";
import Product from "./Product";

const Hero = () => {
  return (
    <section className="flex justify-center items-center pb-14">
      <div className="w-10/12 flex relative items-end">
        <img
          src="a-cocacola--lays-and-tide-detergent-in-a-red-backet-in-a-red-background-.jpeg"
          alt="cocal"
          className="w-full z-0"
        />
        <button className="bg-dark_red absolute text-white w-full text-center z-10 top-96 py-6 text-4xl capitalize font-semibold hover:underline">
          save big on all your everyday must-haves
        </button>
        <div className="absolute w-full px-16 h-72 bottom-36 flex items-center gap-5">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Hero;
