import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Avatar,
  CardActionArea,
} from "@material-ui/core";
// import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
// import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
// import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 373,
    minHeight: 148,
  },
  avatar: {
    maxWidth: 91,
    maxHeight: 91,
  },
  btn: {
    backgroundColor: "#F80658",
  },
  cardcontent: {
    marginLeft: "8px",
  },
  root: {
    maxWidth: 345,
    marginBottom: "10px",
  },
  media: {
    height: 140,
  },
}));

export default function Kartu() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/pp.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
