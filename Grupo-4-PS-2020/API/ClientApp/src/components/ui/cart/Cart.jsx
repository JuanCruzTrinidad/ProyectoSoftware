import React from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import TileCart from "./TileCart";

const Cart = () => {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Container maxWidth={"lg"}>
        <h1 style={{ textAlign: "center" }}>Carrito</h1>
        <Container maxWidth={"md"} style={{ backgroundColor: "white" }}>
          <Grid
            xs={12}
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <div className="pt-3"></div>
            <TileCart />
            <TileCart />
          </Grid>
          <Grid
            container
            xs={12}
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
              <h3>Total parcial</h3>
              <div className="pr-5"></div>
              <h3>$sumadineros</h3>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              size="large"
            >
              Continuar
            </Button>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Cart;
