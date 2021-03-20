import React from "react"
import GrowTogetherCard from "./GrowTogetherCard"
import "../../css/growTogether.css"
const GrowTogetherSection: React.FC = () => {
  const cardsContent = [{
    img:"online-business",
    title:"Network",
    text:"consectetur adipisicing elit. Repellat minus magnam aut ad rem eveniet impedit voluptate",
    color:"#e1f8e8"
  },
  {
    img:"lamp",
    title:"Inspiration",
    text:"consectetur adipisicing elit. Repellat minus magnam aut ad rem eveniet impedit voluptate",
    color:"#fff7ec"
  },
  {
    img:"mortarboard",
    title:"Education",
    text:"consectetur adipisicing elit. Repellat minus magnam aut ad rem eveniet impedit voluptate",
    color:"#e2f8fe"
  }]

  return (
    <>
      <section
        id="letsGrow"
        className=" "
        style={{
          width: "100%",
        }}
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
        <div className="letsgr" style={{ width: "60%", margin: "0px auto" }}>
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
          <p
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: 300,
              fontStretch: "normal",
              lineHeight: 1.13,
              color: "#4e4e4e",
              opacity: 0.7,
            }}
          >
            International Women’s Day (IWD) is marked on March 8th every year.In
            different regions, the focus of celebrations ranges from general
            respect and appreciation for women to a celebration of women’s
            economic, political, and social achievements.
          </p>
        </div>
        <div className="cards" style={{ margin: "50px auto" }}>
          {
            cardsContent.map(card => 
            {
              return(
                <GrowTogetherCard
                  img={card.img}
                  title={card.title}
                  text={card.text}
                  color={card.color}
                >
                </GrowTogetherCard>
              );
            })
          }
        </div>
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
          <div
            className="placeholder"
            style={{ left: "45vw", top: "7vw", zIndex: 2 }}
          ></div>
          
          <div
            className="placeholder"
            style={{ left: "70vw", top: "3vw", zIndex: 2 }}
          ></div>
          
          <div
            className="placeholder"
            style={{ left: "25vw", top: "3vw", zIndex: 2 }}
          ></div>
          
          <div
            className="placeholder"
            style={{ left: "0vw", top: "0vw", zIndex: 2 }}
          ></div>
          <img
            className="absolute"
            src={require("../../assets/svgs/CurvedLine.svg")}
            alt="path"
            style={{ top: "-3vw", left: "-7%", zIndex: -1 }}
          />
          <img
            className="absolute"
            src={require("../../assets/svgs/Ellipse15.svg")}
            alt="circle"
            style={{ width: "20%", right: "0", zIndex: -1 }}
          />
          <img
            className="absolute"
            src={require("../../assets/svgs/Ellipse15.svg")}
            alt="circle"
            style={{
              width: "1.5%",
              right: "12.2vw",
              bottom: "11.8vw",
              zIndex: -1,
            }}
          />
          <div
            className="absolute"
            style={{
              width: "15vw",
              height: "15vw",
              bottom: "-2vw",
              right: "5vw",
              zIndex: 4,
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
                fontWeight: 600,
                lineHeight: 0.76,
                color: "#ffffff",
                fontSize: "5vw",
                margin: 0
              }}
            >
              20-22
            </h1>
            <h3
              style={{
                opacity: "0.8",
                color: "#f6f6f6",
                fontSize: "1.5vw",
                textAlign: "center",
                margin: 0
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
              height: "25vw",
              right: "0vw",
              bottom: "-6.5vw",
              opacity: 0.9,
              zIndex: 3
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
                zIndex: 10,
                position: "relative",
                margin: 0
              }}
            >
              Learn From
              <br /> Women Tech Leaders
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
                margin: "20px 0px 10px 0px"
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              deleniti ullam repellendus sed veniam, provident cum dolorum
              perspiciatis labore dicta!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default GrowTogetherSection
