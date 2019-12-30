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

export default function Solitaire() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Solitaire Autostart
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Algorithm written to return the number of moves that could
                    be automatically made at the start of a <em>Solitaire</em>
                  </li>
                  <li>
                    Created algorithm in <strong>Java</strong> - thoroughly
                    refactored to acheive an linear average runtime
                  </li>
                  <li>
                    Used <strong>MATLAB</strong> to anlyze data from thousands
                    of test scenarios and draw conclusions about the outputs
                  </li>
                  <li>
                    Course project for <em>Algorithms</em>
                  </li>
                  <li>
                    Learned about designing and optimizing a complex algorithm
                  </li>
                </ul>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo></ProjectDemo>
          </CardContent>
        </CardActionArea>
        <ClearFix />
        <CardActions style={{ backgroundColor: "#91cfbf" }}>
          <Button
            size="small"
            color="primary"
            href="https://github.com/jmcdona1d/Solitaire_Autostart"
            target="__blank"
          >
            Source Code
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
