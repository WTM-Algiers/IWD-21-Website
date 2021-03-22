import React, { CSSProperties, ReactElement } from "react"
import styled from "styled-components"

export interface ScheduleStyling {
  containerStyle?: CSSProperties
  timeStyle?: CSSProperties
  titleStyle?: CSSProperties
  subtitleStyle?: CSSProperties
}

export interface ScheduleProps {
  time: string
  avatarSrc: string
  avatarAlt: string
  title: string
  subtitle: string
  titleColor: string
  subtitleColor: string
  timeColor: string
  backgroundColor: string
  extraStyling?: ScheduleStyling
}

function ScheduleCard({
  time,
  avatarSrc,
  avatarAlt,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  backgroundColor,
  timeColor,
  extraStyling,
}: ScheduleProps): ReactElement {
  const { timeStyle, containerStyle, titleStyle, subtitleStyle } =
    extraStyling ?? {}
  const images = require.context("../../assets/pngs", true)

  return (
    <Wrapper
      color={backgroundColor}
      className="py-4 px-8 rounded-md shadow-md flex items-center"
      style={containerStyle}
    >
      <div className="flex flex-col-reverse sm:flex-row items-center justify-items-center mr-4">
        <TimeContainer
          color={timeColor}
          className="font-semibold sm:mr-4"
          style={timeStyle}
        >
          {time}
        </TimeContainer>
        <Avatar
          className="rounded-full mb-0"
          src={images(avatarSrc)}
          alt={avatarAlt}
        />
      </div>

      <ContentContainer>
        <TitleContainer
          color={titleColor}
          className="font-semibold"
          style={titleStyle}
        >
          {title}
        </TitleContainer>
        <SubtitleContainer color={subtitleColor} style={subtitleStyle}>
          {subtitle}
        </SubtitleContainer>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${(props) => props.color};
`
const TimeContainer = styled.div`
  color: ${(props) => props.color};
`
const Avatar = styled.img`
  height: ${(props) => props.size ?? "50px"};
  width: ${(props) => props.size ?? "50px"};
  color: ${(props) => props.color};
`
const ContentContainer = styled.div``
const TitleContainer = styled.div`
  color: ${(props) => props.color};
`
const SubtitleContainer = styled.div`
  color: ${(props) => props.color};
`

export default ScheduleCard
