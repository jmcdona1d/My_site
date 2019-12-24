import React from "react"
import SocialIcons from "../components/socialIcons"
import Headshot from "../components/headshot"
import styled from "styled-components"
import Resume from "../images/Resume_Dummy.pdf"
import NameHomePic from "../components/nameHomePic"
import "./pages.css"

const Box = styled.div`
  padding-top: 80px;
`
const LeftSide = styled.div`
  width: 10%
  margin-right:10%;
  float: left;
`

const RightSide = styled.div`
  width: 80%;
  float: left;
  padding-left: 12rem;
  padding-top: 80px;
`

const Iframe = styled.div`
  width: 100%;
`
const ClearFix = styled.div`
  clear: both;
`

const About = () => (
  <div className={{ paddingTop: 40 }}>
    {/* <p>
      Fourth year Computer Engineering student at <em>Queen's University</em>{" "}
      seeking an internship for summer 2020
    </p> */}
    <LeftSide>
      <Box>
        <NameHomePic />
        <SocialIcons />
        <a className="resume" href={Resume} target="_blank">
          Resume
        </a>
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
