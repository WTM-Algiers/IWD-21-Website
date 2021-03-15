import React, { Component } from "react"
import Countdown from "./Countdown"
import Descreption from "./Descreption"
import Booknow from "./Booknow"
const hero = require("../assets/svgs/Hero.svg") as string
const line1 = require("../assets/svgs/path61.svg") as string
const line2 = require("../assets/svgs/path87.svg") as string
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
