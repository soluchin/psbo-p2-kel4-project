import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
import Kartu from "../components/card";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FEEAF0",
  },
  gridContainer: {},
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

export default function findpartner() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box display="flex" className={classes.root}>
        <Container maxWidth="lg">
          <Box marginTop="50px">
            <Typography variant="h3">Find Partner</Typography>
          </Box>
          <Box marginTop="10px">
            <Typography variant="subtitle1" paragraph={true}>
              temukan partner yang match denganmu dan ajukan CV.
            </Typography>
          </Box>
          <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={6}>
              <Kartu />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
