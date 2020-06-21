import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mobile__form">
      <div className="search--icon" onClick={()=> setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={["fas", "search"]} />
      </div>
      <form className={isOpen ? "isOpen" : "mobile__form--box"} >
      <input type="text" placeholder="キーワードを入力" />
      </form>
    </div>
  );
};

export default MobileForm;
