import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import SectionLinks from "./sectionLinks"

const Header = ({ siteTitle }) => (
  <Headroom
    style={{
      background: `#2C3531`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: `55%`,
        paddingTop: `1rem`,
        paddingBottom: `0.5rem`,
        paddingLeft: `8%`,
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
