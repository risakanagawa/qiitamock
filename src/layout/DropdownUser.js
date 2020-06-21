import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownUser = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);
  return (
    <div
      className="user"
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}
    >
      <div className="user__icons">
        <span>G</span>
      </div>
      
      <div className="dropdown--user" hidden={!isOpenMenu}>
        <a href="/">マイページ</a>
        <hr />
        <a href="/">下書き一覧</a>
        <a href="/">限定共有記事一覧</a>
        <a href="/">編集リクエスト一覧</a>
        <hr />
        <a href="/">設定</a>
        <a href="/">ヘルプ</a>
        <hr />
        <a href="/">ログアウト</a>
      </div>
    </div>
  );
};

export default DropdownUser;
