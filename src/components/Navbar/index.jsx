import React from "react"
import logo from "../../hhasonalogo.png"
//readt font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff", border: "none", outline: "none" }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link"
                href="#"
              >
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                className="nav-link"
                offset={-110}
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Protfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
