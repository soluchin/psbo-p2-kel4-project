import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  head2: {
    backgroundColor: "#fffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  howContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "100px",
  },
  txtHow: {
    fontStyle: "bold",
  },
  howDetails: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
    textIndent: "-8rem",
  },
  title: {
    marginLeft: "10em",
    marginRight: "2rem",
  },
}));

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.head2} id="howto">
        <Typography variant="h3" align="center" className={classes.txtHow}>
          How It Works?
        </Typography>
        <div className={classes.howContainer}>
          <div className="register">
            <img src="/register.svg" />
          </div>
          <img src="/vec1.svg" />
          <div className="find">
            <img src="/find.svg" />
          </div>
          <img src="/vec2.svg" />
          <div className="apply">
            <img src="/apply.svg" />
          </div>
          <img src="/vec3.svg" />
          <div className="meetup">
            <img src="/meetup.svg" />
          </div>
        </div>
        <div className={classes.howDetails}>
          <Typography variant="h6" className={classes.title}>
            Register
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Find Partner
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Apply Yourself
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Meet Up
          </Typography>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
