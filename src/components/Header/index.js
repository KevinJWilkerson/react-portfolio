import React from "react";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="flex-row px-1 nav-container">
      <div className="logo-container">
        <a href="/">
          <p>KEVIN WILKERSON</p>
        </a>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
