import React from "react"
import moment, { duration } from "moment"
import Fade from "react-reveal/Fade"
interface IProps {
  futureDate: string
}

interface IState {
  days: number
  hours: number
  minutes: number
  seconds: number
}

class Countdown extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  setCountdown() {
    const futureDate = moment(this.props.futureDate)

    const today = moment()

    const clockDuration = duration(futureDate.diff(today))
    if (clockDuration.asDays() > 0) {
      const days = Math.floor(clockDuration.asDays())
      const hours = clockDuration.hours()
      const minutes = clockDuration.minutes()
      const seconds = clockDuration.seconds()
      this.setState({
        days,
        hours,
        minutes,
        seconds,
      })
    }
  }
  componentDidMount() {
    this.setCountdown()
    setInterval(() => {
      this.setCountdown()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(
      setInterval(() => {
        this.setCountdown()
      }, 1000)
    )
  }

  render() {
    return (
      <div className="countdown">
        {Object.keys(this.state).map((key, i) => (
          <div className="countdown-segment">
            <div className={"count" + (i + 1) + " countdown-segment-nb"}>
              {this.state[key]}
            </div>
            <div className="countdown-segment-caption">{key}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Countdown
