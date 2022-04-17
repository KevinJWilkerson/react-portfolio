import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About</a>
          </li>
          <li className="mx-2">
            <a href="#work">Work</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact</a>
          </li>
          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
