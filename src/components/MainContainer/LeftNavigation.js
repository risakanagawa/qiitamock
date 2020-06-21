import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftNavigation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  const mobileMenu = () => {
    return (
      <div className="mobile__menu">
        <select name="menu" id="menu" className="mobile__menu--select">
          <option value="trend">トレンド</option>
          <option value="timeline">タイムライン</option>
          <option value="tags">タグフォールド</option>
          <option value="milestones">マイルストーン</option>
        </select>
      </div>
    );
  };

  const desktopMenu = () => {
    return (
      <div className="left__navigation">
        <input id="trend" type="radio" name="list_item" defaultChecked />
        <label className="list_item" htmlFor="trend">
          <FontAwesomeIcon icon={["fas", "chart-line"]} /> トレンド
        </label>

        <input id="timeline" type="radio" name="list_item" />
        <label className="list_item" htmlFor="timeline">
          <FontAwesomeIcon icon={["fas", "list-ul"]} /> タイムライン
        </label>

        <input id="tags" type="radio" name="list_item" />
        <label className="list_item" htmlFor="tags">
          <FontAwesomeIcon icon={["fas", "tags"]} /> タグフォールド
        </label>

        <input id="milestones" type="radio" name="list_item" />
        <label className="list_item" htmlFor="milestones">
          <FontAwesomeIcon icon={["fas", "flag-checkered"]} />
          マイルストーン
        </label>
      </div>
    );
  };

  return width > 700 ? desktopMenu() : mobileMenu();
};

export default LeftNavigation;
