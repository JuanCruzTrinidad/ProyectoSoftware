import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ButtonBase,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import "./catalogue.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 5,
    marginLeft: 20,
    maxWidth: 900,
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Tile = ({prod}) => {
  const classes = useStyles();

  const {id, name} = prod;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt={name}
              src="https://material-ui.com/static/images/grid/complex.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <del>$21.50</del>
              </Typography>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tile;
