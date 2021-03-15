import React, { ReactElement } from "react"
import ScheduleCard from "../components/Schedule/ScheduleCard"
import ScheduleSection from "../components/Schedule"

interface Props {}

function SchedulePage({}: Props): ReactElement {
  return (
    <>
      <div style={{ height: 400 }}></div>
      <ScheduleSection />
    </>
  )
}

export default SchedulePage
