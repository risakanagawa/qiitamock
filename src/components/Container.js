import React from "react";
import LeftNavigation from "./MainContainer/LeftNavigation";
import MainContainer from "./MainContainer/MainContainer";
import RightSidebar from "./RightSidebar/RightSidebar";

import "./Container.scss"

const Container = () => {
  return (
    <div className="container">
      <div className="container__flex">
        <MainContainer />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Container;
