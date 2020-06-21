import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftNavigation from "./LeftNavigation";
import MainContents from "./MainContents";

const MainContainer = () => {
  return (
    <div className="main">
      <div className="main__container">
        <LeftNavigation />
        <MainContents />
      </div>
    </div>
  );
};

export default MainContainer;
