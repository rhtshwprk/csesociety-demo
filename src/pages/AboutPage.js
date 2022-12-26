import React from "react";
import MemberCard from "../components/MemberCard";
import "./AboutPage.css";
const AboutPage = () => {
  const members = [
    {
      name: "Subrata Nandi",
      post: "Convenor",
      details: `HOD, Dept. of CSE \n subrata.nandi@nitdg.ac.in`,
      url: "https://nitdgp.ac.in/uploads/abd4fd9036f1223038b2c9643dad0f18.jpeg",
    },
    {
      name: "Sharyl Wayne",
      post: "President",
      details: " ",
      url: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      name: "Clark Kent",
      post: "Vice President",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Peter Parker",
      post: "Creative Head",
      details: "",
      url: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    {
      name: "Tony Stark",
      post: "Tech Head",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Steve Rogers",
      post: "Event Head",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      name: "Natasha Romanoff",
      post: "Webmaster",
      details: " ",
      url: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      name: "Thor Odinson",
      post: "Senior Member",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      name: "Bruce Banner",
      post: "Junior Member ",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      name: "Wanda Maximoff",
      post: "Junior Member",
      details: " ",
      url: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      name: "T'Challa",
      post: "Junior Member",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      name: "Carol Danvers",
      post: "Junior Member",
      details: " ",
      url: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
      name: "Scott Lang",
      post: "Junior Member",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      name: "Sam Wilson",
      post: "Junior Member",
      details: " ",
      url: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  ];
  return (
    <div>
      <div className="page-margin">
        <div className="header-padding"></div>

        <div>
          {/* <h2 className="section-bg">ABOUT US</h2> */}
          <h2 className="page-heading">ABOUT US</h2>
          <p className="page-aboutus-desc">
            The Computer Science Society at NIT Durgapur is an organization
            dedicated to promoting computer science and its related fields among
            students. We aim to build a society where all computer science
            enthusiasts can come together and learn from each other. We try to
            serve as an invaluable resource in providing knowledge and
            experience to students and faculty alike.
          </p>

          <div className="mission-border">
            <h3 className="page-subheading">Our Mission</h3>
            <div className="mission-list">
              <ol>
                <li>
                  Foster an interest in computer science and technology among
                  engineering students.{" "}
                </li>
                <li>
                  Share technical knowledge and promote collaboration among
                  students.{" "}
                </li>
                <li>
                  Offer resources to help students learn and practice
                  programming.{" "}
                </li>
                <li>
                  Facilitate engagement with industry professionals,
                  practitioners, and researchers for exchange of ideas.{" "}
                </li>
                <li>
                  Organize events and activities like hackathons, workshops, and
                  seminars to promote learning.
                </li>
                <li>
                  Raise awareness about the potential of computer science to
                  innovate and create solutions to problems.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="members-section">
        <div className="page-margin">
          <h2 className="page-subheading members">OUR MEMBERS</h2>
          <div className="page-members-container">
            {members.map((member) => (
              <MemberCard
                name={member.name}
                post={member.post}
                details={member.details}
                url={member.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
