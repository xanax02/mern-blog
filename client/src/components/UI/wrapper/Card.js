import React from "react";

const Card = (props) => {
  return (
    <div className={`bg-${props.bg} rounded-md mb-2 pb-8 p-${props.padding}`}>
      {props.children}
    </div>
  );
};

export default Card;
