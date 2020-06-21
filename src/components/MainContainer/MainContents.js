import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import List from "./List";
import "./Main.scss";

const MainContents = ({ lists }) => {
  return (
    <div className="center__container">
      <div className="center__header">
        <h2>
          <FontAwesomeIcon icon={["fas", "chart-line"]} /> トレンド
        </h2>

        <h3>最近人気の記事を毎日5時/17時に更新</h3>
      </div>
      <div className="tab-selection">
        <input id="oneday" type="radio" name="tab_item" defaultChecked />
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
      <div className="article-list">
        {lists.map((list) => (
          <List list={list} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { lists: state.articles };
};

export default connect(mapStateToProps)(MainContents);
