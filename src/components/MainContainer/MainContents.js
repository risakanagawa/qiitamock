import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.scss";

const MainContents = () => {
  return (
    <div className="center__container">
      <div className="center__header">
        <h2>
          <FontAwesomeIcon icon={["fas", "chart-line"]} /> トレンド
        </h2>

        <h3>最近人気の記事を毎日5時/17時に更新</h3>
      </div>
      <div className="tab-selection">
        <input id="oneday" type="radio" name="tab_item" checked />
        <label className="tab_item" htmlFor="oneday">
          1日
        </label>
        <input id="weekly" type="radio" name="tab_item" />
        <label className="tab_item" htmlFor="weekly">
          週間
        </label>

        <input id="monthly" type="radio" name="tab_item" />
        <label className="tab_item" htmlFor="monthly">
          月間
        </label>
      </div>
    </div>
  );
};

export default MainContents;
