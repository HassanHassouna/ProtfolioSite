import React from "react"
import author from "./myImage.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Hassan. I have finished recently an Full Stack Bootcamp
            and looking for my first position as a Full Stack Developer.
            Technologies I learned is MERN(MongoDB, Express, ReactJS and
            NodeJS). I create responsive websites that are displayed on all
            devices desktops and smartphones. Of course, before I begin
            developing any webapp, Landing Page, Business Website or E-commerce,
            I need to have a ready-made project layout (sketch). I’m ready to
            learn more everyday and looking for improve and show my skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
