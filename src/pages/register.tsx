import React, { ReactElement } from "react"
import { run } from "tripetto-runner-autoscroll"
import Services from "tripetto-services"

function Register(): ReactElement {
  const {
    definition,
    styles,
    l10n,
    locale,
    translations,
    snapshot,
    attachments,
    onSubmit,
    onPause,
  } = Services.init({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibmdkSnNFMFFNdlFsMjQramZsd1Z2WTlsMU1xZWRMOWFONzBaUGVlRjZjMD0iLCJkZWZpbml0aW9uIjoiTFZveFMxWTBPL1ZkaWxtei9kYzdTcWFRTFI0WlRHTENLRDVSQUJ1V3huWT0iLCJ0eXBlIjoiY29sbGVjdCJ9.RjMera1tB9mOfU5Z3kuTM3G6j0c8U7FH4rgVsNBCg7E",
  })

  run({
    element: document.body /* Or supply your own element here */,
    definition,
    styles,
    l10n,
    locale,
    translations,
    attachments,
    onSubmit,
    snapshot,
    onPause,
    persistent: true,
  })

  return <></>
}
export default Register
