import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer"> 
        <a
          href="https://github.com/kirito714/ReactApp2021"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../images/icons/github.png"
            alt="Github Icon"
            className="footerIcons"
          />
        </a>
        <div className="row">
          <p className="col s12">Developer Repositories</p>
          <div className="row center-align">
          <p className="col">Cassie</p>
            <p className="col">Paola</p>
            <p className="col">Mike</p>
            <p className="col">Joe</p>
            <div className="row center-align">
              <div className="text-center">
                {" "}
                Icons made by{" "}
                <a href="https://www.freepik.com" title="Freepik">
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
