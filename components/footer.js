import React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Link from "@material-ui/core/Link";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="#656464" className={classes.copyright}>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        2021 ipbtaaruf.com. All Right Reserved
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: "30px",
  },
  contact: {
    marginTop: "30px",
  },
  fb: {
    color: "#fff",
    backgroundColor: "#0D88F0",
  },
  twit: {
    color: "#fff",
    backgroundColor: "#1CA0F1",
    marginLeft: "8px",
  },
  linkin: {
    color: "#fff",
    backgroundColor: "#0A66C2",
    marginLeft: "8px",
  },
  wa: {
    color: "#fff",
    backgroundColor: "#0DC143",
    marginRight: "5px",
    marginTop: "10px",
  },
  mail: {
    color: "#fff",
    backgroundColor: "#E9392C",
    marginRight: "5px",
    marginTop: "8px",
  },
  detail: {
    marginTop: "10px",
  },
  copyright: {
    marginTop: "25px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Box display="flex" backgroundColor="#fffff">
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/logos.svg"
                  width={157}
                  height={36}
                  className={classes.logo}
                />
              </Box>
              <Box textColor="#656464" fontStyle="regular">
                <Typography
                  variant="body2"
                  paragraph="true"
                  className={classes.detail}
                >
                  Menikah itu mudah, tapi tidak untuk disepelekan. Pernikahan
                  adalah janji cinta Bukan semata karena tren taaruf atau quotes
                  pernikahan
                </Typography>
              </Box>
              <Box display="flex" flexDirection="horizontal" spacing={2}>
                <Avatar className={classes.fb}>
                  <FacebookIcon />
                </Avatar>
                <Avatar className={classes.twit}>
                  <TwitterIcon />
                </Avatar>
                <Avatar className={classes.linkin}>
                  <LinkedInIcon />
                </Avatar>
              </Box>
              <Box xs={12}>
                <Copyright />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} display="flex">
              <Box
                textColor="#656464"
                fontStyle="#656464"
                className={classes.contact}
              >
                <Typography variant="subtitle1">Contact Us</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="horizontal"
                alignItems="center"
              >
                <Avatar className={classes.wa}>
                  <WhatsAppIcon />
                </Avatar>
                <Typography variant="subtitle1">+6287838892291</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="horizontal"
                alignItems="center"
              >
                <Avatar className={classes.mail}>
                  <MailOutlineIcon />
                </Avatar>
                <Typography variant="subtitle1">irsyadime@gmail.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
