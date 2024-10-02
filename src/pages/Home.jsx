import React from "react";
import Product from "../components/Product";
import LowerPrice from "../components/LowerPrice";
import Menus from "../components/Menus";

const Home = () => {
  return (
    <main className="flex justify-center items-center w-full flex-col z-0 bg-white">
      <section className="flex w-full justify-center items-center">
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
      <section className="w-10/12 my-10">
        <LowerPrice />
      </section>
      <Menus />
    </main>
  );
};

export default Home;
