import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div  className="nav-logo">
            Events near you!
          </div>
           <div data-target="mobile-demo" className="sidenav-trigger">
            {/* <i className="material-icons">menu</i> */}
          </div>
          <ul className="right hide-on-med-and-down">
            <Link to="/Signup">
              <li>
                Sign up
              </li>
            </Link>
            <Link to="/Profile">
              <li>
                <p>Profile</p>
              </li>
            </Link>
            <Link to="/Search">
            <li>
              <p>Search</p>
            </li>
            </Link>
            <Link to="/Home">
            <li>
              <p>Home</p>
            </li>
            </Link>
            

          </ul> 
        </div>
      </nav>

      {/* <ul className="sidenav" id="mobile-demo">
        <Link to="Signup">
          <li>
            <p >Sign up</p>
          </li>
        </Link>
        <Link to="Profile">s
          <li>
            <p href="">Profile</p>
          </li>
        </Link>
        <Link to="/Search">
        <li>
          <p href="">Search</p>
        </li>
        </Link>
        <Link to="/Home">
        <li>
          <p href="">Home</p>
        </li>
        </Link>
      </ul>  */}
    </div>
  );
}
