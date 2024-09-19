import React, { useEffect, useState } from "react";
import LocationBox from "./LocationBox";
import StoreBox from "./StoreBox";

const SecondaryNav = () => {
  const [location, setLocation] = useState("Nepal");
  const [store, setStore] = useState("Fashion shop");

  const [visibleLocation, setVisibleLocation] = useState(false);
  const handleLocationClick = () => {
    setVisibleLocation(!visibleLocation);
  };

  const [visibleStore, setVisibleStore] = useState(false);
  const handleStoreClick = () => {
    setVisibleStore(!visibleStore);
  };

  useEffect(() => {
    visibleLocation
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [visibleLocation]);
  return (
    <div className="bg-red text-white flex justify-between px-4 py-3 text-sm relative">
      <LocationBox
        isVisibleLocation={visibleLocation}
        handleLocationClick={handleLocationClick}
      />
      <StoreBox
        isVisibleStore={visibleStore}
        handleStoreClick={handleStoreClick}
      />
      <div className="flex gap-8 text-xs ">
        <button
          className="hover:bg-dark_red py-1 px-3 rounded-3xl"
          onClick={handleLocationClick}
        >
          <i className="fa-solid fa-location-dot mr-2"></i>
          <span className="capitalize">ship to {location}</span>
        </button>
        <button
          className="hover:bg-dark_red py-1 px-3 rounded-3xl"
          onClick={handleStoreClick}
        >
          <i className="fa-solid fa-building mr-2"></i>{" "}
          <span className="capitalize">{store}</span>
        </button>
      </div>
      <nav aria-label="secondary navigation">
        <ul className="md:flex hidden gap-6">
          <li className="hover:underline cursor-pointer">
            Target circle <sup>tm</sup>
          </li>
          <li className="hover:underline cursor-pointer">
            Target circle <sup>tm</sup>Card
          </li>
          <li className="hover:underline cursor-pointer">
            Target circle 360<sup>tm</sup>
          </li>
          <li className="hover:underline cursor-pointer">Registry</li>
          <li className="hover:underline cursor-pointer">Weekly ad</li>
          <li className="hover:underline cursor-pointer">Find stores</li>
        </ul>
      </nav>
    </div>
  );
};

export default SecondaryNav;
