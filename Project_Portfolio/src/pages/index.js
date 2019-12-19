import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SocialIcons from "../components/socialIcons"
import Headshot from "../components/headshot"
import SectionLinks from "../components/sectionLinks"

const IndexPage = () => (
  <Layout>
    <a id="home_section">
      <p>Aspiring Software engineer</p>
      <Headshot />
      <SocialIcons />
    </a>
    <a id="about_section">
      <h2>About</h2>
      <p>
        I am a self-motivated computer engineering student who enjoys working in
        dynamic environments. I would like to use my software development
        expertise to contribute to a project that will significantly impact and
        improve the lives of Canadians. As I wrap-up my professional internship
        year, I am seeking to join a new company for the summer of 2020 before I
        return to school and finish my degree.
      </p>
    </a>
    <a id="projects_section">
      <h2>Project Portfolio</h2>
      {/* add subheaders into here maybe? */}
    </a>
    <a id="contact_section">
      <h2>Contact me</h2>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </a>
  </Layout>
)

export default IndexPage
