import React from "react";

import Card from "../UI/wrapper/Card";
import HomeRightAside from "./right/HomeRightAside";

const AsideRight = () => {
  return (
    <div className="w-72">
      <Card bg="white" padding="0">
        <HomeRightAside topic="events" expand="See all" />
      </Card>
      <Card bg="white" padding="0">
        <HomeRightAside topic="#discuss" />
      </Card>
    </div>
  );
};

export default AsideRight;
