import React, { Component } from "react"
interface IProps {
  eventDates: string
}
class Description extends Component<IProps> {
  render() {
    return (
      <div className="descreption">
        <div className="date-desc">{this.props.eventDates}</div>
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
}

export default Description
