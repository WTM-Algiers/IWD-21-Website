import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
  cursor: pointer;
  &:hover {
    filter: none;
  }
`

const BigCard = styled.div`
  &:hover .card {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  }
`

const Card = styled.div`
  padding: 0.5rem;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
`

const SpeakerCard = ({ style, speaker }) => (
  <BigCard
    style={{
      ...style,
      minHeight: 350,
    }}
    className=" flex flex-col relative items-center "
  >
    <svg
      style={{
        width: "75%",
        position: "relative",
        zIndex: 1,
      }}
      viewBox="0 0 224.374 204.018"
    >
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width="300"
          height="300"
        >
          <image
            id="img1"
            href={speaker.image}
            alt={`Speaker-${speaker.image}`}
          />
        </pattern>
      </defs>
      <path
        id="Path_89"
        data-name="Path 89"
        d="M235.152,129.78c8.347,14.41,28.2,50.676,27.085,79.544-1.145,29.666-14.435,37.65-42.194,51.652s-101.987,12.862-136.56,0S39.7,237.137,38,207.162c-1.613-28.508,17.974-62.914,26.355-77.382,8.979-15.5,43.115-62.743,85.813-62.743S227.061,115.812,235.152,129.78Z"
        transform="translate(-37.908 -67.037)"
        opacity="0.9"
        fill="url(#img1)"
      />
    </svg>

    <Card
      className="card transition  bg-white absolute bottom-0 w-full rounded-3xl shadow-lg  flex flex-col items-center justify-between"
      style={{ height: "80%", paddingTop: "50%" }}
    >
      <h2 className=" text-purple-800 font-medium mb-1 text-center">
        {speaker.name}
      </h2>
      <h4 className="text-gray-500 font-medium text-center mb-3">
        {speaker.title}
      </h4>
      <div className="flex justify-evenly gap-3 justify-self-end">
        <Icon
          src={require("../../assets/svgs/linkedin.svg")}
          alt="linkedin icon"
          onClick={() => window.open(speaker.social.facebook, "_blank")}
        />
        <Icon
          src={require("../../assets/svgs/facebook.svg")}
          alt="facebook icon"
          onClick={() => window.open(speaker.social.linkedin, "_blank")}
        />
        <Icon
          src={require("../../assets/svgs/twitter.svg")}
          alt="facebook icon"
          onClick={() => window.open(speaker.social.twitter, "_blank")}
        />
      </div>
    </Card>
  </BigCard>
)

SpeakerCard.propTypes = {
  speaker: PropTypes.object,
}

SpeakerCard.defaultProps = {
  speaker: {
    name: "Akram Boutou",
    image:
      "https://pbs.twimg.com/profile_images/1158863262886375424/_O3beJk__400x400.jpg",
    title: "Dev Comanager",
    social: {
      facebook: "https://www.facebook.com/akram.boutouchent",
      twitter: "https://twitter.com/akramboutou",
      linkedin: "https://www.linkedin.com/in/boutouchent-akram-088930182/",
    },
  },
}

export default SpeakerCard
