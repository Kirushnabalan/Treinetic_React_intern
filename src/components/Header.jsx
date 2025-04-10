import React from "react";
import { assets } from "../assets/assets";
import { ArrowBigDownDashIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-12">
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to Recipe Finder
        </h1>
        <p className="text-center mt-5">
          Find your favorite recipes and share your own!
        </p>
        <div className="flex justify-center mt-5">
          <ArrowBigDownDashIcon className="w-20 h-30 animate-bounce" />
        </div>
      </div>
      <div>
        <img
          src={assets.header_img}
          alt="header"
          className="w-full h-96 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Header;
