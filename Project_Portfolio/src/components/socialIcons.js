import React from "react"
import Linkedin from "./icons/Linkedin"
import GitHub from "./icons/gitHub"
import Email from "./icons/email"
import { Table, Container, Row } from "reactstrap"
import styled from "styled-components"

const List = styled.ul`
  display:inline-block
  background-color:#eeeeee
`

const ListEl = styled.li`
  display: inline;
  margin-right: 10px;
`

const SocialIcons = () => (
  <div>
    <Table>
      <Row>
        <List>
          <ListEl>
            <Linkedin />
          </ListEl>
          <ListEl>
            <GitHub />
          </ListEl>
          <ListEl>
            <Email />
          </ListEl>
        </List>
      </Row>
    </Table>
  </div>
)

export default SocialIcons
