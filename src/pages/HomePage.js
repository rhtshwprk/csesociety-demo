import React from "react";
import "./HomePage.css";
import logo from "../assets/NIT_Durgapur_Logo.png";
import person1 from "../assets/SN.jpeg";
import person2 from "../assets/batman.jpeg";
import person3 from "../assets/pbateman.jpg";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <div className="header-padding"></div>
        <div className="hero-flex-container">
          <div className="mob-center">
            <img alt="NITDGP Logo" className="nitlogo-image" src={logo} />
          </div>
          <div className="hero-text">
            <h1 className="main-heading">
              The <u>Computer Science</u> Society <br />
            </h1>
            <h3 className="main-heading-span">
              Department of Computer Science and Engineering, NIT Durgapur
            </h3>
            <p className="hero-desc">
              The Computer Science Society at NIT Durgapur is an organization
              dedicated to promoting computer science and its related fields
              among students. We try to serve as an invaluable resource in
              providing knowledge and experience to students and faculty alike.
            </p>
            <div className="mob-center">
              <Link to="/about">
                <button className="primary-btn">Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="aboutus">
        <div className="header-padding"></div>

        <div>
          {/* <h2 className="section-bg">ABOUT US</h2> */}
          <h2 className="section-heading">ABOUT US</h2>
          <p className="aboutus-desc">
            The Computer Science Society at NIT Durgapur is an organization
            dedicated to promoting computer science and its related fields among
            students. We aim to build a society where all computer science
            enthusiasts can come together and learn from each other. We try to
            serve as an invaluable resource in providing knowledge and
            experience to students and faculty alike.
          </p>

          <Cards />
          <div className={"btn-container"}>
            <Link to="/about">
              <button className="primary-btn2">Know More</button>
            </Link>
          </div>
        </div>
      </section>

      <section id="events">
        <div className="header-padding"></div>

        <div>
          {/* <h2 className="section-bg">ABOUT US</h2> */}
          <h2 className="section-heading">UPCOMING EVENTS</h2>
          <div className="event-container">
            <p>No events found. Come back later.</p>
          </div>
          <div className="form-container">
            <h4>
              Get latest updates on <span>FUTURE EVENTS</span>
            </h4>
            <div className={"btn-container flexor"}>
              <input
                className={"input-email"}
                placeholder="Drop your e-mail."
              ></input>
              <button className="primary-btn2">Sign Up</button>
            </div>
          </div>
        </div>
      </section>

      <section id="members">
        <div className="header-padding"></div>

        <div>
          {/* <h2 className="section-bg">ABOUT US</h2> */}
          <h2 className="section-heading">EXECUTIVE MEMBERS</h2>

          <div className="members-container">
            <div className="member-card">
              <img className="member-photo" src={person1} />

              <h3>Convenor</h3>
              <p>Dr Subrata Nandi</p>
              <p>HOD, Department of CSE</p>
              <p>subrata.nandi@cse.nitdgp.ac.in</p>
            </div>
            <div className="member-card">
              <img className="member-photo" src={person2} />

              <h3>President</h3>
              <p>Bruce Wayne</p>
              <p>racheldawes@btech.nitdgp.ac.in</p>
            </div>
            <div className="member-card">
              <img className="member-photo" src={person3} />

              <h3>Vice-president</h3>
              <p>Patrick Bateman</p>
              <p>patrickbateman@btech.nitdgp.ac.in</p>
            </div>
          </div>

          <div className={"btn-container"}>
            <Link to="/about">
              <button className="primary-btn2">See All Members</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
