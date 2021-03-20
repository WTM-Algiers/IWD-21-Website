import React, { ReactElement } from "react"
interface IProps {
  eventDates: string
}
function Description ({
  eventDates
}:IProps):ReactElement {
  return (
    <div className="descreption">
      <div className="date-desc">{eventDates}</div>
      <div className="international-desc">
        International <br />
        Women's Day
      </div>
      <div className="desc-desc">
        Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
        dignissim elementum mauris.
      </div>
      <div className="countdown-desc">Don't Waste Your Time!</div>
    </div>
  )
  
}

export default Description
