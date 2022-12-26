import React from "react";
import "./MemberCard.css";

const MemberCard = (props) => {
  return (
    <div className="page-member-card">
      <img alt="k" className="member-photo" src={props.url} />

      <h3>{props.post}</h3>
      <p>{props.name}</p>
      <p>{props.details}</p>
    </div>
  );
};

export default MemberCard;
