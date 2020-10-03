import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import "./catalogue.css";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 5,
    marginLeft: 20,
    maxWidth: 900,
    maxHeight: 160
  },
  image: {
    marginLeft: theme.spacing(1),
    width: 150,
    height: 160,
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Tile = ({ prod }) => {
  const classes = useStyles();

  const { id, name, price } = prod;

  return (
    <Paper className={classes.paper}>
      <CardActionArea>
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
              <Typography gutterBottom variant="h5" style={{paddingTop: "8px"}}>
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <del>$21.50</del>
              </Typography>
              <Typography variant="h6">${price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </CardActionArea>
    </Paper>
  );
};

export default Tile;
