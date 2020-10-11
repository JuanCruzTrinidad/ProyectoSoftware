import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import TileCart from "./TileCart";

const Cart = () => {
  var cartlist = localStorage.getItem("cart");
  cartlist = JSON.parse(cartlist);

  let precio = 0;

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Container maxWidth={"lg"}>
        <Typography variant="h3" align="center" gutterBottom>
          CARRITO
        </Typography>
        <Container maxWidth={"md"} style={{ backgroundColor: "white" }}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <div className="pt-3"></div>
            {cartlist.length !== 0 ? (
              cartlist.map((prod, index) => (
                <TileCart
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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-end"
            className="pt-5 pb-3"
          >
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Typography variant="h5" gutterBottom>
                Total parcial
              </Typography>
              <div className="pr-5"></div>
              {cartlist !== null
                ? cartlist.forEach((prod) => {
                    precio += prod.precio * prod.cant;
                  })
                : null}
              <Typography variant="h5" gutterBottom>
                $ {precio}
              </Typography>
            </Grid>

            <Button
              variant="contained"
              style={{ backgroundColor: "#007A9A", marginTop: "20px" }}
              href="#contained-buttons"
              size="large"
            >
              <Typography variant="button" display="block">
                Continuar
              </Typography>
            </Button>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Cart;
