import React, { Component } from "react"
import Countdown from "./Countdown"
import Description from "./Description"
import Booknow from "./BookNow"

interface IProps {
  futureDate: string
}

class HomeSection extends Component<IProps> {
  render() {
    return (
      <div className="homesection">
        <div className="lines">
          <img
            src={require("../../assets/svgs/Path87.svg")}
            className="line2"
            alt="Line2"
          ></img>

          <img
            src={require("../../assets/svgs/Path61.svg")}
            className="line1"
            alt="Line1"
          ></img>
        </div>

        <div className="lefthero">
          <Description></Description>
          <Countdown futureDate={this.props.futureDate}></Countdown>
        </div>

        <div className="imagehero">
          <Booknow></Booknow>

          <img
            src={require("../../assets/svgs/Hero.svg")}
            className="womenhero"
            alt="Hero-Icon"
          ></img>
        </div>
      </div>
    )
  }
}

export default HomeSection