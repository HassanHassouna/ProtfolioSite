import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
// AVATARS IMPORTS
import avatar1 from "../../images/avatars/karyum.jpeg"
import avatar2 from "../../images/avatars/mahamed.jpeg"

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Mario Saliba" />
        <div className="myCarousel">
          <h3>Mario Saliba</h3>
          <h4>Senior Full Stack Developer</h4>
          <p>
            Passionate, creative, and talented Senior Full Stack developer with
            experience in modern frontend frameworks and an excellent
            understanding of server-side technologies.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Mahmod Mahamed" />
        <div className="myCarousel">
          <h3>Mahmod Mahamed</h3>
          <h4>Full Stack Developer</h4>
          <p>
            Highly skilled Full Stack developer who is comfortable with both
            front and back end programming. Responsible for developing and
            designing front end web architecture.
          </p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel
