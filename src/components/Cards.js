import React from "react";
import "./Cards.css";
const Cards = (props) => {
  const black = props.black ? true : false;
  return (
    <div className={`card-container ${black ? "black-cards" : ""}`}>
      <div className="card">
        <h4>Alumni Talks</h4>
        <p>
          This is a great opportunity for students to gain insight into what a
          particular industry looks like, best practices, and the latest trends
          in the field.
        </p>
      </div>
      <div className="card">
        {" "}
        <h4>Tech Workshops</h4>
        <p>
          This is a great way for students to learn new skills in a fun and
          interactive setting, as well as to get hands on experience with
          cutting-edge technology.
        </p>
      </div>
      <div className="card">
        {" "}
        <h4>Coding Contests</h4>
        <p>
          Take part in coding contests and compete with the sharpest minds to
          solve interesting questions and win prizes!
        </p>
      </div>
      <div className="card">
        {" "}
        <h4>Hackathons</h4>
        <p>
          These are fun long-format events where students can work as a team,
          create and submit their projects and keep learning as they go!
        </p>
      </div>
    </div>
  );
};

export default Cards;
