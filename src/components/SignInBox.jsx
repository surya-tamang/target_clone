import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const SignInBox = ({ isVisibleSignin, handleSigninClick }) => {
  const box = useRef();
  useEffect(() => {
    if (isVisibleSignin) {
      gsap.fromTo(
        box.current,
        { x: "100%" }, //from
        { x: "0", duration: 1, ease: "power3.out" } // to
      );
    } else {
      gsap.to(box.current, {
        x: "100%",
        duration: 2,
        ease: "power3.out",
      });
    }
  }, [isVisibleSignin]);
  const list = [
    { name: "sign in", path: "/" },
    { name: "create an account", path: "/" },
    { name: "orders", path: "/" },
    { name: "gift cards", path: "/" },
    { name: "registry", path: "/" },
  ];
  return (
    <div
      ref={box}
      className={`absolute ${isVisibleSignin ? "block" : "hidden"}
     sm:w-96 w-full h-screen -top-12 bg-white right-0 z-50 capitalize`}
    >
      <div className="text-black bg-white text-2xl w-full sticky top-0 z-20 flex justify-between p-4 border-b-2">
        <h1 className="font-bold">accounts</h1>
        <button
          onClick={handleSigninClick}
          className="hover:bg-dark_white p-2 rounded-full w-12 flex items-center justify-center"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <nav>
        <ul className="flex flex-col px-4">
          {list.map((item, index) => {
            const { name, path } = item;
            return (
              <li
                key={index}
                className="border-b-2 py-3 hover:underline cursor-pointer"
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

export default SignInBox;
