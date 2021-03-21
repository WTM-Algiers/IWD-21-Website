import React from "react"
import styled from "styled-components"
import cls from "classnames"
import Section from "../Section"
function CovidBar() {
  return (
    <Section>
      <div
        className="flex justify-center pt-6"
        style={{
          backgroundColor: "#3f9ee2",
        }}
      >
        <p className="text-white p-0 text-lg text-center">
          COVID 19 - Implementation of the health protocol,
          <SeeMoreText href="https://drive.google.com/file/d/1xAHxNFkS4JoXg5gbf8ZMNAbLzFSeGdWS/view?usp=sharing">
            See more
          </SeeMoreText>
        </p>
      </div>
    </Section>
  )
}

const SeeMoreText = styled.a`
  padding-left: 10px;
  text-decoration: underline;
  font-weight: 600;
`
export default CovidBar
