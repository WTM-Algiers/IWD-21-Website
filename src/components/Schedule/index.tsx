import React, { ReactElement, useState } from "react"
import ScheduleCard from "./ScheduleCard"
import classnames from "classnames"
import data from "./schedule.json"
interface Props {}

interface ScheduleData {
  uid: string | number
  title: string
  subtitle: string
  avatar: string
  time: string
}
const scheduleTheming = [
  {
    timeColor: "#ffffff",
    titleColor: "#ffffff",
    backgroundColor: "#6a4b82",
    subtitleColor: "rgba(255,255,255,0.5)",
  },
  {
    timeColor: "#80c390",
    titleColor: "#000000",
    backgroundColor: "#e1f8e8",
    subtitleColor: "rgba(0,0,0,0.5)",
  },
  {
    timeColor: "#f28e73",
    titleColor: "#000000",
    backgroundColor: "#ffecec",
    subtitleColor: "rgba(0,0,0,0.5)",
  },
  {
    timeColor: "#6ba0e1",
    titleColor: "#000000",
    backgroundColor: "#e2f8fe",
    subtitleColor: "rgba(0,0,0,0.5)",
  },
]

const scheduleData: {
  [name: string]: ScheduleData[]
} = data
const ScheduleList: React.FC<{ data: ScheduleData[] }> = ({ data }) => {
  return (
    <ul className="flex m-0 flex-col md:w-3/5 md:mx-auto my-10 self-stretch">
      {data?.map((item, index) => {
        const isEven = index % 2
        const themeIndex = index % scheduleTheming.length
        return (
          <>
            <li
              className={classnames("mx-2 md:flex", {
                "md:self-start": !isEven,
                "md:self-end": isEven,
              })}
            >
              <ScheduleCard
                title={item.title}
                subtitle={item.subtitle}
                time={item.time}
                avatarSrc={item.avatar}
                avatarAlt={item.title}
                {...scheduleTheming[themeIndex]}
              />
            </li>
            {index !== data.length - 1 ? <br></br> : null}
          </>
        )
      })}
    </ul>
  )
}

const TabSelector: React.FC<{
  selected: string
  tabs: string[]
  onChange: (tid: string) => void
}> = ({ selected, tabs, onChange }) => {
  return (
    <ul className="flex m-0 w-full md:w-1/4 justify-evenly">
      {tabs.map((item, index) => {
        const isSelected = selected === item
        return (
          <li
            className={classnames(
              "cursor-pointer border-b-2 transition-all duration-150 ease-in",
              {
                "text-gray-600": !isSelected,
                "text-black": isSelected,
                "border-blue-500": isSelected,
                "border-transparent": !isSelected,
              }
            )}
            key={item}
            onClick={() => {
              onChange(item)
            }}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}
function ScheduleSection({}: Props): ReactElement {
  const days = Object.keys(scheduleData)
  const [currentDay, setCurrentDay] = useState(days[0])
  return (
    <section id="Schedule">
      <div className="flex flex-col justify-center items-center w-full relative">
        {/*<svg
        xmlns="http://www.w3.org/2000/svg"
        width="190"
        height="190"
        viewBox="0 0 190 190"
        className="absolute right-0"
        style={{
          zIndex: 2,
          right: -95,
          top: -95,
        }}
      >
        <defs>
          <linearGradient
            id="r4eqep0e3a"
            x1=".5"
            x2=".5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#ffeefd" />
            <stop offset="1" stop-color="#f5e4a4" />
          </linearGradient>
        </defs>
        <circle cx="95" cy="95" r="95" fill="url(#r4eqep0e3a)" />
      </svg>
      */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="190"
          viewBox="0 0 190 190"
          className="absolute"
          style={{
            zIndex: -1,
            left: "-100px",
          }}
        >
          <g fill="none" stroke="#fff7ec" stroke-width="39px" opacity="0.8">
            <circle cx="95" cy="95" r="95" stroke="none" />
            <circle cx="95" cy="95" r="75.5" />
          </g>
        </svg>

        <h1 className="pt-12">Schedule</h1>
        <TabSelector
          selected={currentDay}
          tabs={days}
          onChange={(tabId: string) => setCurrentDay(tabId)}
        ></TabSelector>
        <ScheduleList data={scheduleData[currentDay]} />
      </div>
    </section>
  )
}

export default ScheduleSection
