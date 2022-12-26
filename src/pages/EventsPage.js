import React from "react";
import Cards from "../components/Cards";

const EventsPage = () => {
  return (
    <div>
      <div className="page-margin">
        <div className="header-padding"></div>

        <div>
          {/* <h2 className="section-bg">ABOUT US</h2> */}
          <h2 className="page-heading">EVENTS</h2>

          <Cards black />
          <div>
            <div className="header-padding"></div>
            <h2 className="page-subheading">UPCOMING EVENTS</h2>
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
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
