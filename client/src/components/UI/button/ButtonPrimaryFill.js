import React from "react";

const ButtonPrimaryFill = ({ children }) => {
  return (
    <button className="bg-blue-600 font-semibold text-white border w-full py-1 px-2 rounded-lg">
      {children}
    </button>
  );
};

export default ButtonPrimaryFill;
