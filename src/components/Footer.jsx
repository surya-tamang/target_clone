import React from "react";

const Footer = () => {
  
  return (
    <footer className="bg-dark_white w-full flex items-center justify-center flex-col">
      <div className="w-full bg-dark_white flex justify-center">
        <img src="/assets/city.svg" alt="city" />
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
