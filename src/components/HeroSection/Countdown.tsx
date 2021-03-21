import React, { ReactElement, useState, useEffect } from "react"
import moment, { duration } from "moment"

interface IProps {
  futureDate: string
}

interface IState {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function Countdown({
  futureDate
}:IProps):ReactElement {
  
  const [date, setDate] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const setCountdown = () => {
    const fdate = moment(futureDate);

    const today = moment()

    const clockDuration = duration(fdate.diff(today))
    if (clockDuration.asDays() > 0) {
      setDate({
        day: Math.floor(clockDuration.asDays()),
        hours: clockDuration.hours(),
        minutes: clockDuration.minutes(),
        seconds: clockDuration.seconds()
      });
    }
  }

  let intervale:any;
  useEffect(() => {
    intervale = setInterval(() => {
      setCountdown();
    }, 1000);
    return () => {
      clearInterval(intervale);
    }
  });

  return (
    <div className="countdown">
      {Object.keys(date).map((key, i) => (
        <div className="countdown-segment">
          <div className={"count" + (i + 1) + " countdown-segment-nb"}>
            {date[key]}
          </div>
          <br/>
          <div className="countdown-segment-caption">{key}</div>
        </div>
      ))}
    </div>
  )
}

export default Countdown
