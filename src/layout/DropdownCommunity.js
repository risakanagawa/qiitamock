import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownCommunity = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  return (
    <div
      className="arrow--community dropdown"
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}
    >
      <span>コミュニティ</span>
      <div className="dropdown--community" hidden={!isOpenMenu}>
        <a href="/">
          <FontAwesomeIcon icon={["fas", "users"]} />
          ユーザー一覧
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["far", "building"]} />
          Organization一覧
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["far", "calendar-alt"]} />
          アドベントカレンダー
        </a>
        <hr />
        <a href="/">
          <FontAwesomeIcon icon={["fas", "search"]} />
          Qiita Jobs
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fas", "comments"]} />
          Qiitadon
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["far", "newspaper"]} />
          Qiita Zine
        </a>
        <hr />
        <a href="/">
          <FontAwesomeIcon icon={["fas", "book"]} />
          コミュニティガイドライン
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fas", "book"]} />
          良い記事を書くために
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fas", "book"]} />
          リリースノート
        </a>
      </div>
    </div>
  );
};

export default DropdownCommunity;
