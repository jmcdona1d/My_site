import React from "react"
import Linkedin from "./icons/linkedin"
import GitHub from "./icons/gitHub"
import Email from "./icons/email"
import styled from "styled-components"

const ListEl = styled.li`
  display: inline;
  margin-right: 10px;
`

const SocialIcons = () => (
  <div>
    <ListEl>
      <Linkedin />
    </ListEl>
    <ListEl>
      <GitHub />
    </ListEl>
    <ListEl>
      <Email />
    </ListEl>
  </div>
)

export default SocialIcons
