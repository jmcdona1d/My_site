import React from "react"
import Linkedin from "./icons/Linkedin"
import GitHub from "./icons/gitHub"
import Email from "./icons/email"
import styled from "styled-components"

const List = styled.ul`
  display:inline-block
  background-color:#eeeeee
`

const ListEl = styled.li`
  display: inline;
  margin-right: 10px;
`

const SocialIcons = () => (
  <List>
    <ListEl>
      <Linkedin />
    </ListEl>
    <ListEl>
      <GitHub />
    </ListEl>
    <ListEl>
      <Email />
    </ListEl>
  </List>
)

export default SocialIcons