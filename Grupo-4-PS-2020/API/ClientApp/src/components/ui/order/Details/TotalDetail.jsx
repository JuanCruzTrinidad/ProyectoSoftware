import React, { Fragment, useState, useEffect } from "react";

import { Grid, Typography, TextField, useControlled } from "@material-ui/core";
import { shippingCalculate } from "../../../../helpers/shippingCalculate";
import Provinces from "../../../../helpers/Provinces.json";
import Spinner from "../../Spinner";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { apiAxios } from "../../../../config/axios";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const TotalDetail = (props) => {
  const [show, setshow] = useState(false);
  const [discountcode, setdiscountcode] = useState("");

  const token = localStorage.getItem("token");

  const {
    postalcode,
    province,
    subtotalship,
    setsubtotalship,
    percentage,
    setpercentage,
    subtotalprod,
    setsubtotalprod,
    discountid,
    setdiscountid
  } = props;

  //Subtotal productos
  var orderls = localStorage.getItem("order");
  orderls = JSON.parse(orderls);
  setsubtotalprod(orderls.subtotal);

  //Subtotal envio
  var provinceSelecc = Provinces.provinces.filter(
    (prov) => prov.nombre === province
  );
  var cartls = localStorage.getItem("cart");
  cartls = JSON.parse(cartls);

  if (subtotalship === 0) {
    //Calculo envio
    shippingCalculate(provinceSelecc[0].id, Number(postalcode), cartls);
  }

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
  }, 2300);

  setTimeout(() => {
    setshow(true);
  }, 2500);

  const getDiscountByCodeAPI = async (code) => {
    await apiAxios
      .get("/discount/discountByCode", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        params: {
          code,
        },
      })
      .then(({ data }) => {
        setdiscountid(data.idDiscount);
        if (data !== "") {
          setpercentage(data.percentage);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleClickSearchCode = (code) => {
    getDiscountByCodeAPI(code);
  };

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
          {percentage !== 0 ? (
            <Fragment>
              <Grid item xs={9}>
                <Typography variant="h6">Subtotal</Typography>
              </Grid>
              <Grid item xs={3} className="pb-3">
                <Typography variant="h6">
                  $ {subtotalprod + subtotalship}
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="subtitle2">
                  Descuento %{percentage}
                </Typography>
              </Grid>
              <Grid item xs={3} className="pb-3">
                <Typography variant="subtitle2">
                  $ -{((subtotalprod + subtotalship) * percentage) / 100}
                </Typography>
              </Grid>
            </Fragment>
          ) : null}
          <Grid item xs={9}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" className="pb-3">
              $ {subtotalship + subtotalprod -((subtotalprod + subtotalship) * percentage) / 100}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Código de descuento"
              variant="outlined"
              value={discountcode}
              onChange={(e) => setdiscountcode(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={(e) => handleClickSearchCode(discountcode)}
                    >
                      <SendRoundedIcon
                        style={{ fontSize: "30px", color: "#007A9A" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  ) : (
    <Spinner />
  );
};

export default TotalDetail;
