import React from "react"
import { Icon, InlineIcon } from "@iconify/react"
import githubIcon from "@iconify/icons-simple-icons/github"
import "./icons.css"

const GitHub = () => (
  <a className="icon" href="https://github.com/jmcdona1d" target="blank">
    <Icon icon={githubIcon} width="26px" />
  </a>
)

export default GitHub
