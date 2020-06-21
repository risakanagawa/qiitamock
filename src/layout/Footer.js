import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer__left">
          <div className="footer__left--top">
            <h1 className="title">Qiita</h1>
            <span>How developers code is here.</span>
            <ul>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "facebook-square"]} /></li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right--company">
            <h3>Qiita</h3>
            <div className="company__list">
              <div className="company__list--column">
                <a href="/">About</a>
                <a href="/">利用規約</a>
                <a href="/">プライバシー</a>
                <a href="/">ガイドライン</a>
                <a href="/">リリース</a>
              </div>
              <div className="company__list--column">
                <a href="/">API</a>
                <a href="/">ご意見</a>
                <a href="/">ヘルプ</a>
                <a href="/">広告掲載</a>
              </div>
            </div>
          </div>
          <div className="footer__right--increments">
            <h3>Increments</h3>
            <div className="company__list company--info">
              <div className="company__list--column">
                <a href="/">About</a>
                <a href="/">採用情報</a>
                <a href="/">ブログ</a>
              </div>
              <div className="company__list--column">
                <a href="/">Qiita Team</a>
                <a href="/">Qiita Jobs</a>
                <a href="/">Qiita Zine</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
            <p>© 2011-2020 Increments Inc.</p>
          </div>
    </div>
  );
};

export default Footer;
