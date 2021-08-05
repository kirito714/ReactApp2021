import React from "react";
import "./Navbar.css";
// import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" className="nav-logo">
            Events near you!
          </a>
          {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a> */}
          {/* <ul class="right hide-on-med-and-down">
              <Link to='Signup'>
            <li>
              <a>Sign up</a>
            </li>
            </Link>
            <Link to='Profile'>
            <li>
              <a href="">Profile</a>
            </li>
            </Link>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul> */}
        </div>
      </nav>

      {/* <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sign up</a>
        </li>
        <li>
          <a href="badges.html">Profile</a>
        </li>
        <li>
          <a href="collapsible.html">Search</a>
        </li>
        <li>
          <a href="mobile.html">Home</a>
        </li>
      </ul> */}
    </div>
  );
}
