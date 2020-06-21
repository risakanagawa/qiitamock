import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__left">
          <h1 className="title">
            <a href="/">Qiita</a>
          </h1>

          <div className="arrow--team dropdown">
            <div className="dropdown--team"></div>
          </div>
          <div className="arrow--community dropdown">
            <span>コミュニティ</span>
            <div className="dropdown--community"></div>
          </div>
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
          <div className="notification">
              <p>0</p>
          </div>
          <div className="user">
            <div className="user__icons">
              <span>G</span>
            </div>
            <div className="user__dropdown"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
