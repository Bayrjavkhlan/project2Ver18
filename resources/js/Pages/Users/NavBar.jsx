import React from "react";

export default function NavBar(){
    return(
        <div className='bg-danger'>
            <nav className='navbar navbar-expand-sm bg-light '>
                <div className='container'>
                    <a className='navbar-brand' href="main">Library</a>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'><a className='nav-link' href="register">Register</a></li>
                        <li className='nav-item'><a className='nav-link' href="login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}