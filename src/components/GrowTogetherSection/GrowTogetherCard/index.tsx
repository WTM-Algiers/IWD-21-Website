import React from "react"

interface cardProp {
  img: File
  title: string
  text: string
  color: string
}
const GrowTogetherCard: React.FC<cardProp> = (cardProp) => {
  return (
    <div
      className="card"
      style={{
        /*width:"300px"*/ width: "100%",
        /*height:'27vw'*/ boxSizing: "border-box",
        backgroundColor: cardProp.color,
        borderRadius: "49px",
        boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.06)",
        padding: "40px 43px 86px",
      }}
    >
      <img src={cardProp.img} alt="Logo" style={{ margin: "auto " }} />
      <h1
        style={{
          textAlign: "center",
          margin: "10px auto",
          fontFamily: "Poppins",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: 1.52,
          fontWeight: 600,
        }}
      >
        {cardProp.title}
      </h1>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          lineHeight: 1.32,
          opacity: 0.75,
          fontSize: 18,
          color: "#707070",
        }}
      >
        {cardProp.text}
      </p>
    </div>
  )
}

export default GrowTogetherCard
