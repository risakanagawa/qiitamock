import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownNotification = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
      isOpenMenu && menuRef.current.focus();
    }, [isOpenMenu]);
  
    return (
        <div className="notification"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        ref={menuRef}
        onBlur={() => setIsOpenMenu(false)}
        tabIndex={0}
      >
        <p>0</p>
        <div className="dropdown--notification" hidden={!isOpenMenu}>
        <div className="dropdown--notification--top">
          <p>
            <FontAwesomeIcon icon={["far", "bell"]} /> お知らせ
          </p>
          <p>通知設定</p>
        </div>
        <div className="dropdown--nortification--bottom">
          通知一覧を見る
        </div>
      </div>
      </div>

    )
}

export default DropdownNotification
