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
import DatabasesPic from "./databasesPic"

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

export default function Databases() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Conference Manager
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Web application that can be used to manage a conference
                  </li>
                  <li>
                    Created using <strong>SQL</strong>, <strong>PHP</strong>,{" "}
                    <strong>HTML</strong> and <strong>CSS</strong>
                  </li>
                  <li>
                    Course project for{" "}
                    <em>Introduction to Database Management Systems</em>
                  </li>
                  <li>
                    Implemented functionalities to manage sponsors and hotel
                    rooms{" "}
                  </li>
                  <li>
                    Experienced maintaining a database and writing queries
                  </li>
                </ul>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo>
              <CardMedia>
                <DatabasesPic />
              </CardMedia>
            </ProjectDemo>
          </CardContent>
        </CardActionArea>
        <ClearFix />
        <CardActions style={{ backgroundColor: "#91cfbf" }}>
          <Button
            size="small"
            color="primary"
            href="https://github.com/jmcdona1d/Shooting_Star"
            target="__blank"
          >
            Source Code
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
