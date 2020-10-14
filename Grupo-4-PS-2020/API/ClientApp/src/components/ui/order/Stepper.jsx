import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import {
  ButtonBase,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import ShippingForm from "./ShippingForm";
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Formulario de envio",
    "Muestro costos y detalles (peso, envio, prod)",
    "Metodo pago",
    "Comentarios y send",
  ];
}

export default function StepperOrder() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const [error, seterror] = useState(false);

  //States shipping form
  const [street, setstreet] = useState("");
  const [number, setnumber] = useState("");
  const [floor, setfloor] = useState("");
  const [dep, setdep] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [locality, setlocality] = useState("");
  const [province, setprovince] = useState("");

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <ShippingForm
            street={street}
            setstreet={setstreet}
            number={number}
            setnumber={setnumber}
            floor={floor}
            setfloor={setfloor}
            dep={dep}
            setdep={setdep}
            postalcode={postalcode}
            setpostalcode={setpostalcode}
            locality={locality}
            setlocality={setlocality}
            province={province}
            setprovince={setprovince}
            error={error}
          />
        );
      case 1:
        return <Details />;
      case 2:
        return "This is the bit I really care about!";
      case 3:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  }

  const addToLocalStorage = () => {

    // const domicilio = {

    // }

    //   let order = localStorage.getItem("order");

    //   if (order === '[]' || order === null) {
    //     localStorage.setItem("order", JSON.stringify())
    //   }

    //   if (cartlocalstorage === null || cartlocalstorage === undefined || cartlocalstorage === "[]") {
    //     product.cant = 1;
    //     localStorage.setItem("cart", JSON.stringify([product]));
    //     alert("Producto agregado al carrito");
    //   } else {
    //     cartlocalstorage = JSON.parse(cartlocalstorage);
    //     //Mismo producto con el mismo sku que esta en el carrito
    //     const auxprod = cartlocalstorage.filter(
    //       (prod) =>
    //         prod.idProducto === product.idProducto &&
    //         prod.atributoselecc[0].sku === product.atributoselecc[0].sku
    //     )[0];

    //     if (auxprod === undefined) {
    //       product.cant = 1;
    //       cartlocalstorage.push(product);
    //       localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
    //       if (type === "cart") alert("Producto agregado al carrito");
    //     } else {
    //       //Si el producto tiene el mismo sku que el producto en carrito
    //       product.cant = auxprod.cant + 1;

    //       //Filtro el producto exactamente igual del carrito
    //       cartlocalstorage = cartlocalstorage.filter(
    //         (prod) =>
    //           prod.idProducto != product.idProducto &&
    //           prod.atributoselecc[0].sku != product.atributoselecc[0].sku
    //       );

    //       cartlocalstorage.push(product);
    //       localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
    //       if (type === "cart") alert("Producto agregado al carrito");
    //     }
    //   }
    //   if (type === "buy") history.push("/cart");
    // }
  }

  const handleNext = () => {
    if (
      street === "" ||
      number === "" ||
      postalcode === "" ||
      locality === "" ||
      province === ""
    ) {
      seterror(true);
      return;
    }
    seterror(false);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth={"lg"}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={9}>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div className="pb-5 pt-3">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Atras
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1
                      ? "Finalizar"
                      : "Siguiente"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
