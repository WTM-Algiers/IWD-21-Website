import React, { PropsWithChildren, ReactElement } from "react"
// import Header from "./Header"
import SEO, { SeoProps } from "../Seo"
import Footer from "../../components/Footer"
import "../../components/layout.css"

interface Props {
  seo: Partial<SeoProps>
}

function Layout({ seo, children }: PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <SEO {...seo} />
      {/*<Header />*/}
      <main>{children}</main>
    </>
  )
}

export default Layout
