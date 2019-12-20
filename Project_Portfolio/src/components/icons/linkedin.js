import React from "react"
import { Icon, InlineIcon } from "@iconify/react"
import linkedinIcon from "@iconify/icons-simple-icons/linkedin"

const Linkedin = () => (
  <a
    className="linkedinIcon"
    href="https://www.linkedin.com/in/jamesgregorymcdonald/"
    target="_blank"
  >
    <Icon icon={linkedinIcon} width="26px" />
  </a>
)

export default Linkedin
