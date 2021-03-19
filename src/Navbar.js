import React from "react";
import logo from "./logo.png";
import { NavLink } from "./staticComponents";
import { SiGooglescholar, SiGithubactions } from "react-icons/si";
import { IoIosLaptop } from "react-icons/io";
import { GiProgression, GiGiftOfKnowledge } from "react-icons/gi";
import { BsFillCalendarFill } from "react-icons/bs";
function Navbar() {
  const styles = {
    navbar: {
      boxSizing: "border-box",
      padding: "1rem 0 1rem 1rem",
      width: "20%",
    },
    logo: {
      width: "12rem",
      marginBottom: "3rem",
    },
  };
  return (
    <div style={styles.navbar}>
      <img style={styles.logo} src={logo} />
      <NavLink icon={SiGooglescholar}>Programs</NavLink>
      <NavLink icon={IoIosLaptop} isActive={true}>
        Coaching
      </NavLink>
      <NavLink icon={SiGithubactions}>Collaborations</NavLink>
      <NavLink icon={GiProgression}>Progress</NavLink>
      <NavLink icon={GiGiftOfKnowledge}>Knowledge</NavLink>
      <NavLink icon={BsFillCalendarFill}>Calender</NavLink>
    </div>
  );
}

export default Navbar;
