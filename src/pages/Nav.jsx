import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div>
      <div className="contact-header">
        Call us on 123456789|| Email us @example.com
      </div>
      <nav>
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          Home
        </Link>
        <ul>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>About</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>Facilities</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>Pshychiatric Ward</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>Rehabilitation Unit</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>Gallery</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>FAQ</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>Contact Us</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
