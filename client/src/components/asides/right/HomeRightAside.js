import React from "react";
import { Link } from "react-router-dom";

import HomeRightAsideItem from "./HomeRightAsideItem";

const HomeRightAside = (props) => {
  const title =
    "Guia completo de data preparation com WoE e categorização de variáveis numéricas: benefícios e desafios";
  const tag = "products";

  return (
    <div className="">
      <div className="flex justify-between p-4">
        <h2 className="text-xl text-gray-800 font-bold mt-[-5px]">
          {props.topic}
        </h2>
        {props.expand && (
          <Link to={"/events"}>
            <p className="text-blue-500 font-bold text-sm">See all</p>
          </Link>
        )}
      </div>
      <Link to="/events">
        <HomeRightAsideItem title="Sneaker Fest" tag="event" />
      </Link>
      <HomeRightAsideItem title={title} tag={tag} />
      <HomeRightAsideItem title={title} tag={tag} />
      <HomeRightAsideItem title={title} tag={tag} />
    </div>
  );
};

export default HomeRightAside;
