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
import CubeSolverPic from "./cubeSolverPic"

const useStyles = makeStyles({
  card: {
    maxWidth: 900,
  },
  media: {
    height: 140,
  },
})

// const MainCard = styled.CardActionArea`
//   background-color: #116466;
// `

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

export default function CubeSolver() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cube Solver
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Web application that shows how to solve any
                    <em> Rubik's Cube</em>
                  </li>
                  <li>
                    Developed <strong>API</strong> backend using{" "}
                    <strong>Java</strong> and <strong>Spring Boot</strong>
                  </li>
                  <li>
                    Developed interactive frontend using <strong>React</strong>{" "}
                    and <strong>Bootstrap</strong>
                  </li>
                  <li>
                    Currently working on developing an interactive input for
                    cube states
                  </li>
                  <li>
                    Learned about <strong>REST API </strong>development and
                    project management
                  </li>
                </ul>
                <p></p>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo>
              <CardMedia>
                <CubeSolverPic />
              </CardMedia>
            </ProjectDemo>
          </CardContent>
        </CardActionArea>

        <ClearFix />
        <CardActions style={{ backgroundColor: "#91cfbf" }}>
          <Button
            size="small"
            color="primary"
            href="https://github.com/jmcdona1d/cube_solver"
            target="__blank"
          >
            Source Code
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
