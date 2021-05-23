import Header from "../components/header";
import { CssBaseline, makeStyles, Typography } from "@material-ui/core";
import HowItWorks from "../components/howItWorks";

const useStyles = makeStyles((theme) => ({
  head: {
    height: "130vh",
    width: "99vw",
    backgroundImage: `url("slice1.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.head}>
        <CssBaseline />
        <Header />
      </div>
      <br />
      <HowItWorks />
    </>
  );
}
