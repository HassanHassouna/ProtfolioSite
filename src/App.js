import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Experience from "./components/Experince"
import Pofrfolio from "./components/Protfolio"
import Testimonials from "./components/Testimonials"
import Contacts from "./components/ContectMe"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Pofrfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
