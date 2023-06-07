import React from "react";

const CardHeadColor = (props) => {
  return (
    <div
      className={`bg-${props.bg} rounded-md mb-2 pb-4 px-${props.padding} w-[22rem]`}
    >
      <div className="h-[40px] rounded-t-md bg-gray-800"></div>
      <div>{props.children}</div>
    </div>
  );
};

export default CardHeadColor;
