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
import WorkoutPic from "./workoutHelperPic"

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

export default function WorkoutHelper() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Workout Helper
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Web application used to create a workout plan for the{" "}
                    <em>5/3/1 Program</em>
                  </li>
                  <li>
                    Built with <strong>React</strong>,{" "}
                    <strong>JavaScript</strong> and
                    <strong> Bootstrap</strong>
                  </li>
                  <li>
                    Used <em>Github</em> to get help and feedback from open
                    source community{" "}
                  </li>
                  <li>
                    Currently working on adding a <strong>Node</strong> backend
                    to have persistance
                  </li>
                  <li>
                    My first web project - learned about styling and deployment
                  </li>
                </ul>
                <p></p>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo>
              <CardMedia>
                <WorkoutPic />
              </CardMedia>
            </ProjectDemo>
          </CardContent>
        </CardActionArea>
        <ClearFix />
        <CardActions style={{ backgroundColor: "#91cfbf" }}>
          <Button
            size="small"
            color="primary"
            href="https://github.com/jmcdona1d/Workout_Helper"
            target="__blank"
          >
            Source Code
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://workout-deploy.firebaseapp.com/"
            target="__blank"
          >
            Site Demo
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
