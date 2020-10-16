import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 5,
  },
}));

const ProductsDetail = (props) => {
  const { idProducto, nombre, precio, atributoselecc } = props;

  const history = useHistory();
  const classes = useStyles();

  let cartlocalstorage = localStorage.getItem("cart");
  cartlocalstorage = JSON.parse(cartlocalstorage);

  const cartcant = cartlocalstorage.filter(
    (prod) =>
      prod.idProducto === idProducto &&
      prod.atributoselecc[0].sku === atributoselecc[0].sku
  )[0].cant;

  const [cant, setcant] = useState(cartcant);

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={9}>
          <Grid xs container direction="column" justify="center">
            <Typography
              variant="h5"
              style={{ cursor: "pointer" }}
              onClick={(e) => history.push(`/product/${idProducto}`)}
            >
              {nombre}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              SKU: {atributoselecc[0].sku} - Talle: {atributoselecc[0].talle} -
              Color: {atributoselecc[0].color}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="subtitle1">
            $ {precio} x {cant}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductsDetail;
