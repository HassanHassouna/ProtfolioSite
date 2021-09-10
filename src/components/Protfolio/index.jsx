import React from "react"
import telAviv from "../../images/work1.png"
import Workers from "../../images/work2.png"
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

const Pofrfolio = () => {
  // Tel Aviv
  const openPopupboxTelAviv = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={telAviv}
          alt="Tel Aviv - Yaffo Store.."
        />
        <p>
          Tel Aviv Yaffo store that help Tel Aviv Yaffo citizents to buy/sell
          there staff without posting there things in alot of platforms.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/hhasona/TelAvivYaffa")}
        >
          https://github.com/hhasona/TelAvivYaffa
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTelAviv = {
    titleBar: {
      enable: true,
      text: "Tel Aviv Store.",
    },
  }

  // Workers
  const openPopupboxWorkers = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Workers}
          alt="Workers To The Home"
        />
        <p>
          An smartphone app that can afford to the user who is in a impasse to
          find someone that can fix his problem.
        </p>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(" https://github.com/hhasona/HNH", "_blank")
          }
        >
          https://github.com/hhasona/HNH
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigWorkers = {
    titleBar: {
      enable: true,
      text: "Workers To The Home",
    },
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper column justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxTelAviv}>
            <img
              className="portfolio-image"
              src={telAviv}
              alt="Tel Aviv Yaffo store..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxWorkers}>
            <img
              className="portfolio-image"
              src={Workers}
              alt="Workers To The Home."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigTelAviv} />
      <PopupboxContainer {...popupboxConfigWorkers} />
    </div>
  )
}

export default Pofrfolio
