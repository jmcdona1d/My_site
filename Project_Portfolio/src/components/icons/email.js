import React from "react"
import { Icon, InlineIcon } from "@iconify/react"
import emailOutline from "@iconify/icons-mdi/email-outline"
import contactMail from "@iconify/icons-mdi/contact-mail"
import googleGmail from "@iconify/icons-logos/google-gmail"

const Email = () => (
  <a className="icon" href="mailto:james.mcdonald@queensu.ca">
    <Icon icon={googleGmail} width="33px" />
  </a>
)

export default Email
