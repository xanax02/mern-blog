import React from "react";

const HomeRightAsideItem = (props) => {
  return (
    <div className="py-4 px-2 hover:bg-gray-200 ease-in duration-150">
      <h3 className="text-gray-700 mb-2">{props.title}</h3>
      <p className="text-gray-500 text-sm">{props.tag}</p>
    </div>
  );
};

export default HomeRightAsideItem;
