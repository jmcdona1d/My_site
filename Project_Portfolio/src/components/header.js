import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import SocialIcons from "./socialIcons"
import SectionLinks from "./sectionLinks"
import styled from "styled-components"

const List = styled.ul`
align: right
  display: inline-block;
`

const ListEl = styled.li`
  display: inline;
`

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
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justify: `ceneter`,
      }}
    >
      <List>
        <ListEl>
          <h1 style={{ margin: 0, align: "left" }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </ListEl>
        <ListEl style={{ align: "right" }}>
          <SectionLinks />
        </ListEl>
      </List>
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
