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
import ShootingStarPic from "./shootingStarPic"

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
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Shooting Star
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Desktop aracde game where you try to collect points and
                    dodge obstacles
                  </li>
                  <li>
                    Created using <strong>C++</strong> and <strong>SDL</strong>
                  </li>
                  <li>
                    Worked on agile team which used <em>Atlassian</em> tools for
                    project management
                  </li>
                  <li>Implemented time and scoring features for the game</li>
                  <li>
                    Learned about the
                    <em> Software Development Lifecycle</em>
                  </li>
                </ul>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo>
              <CardMedia>
                <ShootingStarPic />
              </CardMedia>
            </ProjectDemo>
          </CardContent>
        </CardActionArea>
        <ClearFix />
        <CardActions>
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
