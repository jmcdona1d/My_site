import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import CodeCarPic from "./codeCarPic"

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

const ProjectDemo = styled.div`
  width: 35%;
  float: left;
`

const Iframe = styled.div`
  width: 100%;
`
const ClearFix = styled.div`
  clear: both;
`

export default function CodeCar() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Code[cAR]
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    AR game designed to introduce kids to programming concepts
                  </li>
                  <li>
                    Created using <strong>Unity</strong>, <strong>C#</strong>{" "}
                    and <strong>ARCore</strong>
                  </li>
                  <li>
                    Developed UI which converts inputs to excecutable commands
                    for the car
                  </li>
                  <li>
                    Completed during <em>QHacks 2019</em> as part of a team
                  </li>
                  <li>
                    Strengthened time management through rapid learning of new
                    languages
                  </li>
                </ul>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo>
              <CardMedia>
                <CodeCarPic />
              </CardMedia>
            </ProjectDemo>
          </CardContent>
        </CardActionArea>
        <ClearFix />
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/Michael-Dowling/Code_cAR"
            target="__blank"
          >
            Source Code
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://devpost.com/software/code-car-g3r6eq"
            target="__blank"
          >
            Devpost Page
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
