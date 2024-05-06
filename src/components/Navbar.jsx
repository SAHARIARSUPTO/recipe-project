import React, { useState } from "react";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          Cuisine Canvas
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
