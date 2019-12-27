import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import About from "../pageSections/about"
import Home from "../pageSections/home"
import Project from "../pageSections/projects"
import Contact from "../pageSections/contact"
import Global from "../components/global"
import styled from "styled-components"

const Background = styled.div`
  background-color: #d9b08c;
`

const IndexPage = () => (
  <Background>
    <Layout>
      <Home />
      <About />
      <Project />
      <Contact />
    </Layout>
  </Background>
)

export default IndexPage
