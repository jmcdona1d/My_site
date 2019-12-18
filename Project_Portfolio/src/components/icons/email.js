import React from "react"
import { Icon, InlineIcon } from "@iconify/react"
import emailOutline from "@iconify/icons-mdi/email-outline"

const Email = () => (
  <a href="mailto:james.mcdonald@queensu.ca">
    <Icon icon={emailOutline} width="28px" />
  </a>
)

export default Email
