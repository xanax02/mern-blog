import React from "react";

import ButtonPrimary from "../../UI/button/ButtonPrimary";
import ButtonSecondary from "../../UI/button/ButtonSecondary";

const NewUser = () => {
  return (
    <>
      <h2 className="text-gray-900 font-bold text-xl leading-7">
        The Creative Pen Community is a community of amazing chitkara devs,
        artist and people like you.
      </h2>
      <p className="text-gray-500 my-2 leading-6">
        We're a place where students share, stay up-to-date and live in harmoney
      </p>
      <div className="flex flex-col mt-6 justify-evenly h-[100px]">
        <ButtonPrimary>Create account</ButtonPrimary>
        <ButtonSecondary>Login</ButtonSecondary>
      </div>
    </>
  );
};

export default NewUser;
