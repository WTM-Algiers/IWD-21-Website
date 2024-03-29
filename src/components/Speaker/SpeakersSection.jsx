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
    id: "amine",
    name: "Amine Riad REMACHE",
    image: "./RiadRemacheSchedule.jpg",
    title: "Intern at MUNIC",
    social: {
      facebook: "https://www.facebook.com/remacheamine",
      twitter: "https://twitter.com/AmineRemache",
      linkedin: "https://fr.linkedin.com/in/amineremache/",
    },
  },
  {
    id: "kahina",
    name: "Kahina Fekir",
    image: "./KahinaFekirSchedule.jpeg",
    title: "Full stack web developer ",
    social: {
      linkedin: "https://fr.linkedin.com/in/kahina-fekir-98972a140",
    },
  },
  {
    id: "ikram",
    name: "Ikram Manseri",
    image: "./IkramManseriSchedule.jpg",
    title: "Junior Devops Engineer at Doctolib ",
    social: {
      facebook: "https://www.facebook.com/ikrammanseri",
      linkedin: "https://fr.linkedin.com/in/i-manseri",
    },
  },
  {
    id: "leila",
    name: "Leila Benyoucef",
    image: "./LeilaBenyoucefSchedule.jpg",
    title: "Founder of Kiddy Sorties",
    social: {
      facebook: "https://www.facebook.com/lily.pink.319",
      linkedin: "https://dz.linkedin.com/in/leila-benyoucef",
    },
  },
  {
    id: "benhamida",
    name: "Fatima Zohra Benhamida",
    image: "./Benhamida.jpg",
    title: "Assistant Professor",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100014868276070",
      twitter: "https://twitter.com/fzbenhamida?lang=fr",
      linkedin: "https://fr.linkedin.com/in/fzbenhamida",
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
    <Section className="flex flex-col items-center p-4 px-20" id="speakers">
      <img
        src={require("../../assets/svgs/wavedLine.svg")}
        alt="wavedLine"
        style={{ position: "absolute", zIndex: 0 }}
      />

      <h1 className=" font-extrabold text-5xl pt-12 z-10">Speakers</h1>
      <p className="z-10">
        These amazing extra-active, tech-savy, out of the ordinary speakers will
        be ensuring the talks of this wonderful event!
      </p>
      <Container>{SpeakersCards}</Container>
    </Section>
  )
}
const Container = styled.div.attrs((props) => ({
  ...props,
  className: cls("px-4", "flex", "gap-5", "flex-wrap", "justify-center"),
}))`
  max-width: 1000px;
`

export default SpeakersSection
