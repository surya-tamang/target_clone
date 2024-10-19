import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const UserSetting = ({
  isVisibleSignin,
  handleSigninClick,
  handlebtnClick,
}) => {
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
    { name: "sign in", path: "/signin" },
    { name: "create an account", path: "/signup" },
    { name: "orders", path: "/" },
    { name: "gift cards", path: "/" },
    { name: "registry", path: "/" },
  ];
  return (
    <div
      ref={box}
      className={`fixed ${isVisibleSignin ? "block" : "hidden"}
     sm:w-96 w-full h-screen top-0 bg-white right-0 z-50 capitalize`}
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
              <NavLink
                key={index}
                onClick={handlebtnClick}
                to={path}
                className="border-b-2 py-3 hover:underline cursor-pointer"
              >
                {name}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default UserSetting;
