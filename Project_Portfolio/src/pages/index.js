import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SocialIcons from "../components/socialIcons"
import Headshot from "../components/headshot"

const IndexPage = () => (
  <Layout>
    <a id="about_section">
      <h2>About</h2>
      <SocialIcons />
      <p>Welcome to your new Gatsby site.</p>
    </a>
    <a id="projects_section">
      <h2>Projects</h2>
      {/* add subheaders into here maybe? */}
    </a>
    <a id="contact me header">
      <h2>Contact me</h2>
      <p>Now go build something great.</p>
      <Headshot />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </a>
  </Layout>
)

export default IndexPage
