import React from "react";
import Navbar from "../components/navbar";
import EditProfileForm from "../components/editform";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function editProfil() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <EditProfileForm />
    </>
  );
}
