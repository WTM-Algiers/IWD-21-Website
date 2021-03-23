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
          International Women’s Day is a global occasion celebrated annually on
          March 8th, in order to show respect and appreciation for women and
          celebrate their economic, political, and social achievements, and each
          year, WTM Algiers hosts one big event in honor of all the women
          contributing in the STEM industry.
        </div>
        <div className="countdown-desc">Don't Miss Anything!</div>
      </div>
    )
  }
}

export default Description
