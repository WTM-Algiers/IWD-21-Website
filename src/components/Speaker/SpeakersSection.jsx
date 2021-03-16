import React from "react"
import SpeakerCard from "./SpeakerCard"
import styled from "styled-components"
import cls from "classnames"

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(226, 248, 254, 0.63) 2%,
    #fefaff 90%
  );
`

const speakers = [
  {
    name: "Akram Boutou",
    image:
      "https://pbs.twimg.com/profile_images/1158863262886375424/_O3beJk__400x400.jpg",
    title: "Dev Comanager Comanager Comanager ",
    social: {
      facebook: "https://www.facebook.com/akram.boutouchent",
      twitter: "https://twitter.com/akramboutou",
      linkedin: "https://www.linkedin.com/in/boutouchent-akram-088930182/",
    },
  },
  {
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
  {
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
  {
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
  {
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
  {
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
]

const SpeakersCards = speakers.map((speaker) => (
  <SpeakerCard
    speaker={speaker}
    style={{ minHeight: "200px", width: "250px" }}
  />
))

function SpeakersSection() {
  return (
    <Section className="flex flex-col items-center p-4 px-20" id="Speakers">
      <img
        src={require("../../assets/svgs/wavedLine.svg")}
        alt="wavedLine"
        style={{ position: "absolute", zIndex: 0 }}
      />

      <h1 className=" font-extrabold text-5xl pt-12 z-10">Speakers</h1>
      <p className="z-10">
        These amazing extra-active, tech-savy, out of the ordinary speakers will
        be ensuring the talks and workshops of this wonderful event!
      </p>
      <Container>{SpeakersCards}</Container>

      {/* <SpeakerCard></SpeakerCard> */}
    </Section>
  )
}
const Container = styled.div.attrs((props) => ({
  ...props,
  className: cls("px-4", "flex", "gap-5", "flex-wrap", "justify-evenly"),
}))`
  max-width: 1200px;
`

export default SpeakersSection
