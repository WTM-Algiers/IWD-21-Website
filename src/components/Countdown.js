import React, { Component } from "react"
import moment, { duration } from "moment"

class Countdown extends Component {
  state = {
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
  }
  setCountdown() {
    const futureDate = moment(this.props.futureDate)

    const today = moment()

    const clockDuration = duration(futureDate.diff(today))

    const days = Math.floor(clockDuration.asDays())
    const hrs = clockDuration.hours()
    const mins = clockDuration.minutes()
    const secs = clockDuration.seconds()
    this.setState({
      days,
      hrs,
      mins,
      secs,
    })
  }
  componentDidMount() {
    this.setCountdown()
    this.interval = setInterval(() => {
      this.setCountdown()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="countdown">
        {Object.keys(this.state).map((key, i) => (
          <div className="countdown-segment">
            <span className="countdown-segment-nb">
              {this.state[key]}
              <br />
            </span>
            <span className="countdown-segment-caption">
              {key.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default Countdown
