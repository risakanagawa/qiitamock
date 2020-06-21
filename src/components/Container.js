import React from "react";
import RightSidebar from "./RightSidebar/RightSidebar";
import LeftNavigation from "./MainContainer/LeftNavigation";
import MainContents from "./MainContainer/MainContents";
import "./Container.scss";
import "./responsiveContents.scss";

const Container = () => {
  return (
    <div className="container">
      <div className="container__flex">
        <LeftNavigation />
        <MainContents />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Container;
