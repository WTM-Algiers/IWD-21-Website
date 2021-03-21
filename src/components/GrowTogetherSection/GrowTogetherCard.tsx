import React from "react"
import { graphql, useStaticQuery } from "gatsby"



interface cardProp {
  img: string
  title: string
  text: string
  color: string
}

interface QueryData {
  assets: {
    edges: {
      node: {
        publicURL:string
        extension: string,
        name: string
      }
    }[]
  }
}

const GrowTogetherCard: React.FC<cardProp> = (cardProp) => {
  const query = graphql`
    query {
      assets: allFile {
        edges {
          node {
            publicURL
            extension
            name
          }
        }
      }
    }
  `
  const data = useStaticQuery<QueryData>(query)
  const src = data.assets.edges.filter(edge => edge.node.name === cardProp.img)[0].node.publicURL;
  return (
    <div
      className="card"
      style={{
        boxSizing: "border-box",
        backgroundColor: cardProp.color,
        borderRadius: "49px",
        boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <img src={src} alt="Logo" style={{ margin: "auto " }} />
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
