import React from "react"
import { Icon } from "@iconify/react"
import googleGmail from "@iconify/icons-logos/google-gmail"

const Email = () => (
  <a className="icon" href="mailto:james.mcdonald@queensu.ca">
    <Icon icon={googleGmail} width="33px" />
  </a>
)

export default Email
