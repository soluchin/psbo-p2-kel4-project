import React from "react";
import {
  makeStyles,
  Typography,
  Paper,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "10px",
  },
  root: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
  },
}));

export default function EditProfileForm() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidh="sm" className={classes.Container}>
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" style={{ padding: "10px" }}>
            Lengkapi Data Diri Kamu
          </Typography>
          <div className={classes.root}>
            <form className={classes.form}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="desc"
                    name="deskripsi diri"
                    variant="outlined"
                    fullWidth
                    id="deskripsi"
                    label="Deskripsi Diri"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="job"
                    name="job"
                    variant="outlined"
                    fullWidth
                    id="pekerjaan"
                    label="Pekerjaan"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="domisili"
                    name="domisili"
                    variant="outlined"
                    fullWidth
                    id="domisili"
                    label="Domisili"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="suku"
                    name="suku"
                    variant="outlined"
                    fullWidth
                    id="suku"
                    label="Suku"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="status"
                    name="status"
                    variant="outlined"
                    fullWidth
                    id="status"
                    label="Status Pernikahan"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    autoComplete="pendidikan terakhir"
                    name="pendidikan terakhir"
                    variant="outlined"
                    fullWidth
                    id="pendidikan-terakhir"
                    label="Pendidikan Terakhir"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="hobi"
                    name="hobi"
                    variant="outlined"
                    fullWidth
                    id="hobi"
                    label="Hobi"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="karakter positif"
                    name="karakter positif"
                    variant="outlined"
                    fullWidth
                    id="karakter-positif"
                    label="Karakter Positif"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="karakter negatif"
                    name="karakter negatif"
                    variant="outlined"
                    fullWidth
                    id="karakter-negatif"
                    label="Karakter Negatif"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    type="reset"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    className={classes.submit}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.submit}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Container>
    </>
  );
}
