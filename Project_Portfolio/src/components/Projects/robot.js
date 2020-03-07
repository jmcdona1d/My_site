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

export default function Robot() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ball Sorting Robot
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Programmed a robot to retrieve balls
                    and sort them into various pipes based on a received{" "}
                    <em>IR </em>
                    signal
                  </li>
                  <li>
                    Developed robot logic using <strong>C</strong> and{" "}
                    <strong>Arduino IDE</strong>
                  </li>

                  <li>
                    Created for the <em>Mechatronics Project</em> course
                  </li>
                  <li>
                    Team was one of the top 3 finishers in the end-of-term
                    competition
                  </li>
                </ul>
                <p></p>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo></ProjectDemo>
          </CardContent>
        </CardActionArea>
        <ClearFix />
      </Card>
    </div>
  )
}
