import React from "react"
import GrowTogetherCard from "./GrowTogetherCard"
import styled from "styled-components"
import "../../css/growTogether.css"
import Section from "../Section"
const GrowTogetherSection: React.FC = () => {
  return (
    <Section
      id="about"
      className=" "
      style={{ padding: "10vw 0 0 0", position: "relative" }}
    >
      <div style={{ overflow: "hidden" }}>
        <img
          className="absolute  "
          src={require("../../assets/svgs/Ellipse15.svg")}
          alt="ellipse"
          style={{ left: "-8%", width: "18%", top: "-10vw" }}
        />
      </div>
      <img
        className="absolute w-2/5"
        src={require("../../assets/svgs/Iwd-Logo-Pointed.svg")}
        alt="iwd"
        style={{ boxSizing: "border-box", right: "0px", top: "-8vw" }}
      />
      <div style={{ width: "80%", margin: "0px auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: "bolder",
            fontStretch: "normal",
            lineHeight: 1.71,
            fontStyle: "normal",
            letterSpacing: "normal",
          }}
        >
          Let's Grow Together
        </h1>
        <Description>
          IWD is here to give everyone a chance to learn something new,
          technical or non-technical because WTM Algiers is providing its
          community with quality talks and amazing workshops in a variety of
          fields, in order to grow together.
        </Description>
      </div>
      <ul className=" cards" style={{ margin: "50px auto" }}>
        <li>
          <div className="flex justify-center">
            <GrowTogetherCard
              img={require("../../assets/svgs/lamp.svg")}
              title="Inspiration"
              text="make new masterpieces, imagine what you can do if only you have been given a chance."
              color="#fff7ec"
            ></GrowTogetherCard>
          </div>
        </li>
        <li>
          <div className="flex justify-center">
            <GrowTogetherCard
              img={require("../../assets/svgs/online-business.svg")}
              title="Network"
              text="Time to get out of your comfort zone and meet new amazing people who are interested in the same things as you!"
              color="#e1f8e8"
            ></GrowTogetherCard>
          </div>
        </li>
        <li>
          <div className="flex justify-center">
            <GrowTogetherCard
              img={require("../../assets/svgs/mortarboard.svg")}
              title="Education"
              text="Learning never stops, no matter how far you go, you will always have more chances to seek knowledge"
              color="#e2f8fe"
            ></GrowTogetherCard>
          </div>
        </li>
      </ul>
      <div
        className="shapes"
        style={{
          width: "85%",
          margin: "40px auto",
          marginBottom: 0,
          position: "relative",
          padding: "2vw 0 0 0",
        }}
      >
        <img
          className="absolute"
          src={require("../../assets/svgs/CurvedLine.svg")}
          alt="path"
          style={{ top: "-3vw", left: "-7%", zIndex: 1 }}
        />
        <img
          className="absolute"
          src={require("../../assets/svgs/Ellipse15.svg")}
          alt="circle"
          style={{ width: "20%", right: "0", zIndex: 0 }}
        />
        <img
          className="absolute"
          src={require("../../assets/svgs/Ellipse15.svg")}
          alt="circle"
          style={{
            width: "1.5%",
            right: "12.2vw",
            bottom: "11.8vw",
            zIndex: 1,
          }}
        />
        <div
          className="absolute"
          style={{
            width: "15vw",
            height: "15vw",
            bottom: "-2vw",
            right: "5vw",
            zIndex: 2,
          }}
        >
          <div className="relative" style={{ width: "100%", height: "50%" }}>
            <h2
              className="absolute"
              style={{
                right: "0",
                left: "0",
                fontFamily: "Poppins",
                fontSize: "2.7vw",
                fontWeight: 500,
                lineHeight: 1.79,
                textAlign: "center",
                margin: "0",
                color: "#f6f6f6",
              }}
            >
              April{" "}
            </h2>
            <h2
              className="absolute"
              style={{
                right: "0",
                left: "0",
                top: "3.5vw",
                fontFamily: "Poppins",
                fontSize: "1.7vw",
                lineHeight: 2.27,
                fontWeight: 500,
                textAlign: "center",
                margin: "0",
                color: "#f6f6f6",
              }}
            >
              2020{" "}
            </h2>
          </div>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              lineHeight: 0.76,
              fontWeight: 500,
              color: "#ffffff",
              fontSize: "5vw",
            }}
          >
            04-10
          </h1>
          <h3
            style={{
              width: "100%",
              opacity: "0.8",
              lineHeight: "normal",
              color: "#f6f6f6",
              fontSize: "1.5vw",
              textAlign: "center",
              margin: "0 0 20px 0",
            }}
          >
            Online Event
          </h3>
        </div>
        <img
          src={require("../../assets/svgs/Shape.svg")}
          alt="shape"
          className="absolute"
          style={{
            width: "25vw",
            right: "0vw",
            bottom: "-4.5vw",
            opacity: 0.9,
          }}
        />
        <div className="learnfr">
          <h1
            style={{
              width: "50%",
              fontFamily: "Poppins",
              fontWeight: "bolder",
              fontStretch: "normal",
              lineHeight: 1.2,
              letterSpacing: "normal",
              textAlign: "left",
            }}
          >
            Learn From amazing
            <br /> Tech Leaders
          </h1>
          <p
            style={{
              width: "60%",
              fontFamily: "Poppins",
              fontWeight: 300,
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: 1.13,
              letterSpacing: "normal",
              textAlign: "left",
              color: "#4e4e4e",
            }}
          >
            This event is in honor of women’s great achievements, but it does
            not exclude men, because we believe that they are part of the
            solution, check out what these amazing men and women are planning
            for you!
          </p>
        </div>
      </div>
    </Section>
  )
}

const Description = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 1.6vw;
  font-stretch: normal;
  line-height: 1.13;
  color: "#4e4e4e";
  opacity: 0.7;

  @media (max-width: 960px) {
    font-size: 3.2vw;
  }
`
export default GrowTogetherSection
