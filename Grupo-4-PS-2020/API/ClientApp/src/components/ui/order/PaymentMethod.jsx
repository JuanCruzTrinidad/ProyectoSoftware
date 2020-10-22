import React, { Fragment, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, Grid, Typography } from "@material-ui/core";
import CreditCardInput from "react-credit-card-input";
import Spinner from "../Spinner";

const identityCardTypes = [
  { id: 1, value: "DNI" },
  { id: 2, value: "DNA" },
  { id: 3, value: "DNE" },
  { id: 4, value: "DNO" },
];

const PaymentMethod = (props) => {
  const {
    paymentmethod,
    setpaymentmethod,
    typedoc,
    settypedoc,
    doc,
    setdoc,
		error,
		seterror,
    cardnumber,
    setcardnumber,
    expiry,
    setexpiry,
    cvc,
		setcvc,
		paydone,
		setpaydone
  } = props;

  const [showspinner, setshowspinner] = useState(false);

  const handleClickMercadoPago = () => {
    setshowspinner(true);
		seterror(false);
		
    setTimeout(() => {
			setshowspinner(false);
      setpaydone(true);
    }, 3500);
  };

  return (
    <Fragment>
      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: "center", paddingBottom: "4%" }}
      >
        Seleccione el metodo de pago
      </Typography>

      {paymentmethod.length === 0 ? (
        <Grid container>
          <Grid item xs={3} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#007A9A",
                color: "white",
              }}
              value="creditcard"
              size="large"
              onClick={(e) => setpaymentmethod(e.currentTarget.value)}
            >
              <Typography variant="button" display="block">
                Tarjeta de crédito
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#007A9A",
                color: "white",
              }}
              value="debitcard"
              size="large"
              onClick={(e) => setpaymentmethod(e.currentTarget.value)}
            >
              <Typography variant="button" display="block">
                Tarjeta de débito
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#007A9A",
                color: "white",
              }}
              size="large"
              value="mercadopago"
              onClick={(e) => setpaymentmethod(e.currentTarget.value)}
            >
              <Typography variant="button" display="block">
                Mercado pago
              </Typography>
            </Button>
          </Grid>
        </Grid>
      ) : null}

      {paymentmethod === "debitcard" || paymentmethod === "creditcard" ? (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            style={{ paddingBottom: "4%" }}
          >
            <TextField
              id="outlined-select-currency"
              select
              helperText="Tipo"
              variant="outlined"
              onChange={(e) => settypedoc(e.target.value)}
            >
              {identityCardTypes.map((card) => (
                <MenuItem key={card.id} value={card.value}>
                  {card.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-required"
              label="Documento de identidad"
              variant="outlined"
              onChange={(e) => setdoc(e.target.value)}
            />
          </Grid>
          <CreditCardInput
            cardNumberInputProps={{
              value: cardnumber,
							onChange: (e) => setcardnumber(e.target.value),
							onError: err => console.log(err)
            }}
            cardExpiryInputProps={{
              value: expiry,
							onChange: (e) => setexpiry(e.target.value),
							onError: err => console.log(err)
            }}
            cardCVCInputProps={{
              value: cvc,
							onChange: (e) => setcvc(e.target.value),
							onError: err => console.log(err),
              type: "password",
            }}
            fieldClassName="input"
            customTextLabels={{
              invalidCardNumber: "El número de la tarjeta es inválido",
              expiryError: {
                invalidExpiryDate: "La fecha de expiración es inválida",
                monthOutOfRange:
                  "El mes de expiración debe estar entre 01 y 12",
                yearOutOfRange:
                  "El año de expiración no puede estar en el pasado",
                dateOutOfRange:
                  "La fecha de expiración no puede estar en el pasado",
              },
              invalidCvc: "El código de seguridad es inválido",
              cardNumberPlaceholder: "Número de tarjeta",
              expiryPlaceholder: "MM/AA",
              cvcPlaceholder: "COD",
            }}
          />
        </Grid>
      ) : null}

      {paymentmethod === "mercadopago" &&
      showspinner === false &&
      paydone === false ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#007A9A",
              color: "white",
            }}
            size="large"
            value="mercadopago"
            onClick={(e) => handleClickMercadoPago()}
          >
            <Typography variant="button" display="block">
              Ir a mercado pago
            </Typography>
          </Button>
        </Grid>
      ) : null}

      {showspinner === true ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Spinner />
        </Grid>
      ) : null}

      {paydone === true ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="subtitle1">
            Transacción realizada con éxito
          </Typography>
        </Grid>
      ) : null}

      {error ? (
        <Typography variant="subtitle1" color="error" gutterBottom>
          Por favor, complete todos los campos para continuar
        </Typography>
      ) : null}
    </Fragment>
  );
};

export default PaymentMethod;
