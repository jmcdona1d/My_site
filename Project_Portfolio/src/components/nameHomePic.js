import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NameHomePic = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "NameFancy.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
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
        marginLeft: `1.5rem`,
      }}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default NameHomePic
