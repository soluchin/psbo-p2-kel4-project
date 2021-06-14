import React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  underline: {
    borderBottom: "3px solid",
    borderBottomColor: "#F91462",
    display: "inline-block",
    lineHeight: "1.25",
    marginTop: "40px",
  },
  root: {
    backgroundColor: "#FFDCE0",
  },
  detail: {
    marginTop: "25px",
    marginBottom: "25px",
  },
}));

export default function Manfaat() {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" className={classes.underline}>
                Manfaat Taaruf
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph={true}
                className={classes.detail}
              >
                Manfaat taaruf adalah bisa menghindari seseorang dari hal-hal
                negatif. Pasalnya, bagi mereka yang sedang taaruf tidak
                diperbolehkan berduaan. Apabila ingin bertemu harus ada orang
                lain yang menemani, seperti orang tua atau saudara. Sebab, hal
                ini dianggap menjadi cara yang sangat aman supaya jauh dari
                maksiat.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/flower.svg" width={406} height={331} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
