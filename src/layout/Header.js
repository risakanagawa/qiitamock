import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownTeam from "./DropdownTeam";
import DropdownCommunity from "./DropdownCommunity";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";

export const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__left">
          <h1 className="title">
            <a href="/">Qiita</a>
          </h1>

          <DropdownTeam />
          
        <DropdownCommunity />
          <form action="">
            <FontAwesomeIcon icon={["fas", "search"]} />
            <input type="text" placeholder="キーワードを入力" />
          </form>
        </div>
        <div className="header__right">
          <FontAwesomeIcon icon={["fas", "check-circle"]} />
          <a href="/">ストック一覧</a>
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
