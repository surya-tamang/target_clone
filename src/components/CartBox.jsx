import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CartBox = ({ isVisibleCart, handleClick }) => {
  const box = useRef();
  useEffect(() => {
    if (isVisibleCart) {
      gsap.fromTo(
        box.current,
        { x: "100%" },
        { x: "0", duration: "1", ease: "power3.out" }
      );
    } else {
      gsap.to(box.current, {
        x: "100%",
        duration: "0.5",
        ease: "power3.in",
      });
    }
  });
  return (
    <div
      ref={box}
      className={`absolute ${isVisibleCart ? "block" : "hidden"}
   sm:w-96 w-full h-screen -top-12 bg-white right-0 z-50 capitalize`}
    >
      <div className="text-black bg-white text-2xl w-full sticky top-0 z-20 flex justify-between p-4 border-b-2">
        <h1 className="font-bold">Cart</h1>
        <button
          onClick={handleClick}
          className="hover:bg-dark_white p-2 rounded-full w-12 flex items-center justify-center"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
};

export default CartBox;
