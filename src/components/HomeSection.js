import React, { Component } from "react"
import Countdown from "./Countdown"
import Descreption from "./Descreption"
import Booknow from "./Booknow"
import hero from "../images/women-hero.png"
class HomeSection extends Component {
  render() {
    return (
      <div className="homesection">
        <div className="lefthero">
          <Descreption></Descreption>
          <Countdown futureDate="2021-04-18 00:00:00"></Countdown>
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
