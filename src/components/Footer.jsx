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
      <div className="md:flex hidden p-6 justify-between w-full">
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
      <div className="bg-black w-full p-3 flex md:justify-between justify-center items-center md:flex-row flex-col gap-3">
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/watch?v=SbYXkOAoZpI"
            className="bg-gray-600 h-6 w-6 hover:bg-slate-500 text-xs text-white rounded-full flex items-center justify-center"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=SbYXkOAoZpI"
            className="bg-gray-600 h-6 w-6 hover:bg-slate-500 text-xs text-white rounded-full flex items-center justify-center"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=SbYXkOAoZpI"
            className="bg-gray-600 h-6 w-6 hover:bg-slate-500 text-xs text-white rounded-full flex items-center justify-center"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=SbYXkOAoZpI"
            className="bg-gray-600 h-6 w-6 hover:bg-slate-500 text-xs text-white rounded-full flex items-center justify-center"
          >
            <i className="fa-brands fa-pinterest-p"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=SbYXkOAoZpI"
            className="bg-gray-600 h-6 w-6 hover:bg-slate-500 text-xs text-white rounded-full flex items-center justify-center"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="text-xs flex gap-6 text-white md:flex-row flex-col">
          <ul className="capitalize justify-center flex gap-4 flex-wrap">
            <li className="cursor-pointer hover:text-slate-300">terms</li>
            <li className="cursor-pointer hover:text-slate-300">
              CA supply chain
            </li>
            <li className="cursor-pointer hover:text-slate-300">privacy</li>
            <li className="cursor-pointer hover:text-slate-300">
              CA privacy rights
            </li>
            <li className="cursor-pointer hover:text-slate-300">
              your privacy choice
            </li>
            <li className="cursor-pointer hover:text-slate-300">
              interest based ads
            </li>
            <li className="cursor-pointer hover:text-slate-300">
              health privacy policy
            </li>
          </ul>
          <p className="text-center">TM & &#169; 2024 Target Brands, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
