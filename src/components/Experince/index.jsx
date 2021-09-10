import React from "react"

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Full Stack Developer at Library Project StartUp 2021-2021</h3>
            <p>
              A website that gives access to old literature whether they were
              newspapers from the 1800s or even books from the 1700s, and helps
              to conserve them in a digital manner. technologies: React,
              Express, PostgreSQL, Deep zoom images In this project, I worked on
              the both sides of the project, front and back end.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>
              Store Manager <p>2017-2021</p>
            </h3>
            <p>
              Responsible for ensuring a consistently high standard of
              presentation in the store and making sure that all available space
              in the store is effectively utilized.
              <li>
                Recruiting, hiring, training, and coaching to develop top
                performing employees.
              </li>
              <li>
                Knowledge of Retail KPIs to make commercial decisions that drive
                achievement of established sales targets
              </li>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>
              Assistant Teacher <p>2015-2017</p>
            </h3>
            <p>
              This position includes work with students in the computerization
              department, computer breakdowns, explanations of parts, etc. It's
              also demands a high level of listening to student requests and the
              ability to transfer the information in a perfect way.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
