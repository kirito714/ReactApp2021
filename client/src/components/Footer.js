import React from "react";
import "./Navbar.css";

function Footer() {
  return (
    <footer>
      <nav className="nav-wrapper">
      <a 
            href="https://github.com/Cassiep1986"
            target="_blank"
            rel="noopener noreferrer"><img src = "/images/icons/github.png" alt="Github Icon" className = "icons"/>
          </a>
      </nav>

      <div>
        <p>Developer Repositories</p>
      </div>
      <div className="devrepos">
        <p>Cassie</p>
        <p>Paola</p>
        <p>Mikey</p>
        <p>Joe</p>
      </div>

      <div className = "text-center"> Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
  );
}

export default Footer;
