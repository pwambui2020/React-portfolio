import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
          {menu === "home" && <span className="active-line"></span>}
        </li>

        <li>
          <p onClick={() => setMenu("about")}>About me</p>
          {menu === "about" && <span className="active-line"></span>}
        </li>

        <li>
          <p onClick={() => setMenu("service")}>Service</p>
          {menu === "service" && <span className="active-line"></span>}
        </li>

        <li>
          <p onClick={() => setMenu("work")}>Portfolio</p>
          {menu === "work" && <span className="active-line"></span>}
        </li>

        <li>
          <p onClick={() => setMenu("contact")}>Contact</p>
          {menu === "contact" && <span className="active-line"></span>}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
