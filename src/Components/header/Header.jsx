import React from "react";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header className="grit-header">
        <img
          className="gritlogo"
          src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png"
          alt="Grit-Academy-Logo"
        ></img>
        <NavLink className={"a"} to="/Login">
          Signup/Login
        </NavLink>
        <NavLink className={"a"} to="/">
          Movies
        </NavLink>
      </header>
    );
  }
}

export default Header;
