import React, { Fragment, useState, useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";
import { useShippingCalculate } from "../../../../helpers/shippingCalculate";
import Provinces from "../../../../helpers/Provinces.json";
import Spinner from '../../Spinner';

const TotalDetail = ({ postalcode, province }) => {
  const [show, setshow] = useState(false);
  const [subtotalship, setsubtotalship] = useState(0);

  //Subtotal productos
  let subtotalprod = 0;
  var orderls = localStorage.getItem("order");
  orderls = JSON.parse(orderls);
  subtotalprod = orderls.subtotal;

  //Subtotal envio
  var provinceSelecc = Provinces.provinces.filter(
    (prov) => prov.nombre === province
  );
  var cartls = localStorage.getItem("cart");
  cartls = JSON.parse(cartls);

  //Calculo envio
  useShippingCalculate(provinceSelecc[0].id, Number(postalcode), cartls); //Falta ponerle los values al select de las provincias

  var shipls;
  var value;

  setTimeout(() => {
    shipls = localStorage.getItem("shippingcost");
    var valueshipping = shipls.split("valor");
    if (valueshipping[1] !== undefined) {
      valueshipping = valueshipping[1].split('"');
      valueshipping = valueshipping[2].slice(0, -1);
      value = valueshipping;
      setsubtotalship(Number(value));
    }
  }, 3000);

  console.log(subtotalship);

  setTimeout(() => {
    setshow(true);
  }, 4000);

  return show ? (
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
            <Typography variant="h6">$ {subtotalship}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">
              $ {subtotalship + subtotalprod}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  ) : <Spinner />;
};

export default TotalDetail;
