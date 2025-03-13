
import "./about.css"
import AboutCard from "./aboutcard/AboutCard"
const About = () => {
  return (
    <div className="about">
      <section className="back">
        <h1 className="text-center text-6xl transform capitalize">About Us</h1>
      </section>
      <div className="margin"></div>
      <AboutCard />
    </div>
  )
}

export default About
