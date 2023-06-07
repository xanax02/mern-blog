import React from "react";
import { Link } from "react-router-dom";

import { FcHome, FcList } from "react-icons/fc";
import { BsMicFill, BsFillCameraReelsFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const LeftNavigation = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="flex mt-2  w-64 hover:bg-blue-200 px-2 py-2 rounded-lg ease-in duration-150">
          <FcHome className="mr-3 mt-1" />
          <p className="text-gray-700 tracking-wider">Home</p>
        </div>
      </Link>
      <Link to={"/events"}>
        <div className="flex w-64 hover:bg-blue-200 px-2 py-2 rounded-lg ease-in duration-150">
          <FcList className="mr-3 mt-1" />
          <p className="text-gray-700 tracking-wider">Events</p>
        </div>
      </Link>
      <Link to={"/podcast"}>
        <div className="flex w-64 hover:bg-blue-200 px-2 py-2 rounded-lg ease-in duration-150">
          <BsMicFill className="mr-3 mt-1 text-gray-600" />
          <p className="text-gray-700 tracking-wider">Podcast</p>
        </div>
      </Link>
      <Link to={"/videos"}>
        <div className="flex w-64 hover:bg-blue-200 px-2 py-2 rounded-lg ease-in duration-150">
          <BsFillCameraReelsFill className="mr-3 mt-1 text-gray-800" />
          <p className="text-gray-700 tracking-wider">Videos</p>
        </div>
      </Link>
      <Link to={"/tags"}>
        <div className="flex w-64 hover:bg-blue-200 px-2 py-2 rounded-lg ease-in duration-150">
          <BiHash className="mr-3 mt-1 text-orange-400" />
          <p className="text-gray-700 tracking-wider">Tags</p>
        </div>
      </Link>
      <Link to={"/about"}>
        <div className="flex w-64 hover:bg-blue-200 px-2 py-2 rounded-lg ease-in duration-150">
          <MdOutlineContactSupport className="mr-3 mt-1 text-green-400" />
          <p className="text-gray-700 tracking-wider">About</p>
        </div>
      </Link>
      <Link to={"/contact"}>
        <div className="flex w-64 hover:bg-blue-200 px-2 py-2 rounded-lg ease-in duration-150">
          <GrContact className="mr-3 mt-1" />
          <p className="text-gray-700 tracking-wider">Contact</p>
        </div>
      </Link>
    </>
  );
};

export default LeftNavigation;
