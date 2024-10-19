import React from "react";
import HighlightProduct from "../components/HighlightProduct";
import LowerPrice from "../components/LowerPrice";
import Menus from "../components/Menus";
import PopularOnSocial from "../components/PopularOnSocial";
import Heading from "../components/Heading";
import { NavLink } from "react-router-dom";

const Home = () => {
  const categories = [
    { category: "halloween", img: "halloween.webp", path: "" },
    { category: "christmas", img: "christmas.webp", path: "" },
    { category: "women's", img: "womens.webp", path: "" },
    { category: "men's", img: "mens.webp", path: "" },
    { category: "kids", img: "kids.webp", path: "" },
    { category: "baby", img: "baby'.webp", path: "" },
    { category: "home", img: "home.webp", path: "" },
    { category: "kitchen & dining", img: "kitchen.webp", path: "" },
    { category: "toys", img: "toys.webp", path: "" },
    { category: "video games", img: "games.webp", path: "" },
    { category: "households", img: "household.webp", path: "" },
    { category: "pets", img: "pet.webp", path: "" },
    { category: "clearance", img: "clearance.webp", path: "" },
    { category: "sports & outdoors", img: "outdoor.webp", path: "" },
  ];
  return (
    <main className="flex justify-center items-center w-full flex-col z-0 bg-white">
      <section className="md:flex hidden w-full justify-center items-center ">
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
            <HighlightProduct />
          </div>
        </div>
      </section>
      <section className="w-10/12 my-10">
        <LowerPrice />
      </section>
      <section className="w-10/12 my-10 bg-pink">
        <PopularOnSocial />
      </section>
      <section className="w-10/12 my-10 h-24 md:h-auto relative overflow-hidden rounded-xl">
        <img src="app.webp" alt="app" className="w-full h-full" />
        <article className="text-white absolute left-2 md:left-0 w-5/12 h-full top-0 flex flex-col items-start justify-center md:px-16 px-0">
          <h1 className="font-bold text-xs md:text-4xl mb-2">
            The easiest way to shop and save
          </h1>
          <h2 className="font-normal md:text-3xl text-xs">
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
      <section className="flex justify-center w-10/12 items-center flex-col gap-10 my-10">
        <Heading text="featured categories" />
        <div className="flex flex-wrap w-full justify-center gap-10">
          {categories.map((item, index) => {
            const { category, img, path } = item;
            return (
              <NavLink key={index} to={path}>
                <img
                  src={img}
                  alt={category}
                  className="rounded-full h-36 w-36"
                />
                <p className="text-center mt-4 capitalize">{category}</p>
              </NavLink>
            );
          })}
        </div>
      </section>
      <Menus />
    </main>
  );
};

export default Home;
