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
import ProFormPic from "./proFromPic"

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

export default function ShootingStar() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ProForm
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Mobile app that anlyzes squat form and provides helpful
                    feedback
                  </li>
                  <li>
                    Developed using <strong>Flutter (Dart)</strong>,{" "}
                    <strong>Firebase</strong>, <strong>TensorFlow</strong> and{" "}
                    <strong>Figma</strong>
                  </li>
                  <li>
                    Worked on backend operations like account and database
                    management
                  </li>
                  <li>
                    Created during <em>Hack The North 2019</em> as a part of a
                    team
                  </li>
                  <li>
                    Used <em>agile</em> concepts like standups and sprints to
                    finish in 36 hours
                  </li>
                </ul>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo>
              <CardMedia>
                <ProFormPic />
              </CardMedia>
            </ProjectDemo>
          </CardContent>
        </CardActionArea>
        <ClearFix />
        <CardActions style={{ backgroundColor: "#91cfbf" }}>
          <Button
            size="small"
            color="primary"
            href="https://github.com/eth212/htn2019"
            target="__blank"
          >
            Source Code
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://devpost.com/software/jumpy"
            target="__blank"
          >
            DevPost Page
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
