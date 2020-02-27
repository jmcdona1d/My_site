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
import FiscalFreshPic from "./fiscalFreshPic"

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

export default function FiscalFresh() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ backgroundColor: "#D1E8E2" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Fiscal Fresh
            </Typography>
            <ProjectDescription>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  <li>
                    Project that allows users to order ingredients for full
                    recipes
                  </li>
                  <li>
                    Developed backend using <strong>Python</strong> and{" "}
                    <strong>Flask</strong>
                  </li>
                  <li>
                    Setup retreival of recipies and ingredients from the{" "}
                    <em>Spoonacular API</em>
                  </li>
                  <li>
                    Implemented calling of backend routes in{" "}
                    <strong>React</strong> frontend
                  </li>
                  <li>
                    Selected as top 3 finalists at <em>QHacks 2020</em>
                  </li>
                </ul>
                <p></p>
              </Typography>
            </ProjectDescription>
            <Iframe />
            <ProjectDemo>
              <CardMedia>
                <FiscalFreshPic />
              </CardMedia>
            </ProjectDemo>
          </CardContent>
        </CardActionArea>

        <ClearFix />
        <CardActions style={{ backgroundColor: "#91cfbf" }}>
          <Button
            size="small"
            color="primary"
            href="https://github.com/Michael-Dowling/meal_planner"
            target="__blank"
          >
            Source Code
          </Button>
          <Button
            size="small"
            color="primary"
            href="http://fiscalfresh.herokuapp.com/"
            target="__blank"
          >
            Site Demo
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
