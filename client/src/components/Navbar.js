import React from 'react'
import './Navbar.css'



export default function Navbar(){
    return(
        <div>
            
  <nav>
    <div class="nav-wrapper">
      <a href="#!" className="nav-logo">Events near you!</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="">Profile</a></li>
        <li><a href="">Search</a></li>
        <li><a href="">Javascript</a></li>
        <li><a href="">Mobile</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Profile</a></li>
    <li><a href="badges.html">Search</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
        </div>
        
    )
}