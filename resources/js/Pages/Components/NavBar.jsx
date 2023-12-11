//resources\js\Pages\Components\NavBar.jsx
import React from "react";
import LoginLink from "./LoginLink";
import RegisterLink from "./RegisterLink";
import SearchBar from "./SearchBar";
import LogoMainLink from "./LogoMainLink";


const NavBar = () => {
  return (
    <div className='bg-danger'>
      <nav className='navbar navbar-expand-sm bg-light '>
      <div className='container d-flex justify-content-center align-items-center'>
          <LogoMainLink/>
          <SearchBar/>
          <ul className='navbar-nav ml-auto'> 
            <RegisterLink />
            <LoginLink />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
