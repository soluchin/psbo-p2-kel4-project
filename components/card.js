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
  CardAction,
  Button,
  Avatar,
} from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import MenuBookIcon from "@material-ui/icons/MenuBook";

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
}));

export default function Kartu() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <Box display="flex" flexDirection="row">
          <Box>
            <Avatar className={classes.avatar} src="/pp.jpg" />
          </Box>
          <Box display="flex" flexDirection="column">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Jung Bareum - 25th
              </Typography>
              <Box display="flex" flexDirection="row">
                <WorkOutlineIcon />
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  className={classes.cardcontent}
                >
                  Programmer
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <FiberManualRecordRoundedIcon />
                <Typography gutterBottom variant="subtitle2">
                  Belum pernah menikah
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <MenuBookIcon />
                <Typography gutterBottom variant="subtitle2">
                  Aktuaria - FMIPA
                </Typography>
              </Box>
            </CardContent>
            <CardAction>
              <Box display="flex">
                <Button
                  size="small"
                  variant="contained"
                  className={classes.btn}
                >
                  See more
                </Button>
              </Box>
            </CardAction>
          </Box>
        </Box>
      </Card>
    </>
  );
}
