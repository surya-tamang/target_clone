import React from "react";
import Product from "../components/Product";
import LowerPrice from "../components/LowerPrice";
import Menus from "../components/Menus";
import PopularOnSocial from "../components/PopularOnSocial";

const Home = () => {
  return (
    <main className="flex justify-center items-center w-full flex-col z-0 bg-white">
      <section className="flex w-full justify-center items-center">
        <div className="w-10/12 flex relative items-end">
          <img
            src="/assets/a-cocacola--lays-and-tide-detergent-in-a-red-backet-in-a-red-background-.jpeg"
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
      <section className="w-10/12 my-10 bg-pink">
        <PopularOnSocial />
      </section>
      <section className="w-10/12 my-10 relative overflow-hidden rounded-xl">
        <img src="/assets/app.webp" alt="app" className="w-full h-full" />
        <article className="text-white absolute left-0 w-5/12 h-full top-0 flex flex-col items-start justify-center px-16">
          <h1 className="font-bold text-4xl mb-2">
            The easiest way to shop and save
          </h1>
          <h2 className="font-normal text-2xl">
            Download the Target app & get more Target in one place.
          </h2>
        </article>
      </section>

      <section className="w-10/12 flex justify-center items-center gap-5 my-10 flex-wrap">
        <h1 className="font-bold text-xl">
          Get top deals, latest trends, and more.
        </h1>
        <form action="" className="flex gap-3">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="border py-2 px-3"
          />
          <button className="bg-red hover:bg-dark_red py-2 px-5 rounded-3xl text-white font-bold">
            Sign up
          </button>
        </form>
        <a href="#" className="text-grey underline capitalize">
          privacy policy
        </a>
      </section>
      <Menus />
    </main>
  );
};

export default Home;
