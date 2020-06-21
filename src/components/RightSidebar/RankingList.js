import React from "react";
import icon from "../../img/user_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RankingList = ({ list, num }) => {
  const { name, id, number_of_contributions } = list;
  const istrophy = (num) => {
    switch (num + 1) {
      case 1:
        return (
          <FontAwesomeIcon
            style={{ color: "#FFC402" }}
            icon={["fas", "trophy"]}
            size="2x"
          />
        );
      case 2:
        return (
          <FontAwesomeIcon
            style={{ color: "#C9C9C9" }}
            icon={["fas", "trophy"]}
            size="2x"
          />
        );
      case 3:
        return (
          <FontAwesomeIcon
            style={{ color: "#AB6E4D" }}
            icon={["fas", "trophy"]}
            size="2x"
          />
        );
      default:
        return <h2>{num + 1}</h2>;
    }
  };

  return (
    <div className="ranking__list" >
      <div className="ranking__list--info">
        <div className="ranking__list--rank">{istrophy(num)}</div>
        <div className="ranking__list--box">
          <div className="ranking__list--icon">
            <img src={list.img ? list.img : icon} alt="icon" />
          </div>
          <div className="ranking__list--detail">
            <h2>{name}</h2>
            <div className="ranking__list--meta">
              <span>{list.id ? `@${id}` : null}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ranking__list--contribution">
        <h2>{number_of_contributions}</h2>
        <span>{list.img ? "Posts" : "contribution"}</span>
      </div>
    </div>
  );
};

export default RankingList;
