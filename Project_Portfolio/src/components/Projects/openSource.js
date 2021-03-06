import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"

const useStyles = makeStyles({
  card: {
    maxWidth: 900,
  },
  media: {
    height: 140,
  },
})

const ProjectDescription = styled.div`
  width: 60%
  margin-right:2%;
  float: left;
`

const Iframe = styled.div`
  width: 100%;
`
const ClearFix = styled.div`
  clear: both;
`

export default function OpenSource() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Open Source Experience
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Started contributing to <em>open source</em> repositories as
                    part of the{" "}
                    <a
                      href="https://hacktoberfest.digitalocean.com/"
                      target="blank__"
                    >
                      <em>2019 Hacktoberfest Challenge</em>
                    </a>
                  </li>
                  <li>
                    Used <strong>React</strong>, <strong>JavaScript</strong> and{" "}
                    <strong>Java</strong> knowledge to assist maintainers with
                    various issues
                  </li>
                  <li>
                    Added an interactive menu for an{" "}
                    <a
                      href="https://github.com/antonioalonzi/mtg"
                      target="blank__"
                    >
                      online card game
                    </a>
                  </li>
                  <li>
                    Created a web app to demonstrate a{" "}
                    <a
                      href="https://github.com/unsuitable001/memoryJS"
                      target="blank__"
                    >
                      JavaScript library
                    </a>{" "}
                    that emulates <em>C-style Pointers</em>
                  </li>
                  <li>
                    Opened an issue for participants in my own repository{" "}
                    <em>Workout Helper</em>
                  </li>
                  <li>
                    Added a new page for a global sustainability awareness{" "}
                    <a href="https://protect.earth/" target="blank__">
                      website
                    </a>
                  </li>
                </ul>
                <p></p>
              </Typography>
            </ProjectDescription>
            <Iframe />
          </CardContent>
        </CardActionArea>
        <ClearFix />
      </Card>
    </div>
  )
}
