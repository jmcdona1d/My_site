import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import About from "../pageSections/about"
import Home from "../pageSections/home"
import Project from "../pageSections/projects"
import Contact from "../pageSections/contact"
import styled from "styled-components"

const Background = styled.div`
  background-color: #d9b08c;
`

const IndexPage = () => (
  <Background>
    <Helmet>
      <meta charSet="utf-8" />
      <title>James McDonald | Portfolio</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Layout>
      <Home />
      <About />
      <div />
      <Project />
      <Contact />
    </Layout>
  </Background>
)

export default IndexPage
