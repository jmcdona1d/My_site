import React from "react"
import styled from "styled-components"
import "./sectionLinks.css"

const List = styled.ul`
  display: inline-block;
`

const ListEl = styled.li`
  display: inline;
  margin-right: 1.5rem;
`
const ListElFinal = styled.li`
  display: inline;
`

const SectionLinks = () => (
  <List>
    <ListEl>
      <a className="link" href="/">
        Home
      </a>
    </ListEl>
    <ListEl>
      <a className="link" href="#about">
        About
      </a>
    </ListEl>
    <ListEl>
      <a className="link" href="#projects">
        Projects
      </a>
    </ListEl>
    <ListElFinal>
      <a className="link" href="#contact">
        Contact Info
      </a>
    </ListElFinal>
  </List>
)
export default SectionLinks
