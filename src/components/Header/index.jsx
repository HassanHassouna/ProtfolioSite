import React from "react"
import Video from "../../bbb.mp4"
import Typed from "react-typed"
function Header() {
  return (
    <div className="header_container">
      <video className="video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="main_info">
        <h1>Hassan Hassouna</h1>
        <Typed
          className="typed_text"
          strings={["Web Design", "Web Developer", "Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  )
}

export default Header
