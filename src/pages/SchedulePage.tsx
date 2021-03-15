import React, { ReactElement } from "react"
import ScheduleCard from "../components/Schedule/ScheduleCard"

interface Props {}

function SchedulePage({}: Props): ReactElement {
  return (
    <div className="flex">
      <div style={{ width: 500 }} className="mx-10 my-10">
        <ScheduleCard
          title="Machine Learning and AI"
          subtitle="Anna smith"
          time="8:00"
          avatarSrc="https://api.time.com/wp-content/uploads/2018/12/square-meghan-markle-person-of-the-year-2018.jpg?quality=85"
          avatarAlt="alt"
          timeColor="#ffffff"
          titleColor="#ffffff"
          backgroundColor="#6a4b82"
          subtitleColor="rgba(255,255,255,0.5)"
        />
        <br />
        <ScheduleCard
          title="Design better professional UI"
          subtitle="Anna smith"
          time="8:00"
          avatarSrc="https://api.time.com/wp-content/uploads/2018/12/square-meghan-markle-person-of-the-year-2018.jpg?quality=85"
          avatarAlt="alt"
          timeColor="#80c390"
          titleColor="#000000"
          backgroundColor="#e1f8e8"
          subtitleColor="rgba(0,0,0,0.5)"
        />
        <br />
        <ScheduleCard
          title="Machine Learning and AI"
          subtitle="Anna smith"
          time="8:00"
          avatarSrc="https://api.time.com/wp-content/uploads/2018/12/square-meghan-markle-person-of-the-year-2018.jpg?quality=85"
          avatarAlt="alt"
          timeColor="#f28e73"
          titleColor="#000000"
          backgroundColor="#ffecec"
          subtitleColor="rgba(0,0,0,0.5)"
        />
        <br />
        <ScheduleCard
          title="Machine Learning and AI"
          subtitle="Anna smith"
          time="8:00"
          avatarSrc="https://api.time.com/wp-content/uploads/2018/12/square-meghan-markle-person-of-the-year-2018.jpg?quality=85"
          avatarAlt="alt"
          timeColor="#6ba0e1"
          titleColor="#000000"
          backgroundColor="#e2f8fe"
          subtitleColor="rgba(0,0,0,0.5)"
        />
      </div>
    </div>
  )
}

export default SchedulePage
