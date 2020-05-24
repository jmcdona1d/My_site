import React from "react"
import SocialIcons from "../components/socialIcons"
import Headshot from "../components/headshot"
import styled from "styled-components"
import Resume from "../images/Resume_Portfolio.pdf"
import "./pages.css"

const Box = styled.div`
  padding-top: 40px;
  width: 20rem;
`
const LeftSide = styled.div`
  width: 40%
  margin-right:10%;
  float: left;
`

const RightSide = styled.div`
  width: 50%;
  float: left;
  padding-left: 20%;
  padding-top: 55px;
`

const Iframe = styled.div`
  width: 100%;
`
const ClearFix = styled.div`
  clear: both;
`

const ListItem = styled.li`
  list-style: none;
  margin-left: 0;
`

const About = () => (
  <div className={{ paddingTop: 40 }}>
    <LeftSide>
      <Box>
        <h1>James McDonald</h1>
        <ul>
          <ListItem>Fourth Year of Computer Engineering</ListItem>
          <ListItem>
            <em>Queen's University</em>
          </ListItem>

          <ListItem>Passionate Software Developer</ListItem>
          <ListItem>
            <a
              className="resume"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Current Resume
            </a>
          </ListItem>
          <ListItem>
            <SocialIcons />
          </ListItem>
        </ul>
      </Box>
    </LeftSide>
    <Iframe />
    <RightSide>
      <Headshot />
    </RightSide>
    <ClearFix />
  </div>
)

export default About
