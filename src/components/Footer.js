import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col footer-left">
          <h3>SOCIALS</h3>
          <div className="icon-container">
            <p>Instagram</p>
            <p>Linkedin</p>
            <p>Facebook</p>
            <div className="logo-social"></div>
            <div className="logo-social"></div>
          </div>
        </div>
        <div className="footer-col footer-center">
          <h3>CONTACT US</h3>
          <p>President: +91 9876543210 </p>
          <p>Vice-president: +91 8976543210</p>
          <p>cssnitdgp@gmail.com</p>
        </div>
        <div className="footer-col footer-right">
          <h3>QUICK LINKS</h3>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/events">
            <p>Events</p>
          </Link>
          {/* <Link to="/alumni">
            <p>Alumni</p>
          </Link> */}
        </div>
      </div>
      <p>
        © 2022 The Computer Science Society, NIT Durgapur. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
