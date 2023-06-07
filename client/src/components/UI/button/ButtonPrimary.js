import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <button className="bg-clear ml-2 font-semibold text-blue-600 border border-blue-600 py-1 px-2 rounded-lg">
      {children}
    </button>
  );
};

export default ButtonPrimary;
