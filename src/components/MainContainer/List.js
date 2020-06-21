import React from "react";
import icon from "../../img/icon.png";
const List = ({ list }) => {
  const { id, title } = list;
  const day = Math.floor(Math.random() * 10) + 1;
  const lgtm = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="article">
      <div className="article--icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="article--detail">
        <h2>{title}</h2>
        <div className="article--meta">
          <span>by {id}</span>
          <span>{day === 1 ? `${day} day ago` : `${day} days ago`} </span>
         <span>LGTM</span> <span>{lgtm}</span>
        </div>
      </div>
    </div>
  );
};

export default List;
