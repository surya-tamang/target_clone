import React from "react";

const Footer = () => {
  const aboutUs = [
    { name: "about target", path: "/" },
    { name: "careers", path: "/" },
    { name: "news & blog", path: "/" },
    { name: "target brands", path: "/" },
    { name: "bullseye shop", path: "/" },
    { name: "sustainablity & governance", path: "/" },
    { name: "press center", path: "/" },
    { name: "advertise with us", path: "/" },
    { name: "investors", path: "/" },
    { name: "suppliers", path: "/" },
    { name: "targetPlus", path: "/" },
  ];

  const help = [
    { name: "target help", path: "/" },
    { name: "returns", path: "/" },
    { name: "track orders", path: "/" },
    { name: "recalls", path: "/" },
    { name: "contact us", path: "/" },
    { name: "feedbacks", path: "/" },
    { name: "accessbility", path: "/" },
    { name: "security & fraud", path: "/" },
    { name: "team member services", path: "/" },
  ];

  const store = [
    { name: "find store", path: "/" },
    { name: "clinic", path: "/" },
    { name: "pharmacy", path: "/" },
    { name: "optical", path: "/" },
  ];

  const service = [
    { name: "target circle", path: "/" },
    { name: "target circle card", path: "/" },
    { name: "target circle 360", path: "/" },
    { name: "target app", path: "/" },
    { name: "target registry", path: "/" },
    { name: "same day delivery", path: "/" },
    { name: "order pick-up", path: "/" },
    { name: "drive up", path: "/" },
    { name: "free 2-day shipping", path: "/" },
  ];
  return (
    <footer className="bg-dark_white w-full flex items-center justify-center flex-col">
      <div className="flex p-6 justify-between w-full">
        <ul>
          <h1 className="font-semibold text-base mb-4">About us</h1>
          {aboutUs.map((item, index) => {
            const { name, path } = item;
            return (
              <li
                key={index}
                className="hover:underline capitalize text-xs my-4 cursor-pointer"
              >
                {name}
              </li>
            );
          })}
        </ul>
        <ul>
          <h1 className="font-semibold text-base mb-4">Help</h1>
          {help.map((item, index) => {
            const { name, path } = item;
            return (
              <li
                key={index}
                className="hover:underline capitalize text-xs my-4 cursor-pointer"
              >
                {name}
              </li>
            );
          })}
        </ul>
        <ul>
          <h1 className="font-semibold text-base mb-4">Stores</h1>
          {store.map((item, index) => {
            const { name, path } = item;
            return (
              <li
                key={index}
                className="hover:underline capitalize text-xs my-4 cursor-pointer"
              >
                {name}
              </li>
            );
          })}
        </ul>
        <ul>
          <h1 className="font-semibold text-base mb-4">Services</h1>
          {service.map((item, index) => {
            const { name, path } = item;
            return (
              <li
                key={index}
                className="hover:underline capitalize text-xs my-4 cursor-pointer"
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <img src="src/assets/city.svg" alt="city" />
      </div>
      <div className="bg-black">
        <div>
          <button>
            <i class="fa-brands fa-facebook-f"></i>
          </button>
          <button>
            <i class="fa-brands fa-instagram"></i>
          </button>
          <button>
            <i class="fa-brands fa-x-twitter"></i>
          </button>
          <button>
            <i class="fa-brands fa-pinterest-p"></i>
          </button>
          <button>
            <i class="fa-brands fa-youtube"></i>
          </button>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
