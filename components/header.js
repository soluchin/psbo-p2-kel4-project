import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "5px",
  },
  iconbutton: {},
  appbar: {
    background: "transparent",
    boxShadow: "none",
  },
  button: {
    backgroundColor: "#F80658",
    marginLeft: "auto",
    marginRight: "20px",
    width: "8vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 5%",
  },
  menuItem: {
    marginLeft: "35px",
    color: "#656464",
    fontFamily: "Roboto",
    textDecoration: "none",
    fontStyle: "medium",
    fontSize: "16pt",
  },
  txtButton: {
    color: "#ffffff",
  },
  headerContent: {
    display: "flex",
    width: "50%",
    padding: "150px",
    flexDirection: "column",
  },
  hcontent1: {
    fontStyle: "normal",
    fontSize: "36pt",
  },
  hcontent2: {
    fontStyle: "normal",
    fontSize: "16pt",
    color: "#656464",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.iconbutton}>
            <img src="/logos.svg" width={157} height={36} />
          </IconButton>
          <Link href="/">
            <a className={classes.menuItem}>Home</a>
          </Link>
          <Link href="/">
            <a className={classes.menuItem}>What is Taaruf?</a>
          </Link>
          <Link href="/">
            <a className={classes.menuItem}>How To</a>
          </Link>
          <Link href="/">
            <a className={classes.menuItem}>Find Partner</a>
          </Link>
          <Button className={classes.button} size="large" variant="contained">
            <Typography variant="h6" className={classes.txtButton}>
              Login
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.headerContent}>
        <Typography variant="h3" className={classes.hcontent1}>
          Apa itu Taaruf?
        </Typography>
        <Typography variant="subtitle1" className={classes.hcontent2}>
          taaruf adalah sebuah perkenalan atau saling mengenal yang dianjurkan
          dalam Islam. Meskipun begitu, taaruf biasanya dilakukan dengan maksud
          atau tujuan tertentu.
        </Typography>
      </div>
    </>
  );
};

export default Header;
