import React from "react"
import styled from "styled-components"

const List = styled.ul`
  display: inline-block;
`

const ListEl = styled.li`
  display: inline;
  margin-right: 20px;
`

const Link = styled.a`
  color: red
  text-decoration: none;
  margin-right: 20px;
`

const SectionLinks = () => (
  <List>
    <Link>
      <a href="#about_section">About</a>
    </Link>
    <Link>
      <a href="#projects_section">Projects</a>
    </Link>
    <Link>
      <a href="#contact_section">Contact Info</a>
    </Link>
  </List>
)
export default SectionLinks
