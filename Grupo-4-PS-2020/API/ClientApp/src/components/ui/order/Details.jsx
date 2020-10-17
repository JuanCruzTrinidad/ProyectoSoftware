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
          <Typography variant="h5" gutterBottom style={{ textAlign: "center" }} className="pb-3">
            Productos
          </Typography>
          <Grid item xs={9} style={{ marginLeft: "auto", marginRight: "auto" }}>
            {cartlist.length !== 0 ? (
              cartlist.map((prod, index) => (
                <ProductsDetail
                  key={index}
                  idProducto={prod.idProducto}
                  nombre={prod.nombre}
                  precio={prod.precio}
                  atributoselecc={prod.atributoselecc}
                  cant={prod.cant}
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
          <Typography variant="h5" gutterBottom style={{ textAlign: "center" }} className="pb-3">
            Total
          </Typography>
          <Grid item xs={9} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <TotalDetail />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
