import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const LocationBox = ({ handleLocationClick, isVisibleLocation }) => {
  const box = useRef();
  useEffect(() => {
    if (isVisibleLocation) {
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
  }, [isVisibleLocation]);

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
      className={`absolute ${isVisibleLocation ? "block" : "hidden"}
                    sm:w-96 w-full h-screen top-0 bg-white left-0 z-50 capitalize`}
    >
      <div className="text-black bg-white text-2xl w-full sticky top-0 z-20 flex justify-between p-4 border-b-2">
        <h1 className="font-bold">Update shipping location</h1>

        <button
          onClick={handleLocationClick}
          className="hover:bg-dark_white p-2 rounded-full w-12 flex items-center justify-center"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <div className="p-4">
        <p className="text-black">
          Item availability and shipping options will change based on location.
        </p>
        <form
          action=""
          className="h-12 border-2 border-dark_red bg-white mt-5 relative"
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
            Zip code
          </span>
        </form>
        <button className="py-3 mt-2 px-7 text-base">
          <i className="fa-solid fa-location-dot text-red"></i>
          <span className="underline text-black capitalize ml-4">
            use my current location
          </span>
        </button>
      </div>

      <div className="border-t-2 fixed bottom-0 w-full p-3">
        <button className="bg-red w-full p-3 rounded-3xl text-base font-semibold">
          Update
        </button>
      </div>
    </div>
  );
};

export default LocationBox;
