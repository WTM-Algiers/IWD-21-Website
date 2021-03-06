import React, { Component } from "react"
import Countdown from "./Countdown"
import Descreption from "./Descreption"

class HomeSection extends Component {
  render() {
    return (
      <div>
        <Descreption></Descreption>
        <Countdown futureDate="2021-04-18 00:00:00"></Countdown>
      </div>
    )
  }
}

export default HomeSection
