import classNames from "classnames"
import React, { useState, useEffect, CSSProperties, ReactElement } from "react"
import styled from "styled-components"
import classnames from "classnames"
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

// /**
//  * use this if you want to show an avatar inside placeholder
//  */
// const AvatarComponent : React.FC<{
//   imageSrc : string
//   alt : string
// }> = ({imageSrc, alt , placeholderBase64}) =>{
//   const [source,setSource] = useState(placeholderBase64)
//   useEffect(()=>{
//     const trueImage = new Image()
//     trueImage.onload = ()=>{

//       setSource(trueImage.src)
//     }
//     trueImage.src = imageSrc
//   },[])
//   return (<Avatar className="rounded-full mb-0"
//   src={source}
//   alt={alt} / >)
// }

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
      className={classnames(
        "py-2 px-4 rounded-md flex items-center shadow-md "
      )}
      style={containerStyle}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-items-center mr-4">
        <TimeContainer
          color={timeColor}
          className="font-semibold md:text-lg text-base md:mr-4"
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
          className="font-semibold  md:text-xl"
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
  height: ${(props) => props.size ?? "80px"};
  width: ${(props) => props.size ?? "80px"};
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
