import React, { ReactElement } from "react"
import Countdown from "./Countdown"
import Description from "./Description"
import Booknow from "./BookNow"

interface IProps {
  futureDate: string
  eventDates: string
}

function HomeSection ({
  futureDate,
  eventDates
}:IProps):ReactElement{
    return (
      <section className="homesection">
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
          <Description eventDates={eventDates}></Description>
          <Countdown futureDate={futureDate}></Countdown>
        </div>

        <div className="imagehero">
          <Booknow></Booknow>

          <img
            src={require("../../assets/svgs/Hero.svg")}
            className="womenhero"
            alt="Hero-Icon"
          ></img>
        </div>
      </section>
    );
}

export default HomeSection
