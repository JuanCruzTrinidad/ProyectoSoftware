import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PageviewRoundedIcon from "@material-ui/icons/PageviewRounded";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(1),
      width: "100%",
    },
  },
}));

export default function Search({ setsearch, handleClickSearch }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            label="Buscar"
            onChange={(e) => setsearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={(e) => handleClickSearch()}
                  >
                    <PageviewRoundedIcon style={{fontSize: "30px", color: "#007A9A"}}/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Grid>
    </Fragment>
  );
}
