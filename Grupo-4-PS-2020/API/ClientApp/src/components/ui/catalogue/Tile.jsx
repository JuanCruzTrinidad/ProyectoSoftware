import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import "./catalogue.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 5,
    marginLeft: 20,
    maxWidth: 900,
    maxHeight: 160,
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
  const history = useHistory();
  const classes = useStyles();

  const { idProducto, nombre, precio, precioOferta, imagen } = prod;

  return (
    <Paper className={classes.paper}>
      <CardActionArea
        onClick = {(e) => history.push('/product')}
      >
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={nombre}
                src={imagen}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ paddingTop: "8px" }}
                >
                  {nombre}
                </Typography>
                {precioOferta === 0 ? (
                  <Fragment>
                  <div className="mb-4"></div>
                  <Typography variant="h6">${precio}</Typography>
                  </Fragment>
                ) : (
                  <Fragment>
                  <Typography variant="subtitle1" color="textSecondary">
                    <del>${precioOferta}</del>
                  </Typography>
                  <Typography variant="h6">${precio}</Typography>
                  </Fragment>
                )}
     
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Paper>
  );
};

export default Tile;
