import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownTeam = () => {
    const[isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
      isOpenMenu && menuRef.current.focus();
    }, [isOpenMenu]);

    return (
        <div
        className="arrow--team dropdown"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        ref={menuRef}
        onBlur={() => setIsOpenMenu(false)}
        tabIndex={0}
      >
        <div className="dropdown--team" hidden={!isOpenMenu}>
          <div className="dropdown--team--top">
            <p>
              <FontAwesomeIcon icon={["fas", "check"]} /> Qiita
            </p>
          </div>
          <div className="dropdown--team--bottom">
            <span>ログイン中のチームがありません</span>
            <a href="/">
              <FontAwesomeIcon icon={["fas", "sign-in-alt"]} /> Qiita Team
              にログイン...
            </a>
          </div>
        </div>
      </div>

    )
}

export default DropdownTeam
