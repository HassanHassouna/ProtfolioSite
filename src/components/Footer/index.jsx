import React from "react"
import {
  Link,
  animateScroll as scroll,
} from "react-scroll"
import { SocialIcon } from "react-social-icons"
const Footer = () => {
  let url = "https://github.com"
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Israe,Tel Aviv - Jaffa</p>
            </div>

            <div className="d-flex">
              <p>hhasona@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link
                  smooth={true}
                  to="home"
                  offset={-110}
                  href="#"
                  className="footer-nav"
                >
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  href="#"
                  className="footer-nav"
                >
                  About me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="services"
                  offset={-110}
                  href="#"
                  className="footer-nav"
                >
                  Services
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-110}
                  href="#"
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  href="#"
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-110}
                  href="#"
                  className="footer-nav"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div id="icons">
              <SocialIcon
                url="https://www.linkedin.com/in/hassan-hassouna-junior-full-stack-developer/"
                target="_blank"
              />
              <SocialIcon
                url="https://github.com/hhasona"
                bgColor="orange"
                target="_blank"
              />
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Israel| All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
