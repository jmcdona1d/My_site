import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

//This class is a base template for Making project cards
const useStyles = makeStyles({
  card: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
})

export default function PorjectDisplay() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
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
        <CardActions>
          <Button size="small" color="primary">
            Source Code
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
