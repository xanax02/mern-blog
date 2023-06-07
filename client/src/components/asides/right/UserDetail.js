import React from "react";

import CardHeadColor from "../../UI/wrapper/CardHeadColor";
import ButtonPrimaryFill from "../../UI/button/ButtonPrimaryFill";

const UserDetail = (props) => {
  return (
    <CardHeadColor bg="white">
      <div className="px-4">
        <div className="flex mb-4">
          <div className="h-12 w-12 mt-[-20px] mr-2">
            <img
              className="rounded-lg"
              src="/assets/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.webp"
            />
          </div>
          <p>{props.author}</p>
        </div>
        <div>
          <ButtonPrimaryFill>Follow</ButtonPrimaryFill>
        </div>
        <div className="mt-2">
          <p className="text-gray-700">{props.description}</p>
        </div>
      </div>
    </CardHeadColor>
  );
};

export default UserDetail;
