import React, { ReactElement } from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import HeroSection from "../components/HeroSection"
import Layout from "../layout/Layout"
import Navbar from "../components/navbar"
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
        url: "https://i.ibb.co/kQgBCJD/devfest-Card.png",
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
        <div className="backgroundfix">
          <Navbar />
          <HeroSection futureDate="2021-04-09 00:00:00"></HeroSection>
        </div>
      </Layout>
    </>
  )
}

export default Index
