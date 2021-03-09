import React from "react"
import Cards from "../components/GrowTogetherComponents/Cards"
import GrowTogetherSection from "../components/GrowTogetherComponents/GrowTogetherSection"
import "../css/index.css"

const GrowTogether: React.FC = () => {
  return (
    <>
      <div
        style={{ width: "100%", height: "0500px", backgroundColor: "#e5f9f8" }}
      ></div>

      <GrowTogetherSection></GrowTogetherSection>

      <div
        style={{ width: "100%", height: "0500px", backgroundColor: "#e5f9f8" }}
      ></div>
    </>
  )
}

export default GrowTogether
