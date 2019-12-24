import React from "react"
import SocialIcons from "../components/socialIcons"
import Headshot from "../components/headshot"
import styled from "styled-components"
import Resume from "../images/Resume_Dummy.pdf"
import NameHomePic from "../components/nameHomePic"

const Box = styled.div`
  margin: 0;
`

const About = () => (
  <div>
    {/* <p>
      Fourth year Computer Engineering student at <em>Queen's University</em>{" "}
      seeking an internship for summer 2020
    </p> */}
    <Box>
      <NameHomePic />
      <SocialIcons />
      <a className="link" href={Resume} target="_blank">
        Resume
      </a>
    </Box>
    <Headshot />
  </div>
)

export default About
