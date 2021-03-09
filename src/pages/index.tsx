import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeSection from "../components/HomeSection.tsx"
import Footer from "../components/FooterComponent"

const IndexPage = () => (
  <>
    <Layout>
      <HomeSection></HomeSection>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <Footer></Footer>
    </Layout>
  </>
)

export default IndexPage
