import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const StoreBox = ({ handleStoreClick, isVisibleStore }) => {
  const box = useRef();
  useEffect(() => {
    if (isVisibleStore) {
      gsap.fromTo(
        box.current,
        { x: "-100%" }, //from
        { x: "0", duration: 1, ease: "power3.out" } // to
      );
    } else {
      gsap.to(box.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isVisibleStore]);

  const [isFocus, setIsFocus] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const handleChange = (e) => {
    setZipCode(e.target.value);
  };
  useEffect(() => {
    zipCode ? setIsFocus(true) : setIsFocus(false);
  });
  return (
    <div
      ref={box}
      className={`absolute ${isVisibleStore ? "block" : "hidden"}
                    sm:w-96 w-full h-screen top-0 bg-white left-0 z-50 capitalize`}
    >
      <div className="text-black bg-white text-2xl w-full sticky top-0 z-20 flex justify-between p-4 border-b-2">
        <h1 className="font-bold">Select Store</h1>

        <button
          onClick={handleStoreClick}
          className="hover:bg-dark_white p-2 rounded-full w-12 flex items-center justify-center"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <div className="p-4">
        <p className="text-black">
          Item and delivery options may vary by location.
        </p>
        <div className="flex items-center gap-3 justify-center mt-5">
          <form
            action=""
            className="h-12 border-2 border-dark_red bg-white relative w-8/12"
          >
            <input
              type="text"
              onBlur={() => setIsFocus(false)}
              onChange={handleChange}
              className={`bg-transparent w-full border-none outline-none  h-full px-3 text-dark_red absolute top-0 left-0 z-10`}
            />
            <span
              className={`absolute ${
                isFocus ? "text-xs -top-2" : "text-base top-2"
              } px-1 left-2  bg-white text-dark_red z-0`}
            >
              Zip or city, state
            </span>
          </form>
          <button className="bg-red py-4 px-3 rounded-3xl w-4/12">
            Look up
          </button>
        </div>
        <button className="py-3 mt-2 px-7 text-base">
          <i class="fa-solid fa-location-dot text-red"></i>
          <span className="underline text-black capitalize ml-4">
            use my current location
          </span>
        </button>
      </div>

      <div className="border-t-2 fixed bottom-0 w-full p-3">
        <button className="bg-red w-full p-3 rounded-3xl text-base font-semibold capitalize">
          shop this store
        </button>
      </div>
    </div>
  );
};

export default StoreBox;
