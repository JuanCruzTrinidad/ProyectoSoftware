import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useHistory } from "react-router";
import Quantity from './Quantity';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingRight: "15px",
    marginTop: 5,
    marginLeft: 20,
    maxHeight: 150,
  },
  image: {
    marginLeft: theme.spacing(1),
    width: 150,
    height: 150,
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const TileCart = ({ prod }) => {
  const history = useHistory();
  const classes = useStyles();

  //const { idProducto, nombre, precio, precioOferta, imagen } = prod;
  const idProducto = 1;
  const nombre = "manolo";
  const precio = 2;
  const precioOferta = 3;
  const imagen = "hola";

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt={nombre} src={imagen} />
          </ButtonBase>
        </Grid>
        <Grid xs={12} sm container direction="row">
          <Grid xs container direction="column" justify="center">
            <Typography
              variant="h4"
              style={{cursor: "pointer" }}
              onClick={(e) => history.push("/product")}
            >
              {nombre}
            </Typography>
          </Grid>
          <Grid xs={6} container  direction="column" alignItems="center" justify="center" >
            <Quantity />
          </Grid>
          
          <Grid item className="pt-3">
            {precioOferta === 0 ? (
              <Fragment>
                <div className="mb-4"></div>
                <Typography variant="h4">$ {precio}</Typography>
              </Fragment>
            ) : (
              <Fragment>
                <Typography color="textSecondary" style={{ textAlign: "end" }}>
                  <del>$ {precioOferta}</del>
                </Typography>
                <Typography variant="h4">$ {precio}</Typography>
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TileCart;
