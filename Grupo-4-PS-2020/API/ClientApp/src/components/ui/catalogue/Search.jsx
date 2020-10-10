import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PageviewRoundedIcon from "@material-ui/icons/PageviewRounded";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "26ch",
    },
  },
}));

export default function Search({ search, setsearch, handleClickSearch }) {
  const classes = useStyles();



  return (
    <Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Buscar"
            onChange={(e) => setsearch(e.target.value)}
          />
        </form>
        <IconButton onClick={e => handleClickSearch()}>
          <PageviewRoundedIcon style={{ fontSize: "30px" }} />
        </IconButton>
      </Grid>
    </Fragment>
  );
}
