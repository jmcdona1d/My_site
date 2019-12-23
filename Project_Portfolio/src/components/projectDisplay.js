import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Carousel from "react-bootstrap"
import Headshot from "./headshot"
import styled from "styled-components"

//This class is a base template for Making project cards
const useStyles = makeStyles({
  card: {
    maxWidth: 900,
  },
  media: {
    height: 140,
  },
})

const ProjectDescription = styled.div`
  width: 50%
  margin-right:2%;
  float: left;
`

const ProjectDemo = styled.div`
  width: 42%;
  float: left;
`

const Iframe = styled.div`
  width: 100%;
`
const ClearFix = styled.div`
  clear: both;
`

export default function PorjectDisplay() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <ProjectDescription>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Project Title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>What is the project</li>
                  <li>What was it built with</li>
                  <li>What did I do (if group)</li>
                  <li>Future improvements</li>
                  <li>What did I learn</li>
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
        </ProjectDescription>
        <Iframe />
        <ProjectDemo>
          <CardMedia>
            <Headshot></Headshot>
          </CardMedia>
        </ProjectDemo>
        <ClearFix />
        <CardActions>
          <Button size="small" color="primary">
            Source Code
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
