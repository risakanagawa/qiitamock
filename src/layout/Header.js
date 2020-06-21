import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownTeam from "./DropdownTeam";
import DropdownCommunity from "./DropdownCommunity";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import DesktopForm from "./DesktopForm";
import MobileForm from "./MobileForm";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };



  return (
    <div className="header__container">
      <div className="header">
        <div className="header__left">
          <h1 className="title">
            <a href="/">Qiita</a>
          </h1>
          <DropdownTeam />
          <DropdownCommunity />
          {width > 990 ? <DesktopForm /> : <MobileForm /> }
        </div>
        <div className="header__right">
          <div className="stock">
            <FontAwesomeIcon icon={["fas", "check-circle"]} />
            <a href="/">ストック一覧</a>
          </div>
          <div className="post">
            <FontAwesomeIcon icon={["fas", "edit"]} />
            <a href="/">投稿する</a>
          </div>
          <DropdownNotification />
          <DropdownUser />
        </div>
      </div>
    </div>
  );
};
