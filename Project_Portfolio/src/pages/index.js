import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import About from "../pageSections/about"
import Home from "../pageSections/home"
import Project from "../pageSections/projects"
import Contact from "../pageSections/contact"

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
