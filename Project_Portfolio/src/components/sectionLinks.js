import React from "react"
import styled from "styled-components"
import "./sectionLinks.css"

const List = styled.ul`
align: right
  display: inline-block;
`

const ListEl = styled.li`
  display: inline;
  margin-right: 10px;
`

const Link = styled.a`
  color: red
  text-decoration: none;
  margin-right: 20px;
`

const SectionLinks = () => (
  <List>
    <ListEl>
      <a className="link" href="#about_section">
        About
      </a>
    </ListEl>
    <ListEl>
      <a className="link" href="#projects_section">
        Projects
      </a>
    </ListEl>
    <ListEl>
      <a className="link" href="#contact_section">
        Contact Info
      </a>
    </ListEl>
  </List>
)
export default SectionLinks
