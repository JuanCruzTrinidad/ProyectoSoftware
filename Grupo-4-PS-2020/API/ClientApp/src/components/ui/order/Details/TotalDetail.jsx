import React, { Fragment, useState, useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";
import { useShippingCalculate } from "../../../../helpers/shippingCalculate";

const TotalDetail = () => {
  const [show, setshow] = useState(false);

  //Subtotal productos
  let subtotalprod = 0;
  var orderls = localStorage.getItem("order");
  orderls = JSON.parse(orderls);
  subtotalprod = orderls.subtotal;

  //Subtotal envio
  var directionls = localStorage.getItem("direction");
  directionls = JSON.parse(directionls);

  var cartls = localStorage.getItem("cart");
  cartls = JSON.parse(cartls); //directionls.province, directionls.postalCode, cartls

  //Calculo envio
  useShippingCalculate("B", "1842", cartls); //Falta ponerle los values al select de las provincias
  const [shipls, setshipls] = useState("");
  setTimeout(() => {
    setshipls(localStorage.getItem("shippingcost"));
  }, 1000);

  var valueshipping = shipls.split("valor");
  var value = valueshipping[1];
  if (value !== undefined) {
    value = value.split('"');
    value = value[2].slice(0, -1);
    value = Number(value);
  }

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
            <Typography variant="h6">$ {value}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">$ {value + subtotalprod}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TotalDetail;
