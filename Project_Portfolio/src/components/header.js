import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import SocialIcons from "./socialIcons"
import SectionLinks from "./sectionLinks"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Headroom
    style={{
      background: `#333f58`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 4rem`,
      }}
    >
      <SectionLinks style={{ margin: `1rem` }} />
    </div>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
