import React from "react";

function Header(props) {
  return (
    <header className="flex-row px-1 nav-container">
      <div className="logo-container">
        <p>KEVIN WILKERSON</p>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
