import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FiscalFreshPic = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "FiscalFresh_Demo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
        marginLeft: `2rem`,
      }}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default FiscalFreshPic
