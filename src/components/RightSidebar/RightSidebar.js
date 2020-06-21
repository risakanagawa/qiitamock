import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import "./RightSideBar.scss";
import adImage from "../../img/ad.png";

import draft from "../../img/sponsors/tenshokudraft.png";
import astrea from "../../img/sponsors/astrea.png";
import ekiport from "../../img/sponsors/ekipert.png";
import pasona from "../../img/sponsors/pasona.png";
import RankingList from "./RankingList";

const RightSidebar = ({ users, tags, companies }) => {
  return (
    <div className="sidebar__container">
      <div className=" sidebar--ad">
        <img src={adImage} alt="adimage" />
      </div>
      
      <div className="sidebar userinfo">
        <div className="userinfo--top">
          <h1>G</h1>
          <h5>@aiueokaki</h5>
        </div>
        <div className="userinfo--bottom">
          <div className="userinfo--bottom--box">
            <h5>0</h5>
            <span>記事</span>
          </div>
          <div className="userinfo--bottom--box">
            <h5>0</h5>

            <span>contribution</span>
          </div>
          <div className="userinfo--bottom--box">
            <h5>0</h5>

            <span>フォロワー</span>
          </div>
        </div>
      </div>
      <div className="sidebar reccomendation">
        <p>Qiita Zine おすすめ記事</p>
        <div className="reccomendation-row">
          <div className="reccomendation-list">
            <p>自分の備忘録がみんなの参考書に。ゲームエンジンUnityをマスターしたVRクリエイター</p>
            <span>2020/04/30</span> <span>PR, プロダクト</span>
          </div>
          <div className="reccomendation-list">
            <p>U-22プログラミング・コンテスト2020 “行くぞ！「MIRAI PASS」” 応募要項発表</p>
            <span>2020/04/30</span> <span>PR, プロダクト</span>
          </div>
          <div className="reccomendation-list">
            <p>『Qiitaユーザーが選ぶ、2019年に読んで良かった技術書』アンケート結果発表</p>
            <span>2020/04/30</span> <span>PR, プロダクト</span>
          </div>
        </div>
      </div>
      <div className="sidebar ranking">
        <div className="ranking--top">
          <span>ユーザーランキング</span>
          <ul>
            <li>週間</li>
            <li>月間</li>
            <li>全て</li>
          </ul>
        </div>
        <div className="user-ranking--body">
          {users.map((user, idx) => (
            <RankingList list={user} num={idx} key={idx}/>
          ))}
        </div>
      </div>

      <div className="sidebar ranking">
        <div className="ranking--top">
          <span>タグ・ランキング</span>
          <ul>
            <li>週間</li>
            <li>月間</li>
            <li>全て</li>
          </ul>
        </div>
        <div className="tag-ranking--body">
          {tags.map((tag, idx) => (
            <RankingList list={tag} num={idx} key={idx} />
          ))}
        </div>
      </div>
      <div className="sidebar ranking">
        <div className="ranking--top">
          <span>Organizationランキング</span>
          <ul>
            <li>週間</li>
            <li>月間</li>
          </ul>
        </div>
        <div className="organization-ranking--body">
          {companies.map((company, idx) => (
            <RankingList list={company} num={idx} key={idx}/>
          ))}
        </div>
        <div className="ranking--bottom">
          <span>
            <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
            Organization一覧
          </span>
        </div>
      </div>
      <div className="sidebar community-sponsors">
        <span>コミュニティスポンサー</span>
        <div className="community-sponsors--body">
          <div className="sponsor-img">
            <img src={draft} alt="" />
          </div>
          <div className="sponsor-img">
            <img src={astrea} alt="" />
          </div>
          <div className="sponsor-img">
            <img src={ekiport} alt="" />
          </div>
          <div className="sponsor-img">
            <img src={pasona} alt="" />
          </div>
        </div>
        <div className="ranking--bottom">
          <span>
            <FontAwesomeIcon icon={["fas", "info-circle"]} />
            コミュニティスポンサーについて
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users, tags: state.tags, companies: state.companies };
};

export default connect(mapStateToProps)(RightSidebar);
