import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import TileCart from "./TileCart";
import { useHistory } from "react-router";
import ReplaySharpIcon from '@material-ui/icons/ReplaySharp';

const Cart = () => {
  const history = useHistory();

  var cartlist = localStorage.getItem("cart");
  cartlist = JSON.parse(cartlist);

  const actualizarSubtotal = () => {
    let price = 0;
    //Cambio el precio total
    var cartlist = localStorage.getItem("cart");
    cartlist = JSON.parse(cartlist);

    if (cartlist !== null) {
      if (cartlist.length !== 0) {
        cartlist.forEach((prod) => {
          price += prod.precio * prod.cant;
        });
      }
    }
    console.log(price);
    return price;
  };

  let price = actualizarSubtotal();

  const handleNext = () => {
    if (cartlist !== null) {
      if (cartlist.length !== 0) {
        //Creo el order y completo el subtotal
        var orderls = localStorage.getItem("order");
        if (orderls === null) {
          const order = {
            user: null,
            coment: null,
            shippingCost: null,
            total: null,
            descuento: null,
            subtotal: price,
            discount: null,
            direction: null,
            payment: null,
          };

          localStorage.setItem("order", JSON.stringify(order));
        } else {
          orderls = JSON.parse(orderls);

          orderls.subtotal = price;

          localStorage.setItem("order", JSON.stringify(orderls));
        }

        history.push("/order");
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Container maxWidth={"lg"}>
        <Typography variant="h3" align="center" gutterBottom className="pt-3">
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
            {cartlist !== null ? (
              cartlist.length !== 0 ? (
                cartlist.map((prod, index) => (
                  <TileCart
                    key={index}
                    idProducto={prod.idProducto}
                    nombre={prod.nombre}
                    precio={prod.precio}
                    precioOferta={prod.precioOferta}
                    imagen={prod.imagen}
                    atributoselecc={prod.atributoselecc}
                    //setpreecio={setpreecio}
                    actualizarSubtotal={actualizarSubtotal}
                  />
                ))
              ) : (
                <Typography variant="h6" align="center" gutterBottom>
                  No hay productos en el carrito
                </Typography>
              )
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
            <Button
              variant="contained"
              style={{
                backgroundColor: "#007A9A",
                color: "white",
                marginTop: "10px",
              }}
              size="small"
              onClick={(e) => {
                //history.push("/cart");
                history.replace('/cart');
                //history.go(0);
                window.location.reload();
              }}
            >
              <Typography variant="button" display="block">
                <ReplaySharpIcon />
              </Typography>
            </Button>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Typography variant="h5" gutterBottom>
                Subtotal
              </Typography>
              <div className="pr-5"></div>
              <Typography variant="h5" gutterBottom>
                $ {price}
              </Typography>
            </Grid>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#007A9A",
                color: "white",
                marginTop: "20px",
              }}
              size="large"
              onClick={(e) => handleNext()}
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
