import React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function footer() {
  const classes = useStyles();
  return (
    <footer>
      <Box display="flex" backgroundColor="#fffff">
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/logos.svg" width={157} height={36} />
              </Box>
              <Box textColor="#656464" fontStyle="regular">
                <Typography variant="body2" paragraph="true">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  rutrum ut pulvinar ut urna, tortor amet, tortor. In lacinia
                  volutpat dictum pharetra, est quam.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textColor="#656464" fontStyle="#656464">
                Contact Us
              </Box>
              <Box>WA(+6287838892291)</Box>
              <Box>Email : irsyadime@gmail.com</Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
