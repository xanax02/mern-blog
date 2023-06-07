import React from "react";
import { useContext } from "react";

import { UserContext } from "../../UserContext";

import Card from "../UI/wrapper/Card";
import NewUser from "./left/NewUser";
import LeftNavigation from "./left/LeftNavigation";

const AsideLeft = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const username = userInfo?.username;

  return (
    <div className="w-64">
      {!username && (
        <Card bg="white" padding="4">
          <NewUser />
        </Card>
      )}

      {/* Navigation LINKS */}
      <div>
        <LeftNavigation />
      </div>
    </div>
  );
};

export default AsideLeft;
