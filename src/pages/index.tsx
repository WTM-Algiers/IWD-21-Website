import React, { ReactElement } from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import HeroSection from "../components/HeroSection"
import Layout from "../layout/Layout"
import Navbar from "../components/NavBar"
import GrowTogether from "../components/GrowTogetherSection"
import SpeakersSection from "../components/Speaker/SpeakersSection"
import ScheduleSection from "../components/Schedule"
import CovidBar from "../components/CovidBar"
import Footer from "../components/Footer"
import { SeoProps } from "../layout/Seo"

interface Props {}
const INDEX_SEO: SeoProps = {
  title: "Home",
  description: "IWD 2021 THE ",
  openGraph: {
    url: "https://iwd.wtmalgiers.org",
    title: "IWD 2021 Home",
    description: "IWD 21 event from WTM Algiers",
    images: [
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/gdg-wtm-website.appspot.com/o/iwd-event-platform.png?alt=media&token=58c78506-2a23-413a-a96c-b80c19dc7639",
        width: 800,
        height: 600,
        alt: "iwd21",
      },
    ],
    site_name: "IWD 21 WTM Algiers",
  },
}

function Index(props: PageProps<Props>): ReactElement {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  return (
    <>
      <Layout
        seo={{
          twitter: {
            handle: site.siteMetadata.author,
            cardType: "summary_large_image",
          },
          metaTags: [
            {
              property: "keywords",
              content: site.siteMetadata.keywords.join(","),
            },
          ],
          ...INDEX_SEO,
        }}
      >
        <CovidBar></CovidBar>
        <div className="backgroundfix">
          <Navbar />
          <HeroSection
            futureDate="2021-04-04 00:00:00"
            eventDates="04-10 Apr,2021"
          ></HeroSection>
        </div>
        <GrowTogether></GrowTogether>
        <SpeakersSection></SpeakersSection>
        <ScheduleSection></ScheduleSection>
        <Footer></Footer>
      </Layout>
    </>
  )
}

export default Index
