import React, { Component } from "react"
import Countdown from "./Countdown"
import Descreption from "./Descreption"
import Booknow from "./Booknow"
import hero from "../assets/svgs/Hero.svg"
import line1 from "../assets/svgs/path61.svg"
import line2 from "../assets/svgs/path87.svg"
class HomeSection extends Component {
  render() {
    return (
      <div className="homesection">
        <div className="lines">
          <img src={line2} className="line2"></img>

          <img src={line1} className="line1"></img>
        </div>

        <div className="lefthero">
          <Descreption></Descreption>
          <Countdown futureDate="2021-04-09 00:00:00"></Countdown>
        </div>

        <div className="imagehero">
          <Booknow></Booknow>

          <img src={hero} className="womenhero"></img>
        </div>
      </div>
    )
  }
}

export default HomeSection
