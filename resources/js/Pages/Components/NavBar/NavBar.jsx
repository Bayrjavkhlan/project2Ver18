// resources\js\Pages\Components\NavBar.jsx
import React from "react";
import LoginLink from "./LoginLink";
import RegisterLink from "./RegisterLink";
import SearchBar from "./SearchBar";
import LogoMainLink from "./LogoMainLink";

const NavBar = () => {
  return (
    <div className='bg-danger'>
      <nav className='navbar navbar-expand-sm bg-light '>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <div className="d-flex align-items-center">
            <LogoMainLink/>
          </div>
          <SearchBar/>
          <ul className='navbar-nav'> 
            <RegisterLink />
            <LoginLink />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
