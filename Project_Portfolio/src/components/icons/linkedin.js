import React from "react"
import { Icon } from "@iconify/react"
import linkedinIcon from "@iconify/icons-simple-icons/linkedin"

const Linkedin = () => (
  <a
    className="linkedinIcon"
    href="https://www.linkedin.com/in/jamesgregorymcdonald/"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon icon={linkedinIcon} width="26px" />
  </a>
)

export default Linkedin
