import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import Quantity from "./Quantity";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingRight: "15px",
    marginTop: 5,
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

const TileCart = (props) => {
  const {
    idProducto,
    nombre,
    precio,
    precioOferta,
    imagen,
    atributoselecc,
  } = props;

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

  const handleClickDelete = () => {
    let cartlocalstorage = localStorage.getItem("cart");
    cartlocalstorage = JSON.parse(cartlocalstorage);

    cartlocalstorage = cartlocalstorage.filter(
      (prod) =>
        prod.idProducto !== idProducto ||
        (prod.idProducto === idProducto &&
          prod.atributoselecc[0].sku !== atributoselecc[0].sku)
    );

    localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
    window.location.reload();
  };

  const handleChangeCant = () => {
    let cartlocalstorage = localStorage.getItem("cart");
    cartlocalstorage = JSON.parse(cartlocalstorage);

    cartlocalstorage = cartlocalstorage.filter(
      (prod) =>
        prod.idProducto !== idProducto ||
        (prod.idProducto === idProducto &&
          prod.atributoselecc[0].sku !== atributoselecc[0].sku)
    );

    const auxprod = {
      idProducto,
      nombre,
      precio,
      precioOferta,
      imagen,
      atributoselecc,
      cant,
    };

    if (cartlocalstorage === [] || cartlocalstorage === null) {
      localStorage.setItem("cart", JSON.stringify([auxprod]));
    } else {
      cartlocalstorage.push(auxprod);
      localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
    }
  };

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt={nombre}
              src={imagen}
              onClick={(e) => history.push(`/product/${idProducto}`)}
            />
          </ButtonBase>
        </Grid>
        <Grid xs={12} sm container direction="row">
          <Grid xs container direction="column" justify="center">
            <Typography
              variant="h5"
              style={{ cursor: "pointer" }}
              onClick={(e) => history.push(`/product/${idProducto}`)}
            >
              {nombre}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>SKU: {atributoselecc[0].sku} - Talle: {atributoselecc[0].talle} - Color: {atributoselecc[0].color}</Typography>
          </Grid>
          <Grid
            xs
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Quantity
              cant={cant}
              setcant={setcant}
              handleChangeCant={handleChangeCant}
            />
          </Grid>

          <Grid item>
            <div
              style={{ textAlign: "end", paddingBottom: "15px", color: "red" }}
            >
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={(e) => handleClickDelete()}
              />
            </div>
            {precioOferta === 0 ? (
              <Fragment>
                <div className="mb-4"></div>
                <Typography variant="h4">$ {precio * cant}</Typography>
              </Fragment>
            ) : (
              <Fragment>
                <Typography color="textSecondary" style={{ textAlign: "end" }}>
                  <del>$ {precioOferta * cant}</del>
                </Typography>
                <Typography variant="h4">$ {precio * cant}</Typography>
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TileCart;
