import React, { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import {useShippingCalculate} from '../../../../helpers/shippingCalculate';

const TotalDetail = () => {

  //Subtotal productos
  let subtotalprod = 0;
  var orderls = localStorage.getItem("order");
  orderls = JSON.parse(orderls);
  subtotalprod = orderls.subtotal;

  //Subtotal envio
  // var directionls = localStorage.getItem("direction");
  // directionls = JSON.parse(directionls);

  var cartls = localStorage.getItem("cart");
  cartls = JSON.parse(cartls);

  useShippingCalculate("aaa", 1313, cartls);
  //console.log(subtotalshipping);



  console.log("hola");


  return (
    <Fragment>
      <Grid container>
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="h6">Subtotal productos</Typography>
          </Grid>
          <Grid item xs={3} className="pb-3">
            <Typography variant="h6">$ {subtotalprod}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">Subtotal envio</Typography>
          </Grid>
          <Grid item xs={3} className="pb-3">
            <Typography variant="h6">$ dsfas</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">$ dsfas</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TotalDetail;
