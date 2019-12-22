import React from "react"
import SocialIcons from "../components/socialIcons"
import Headshot from "../components/headshot"
import Container from "reactstrap"
import styled from "styled-components"

const About = () => (
  <div>
    <p>
      Fourth year Computer Engineering student at <em>Queen's University</em>{" "}
      seeking an internship for summer 2020
    </p>
    <Headshot />
    <SocialIcons />
  </div>
)

export default About
