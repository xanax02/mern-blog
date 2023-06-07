import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";

const LeftReactions = () => {
  return (
    <div className="fixed">
      <div className="flex flex-col">
        <div className="mb-6">
          <AiOutlineHeart className="text-2xl text-gray-700 hover:text-red-600 ease-in duration-150" />
          <p className="text-gray-700 ml-2">7</p>
        </div>
        <div className="mb-6">
          <BiComment className="text-2xl text-gray-700 hover:text-orange-600 ease-in duration-150" />
          <p className="text-gray-700 ml-2">7</p>
        </div>
        <div className="mb-5">
          <FiBookmark className="text-2xl text-gray-700 hover:text-blue-500 ease-in duration-150" />
          <p className="text-gray-700 ml-2">7</p>
        </div>
        <div className="ml-[-6px] mb-6 px-2 py-2 rounded-full hover:bg-gray-200 ease-in duration-150">
          <HiDotsHorizontal className="text-2xl text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default LeftReactions;
