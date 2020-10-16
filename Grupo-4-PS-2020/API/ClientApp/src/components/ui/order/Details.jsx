import React, { Fragment, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import {
  ButtonBase,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import ProductsDetail from "./Details/ProductsDetail";
import TotalDetail from "./Details/TotalDetail";

const Details = () => {
  var cartlist = localStorage.getItem("cart");
  cartlist = JSON.parse(cartlist);
  return (
    <Fragment>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Detalle del total
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
            Detalle productos
          </Typography>
          <Grid item xs={9}>
            {cartlist.length !== 0 ? (
              cartlist.map((prod, index) => (
                <ProductsDetail
                  key={index}
                  idProducto={prod.idProducto}
                  nombre={prod.nombre}
                  precio={prod.precio}
                  precioOferta={prod.precioOferta}
                  imagen={prod.imagen}
                  atributoselecc={prod.atributoselecc}
                />
              ))
            ) : (
              <Typography variant="h6" align="center" gutterBottom>
                No hay productos en el carrito
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
            Detalle total
          </Typography>
          <TotalDetail />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
