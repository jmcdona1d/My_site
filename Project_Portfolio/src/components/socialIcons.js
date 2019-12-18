import React from "react"
import Linkedin from "./icons/Linkedin"
import GitHub from "./icons/gitHub"
import Email from "./icons/email"
import { Row, Col } from "reactstrap"

const SocialIcons = () => (
  <Row>
    <Col xs lg="2">
      <Linkedin /> <GitHub /> <Email />
    </Col>
  </Row>
)

export default SocialIcons
