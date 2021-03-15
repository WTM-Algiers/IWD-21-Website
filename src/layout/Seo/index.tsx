import React, { ReactElement } from "react"
import { GatsbySeo, GatsbySeoProps } from "gatsby-plugin-next-seo"

export interface SeoProps extends GatsbySeoProps {}

function SEO(props: SeoProps): ReactElement {
  return (
    <GatsbySeo
      {...props}
      language={props.language ?? "en"}
      titleTemplate="%s | WTM Algiers' IWD21 "
    />
  )
}

export default SEO
