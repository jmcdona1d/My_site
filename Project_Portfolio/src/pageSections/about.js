import React from "react"
import styled from "styled-components"


const ClearFix = styled.div`
  clear: both;
`
const About = () => (
  <div>
    <ClearFix />
    <div id="about">
      
      <h2>About</h2>
      <p>
        I am a self-motivated Computer Engineering student with an interest in
        software development. I have a wide array of skills and previous
        experience working on projects like Full Stack Web Applications, Mobile
        Applications and Games.
      </p>
      <p>
        I would like to use my software development expertise to contribute to a
        project that will significantly impact and improve the lives of Canadians.
        Please don't hesitate to reach out if you would like to discuss potential
        full-time or project opportunities.
      </p>

      <p>
        I have designed this site to showcase the software development projects
        that I have worked on. If you would like to see what I am actively working
        on, check out my{" "}
        <a href="https://github.com/jmcdona1d" target="__blank">
          GitHub profile
        </a>{" "}
        where I try my best to make at least one contribution a day!
      </p>
    </div>
  </div>
)

export default About
