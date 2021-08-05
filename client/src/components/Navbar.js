import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <div className="nav-logo">
            Events near you!
          </div>
          <div data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </div>
          <ul class="right hide-on-med-and-down">
            <Link to="Signup">
              <li>
                <p>Sign up</p>
              </li>
            </Link>
            <Link to="Profile">
              <li>
                <p >Profile</p>
              </li>
            </Link>
            <li>
              <p >Search</p>
            </li>
            <li>
              <p>Home</p>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <Link to="Signup">
          <li>
            <p>Sign up</p>
          </li>
        </Link>
        <Link to="Profile">s
          <li>
            <p >Profile</p>
          </li>
        </Link>
        <li>
          <p >Search</p>
        </li>
        <li>
          <p>Home</p>
        </li>
      </ul>
    </div>
  );
}
