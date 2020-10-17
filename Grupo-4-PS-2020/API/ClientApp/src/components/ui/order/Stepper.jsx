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
import Details from "./Details";
import { useHistory } from "react-router";
import { apiAxios } from "../../../config/axios";
import { SellerComments } from "./SellerComments";

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
  const history = useHistory();

  //Si no esta logeado no debe poder entrar a esta pagina
  const token = localStorage.getItem("token");
  if (token === null) {
    history.push("/");
  }

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
      case 1:
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
      case 0:
        return <SellerComments />;
      case 2:
        return "This is the bit I really care about!";
      case 3:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  }

  //Se pone el idDirection en order de localstorage
  const addDirectionLocalStorage = (iddirec) => {
    var orderls = localStorage.getItem("order");
    orderls = JSON.parse(orderls);

    const direction = {
      idDirection: iddirec,
    };
    orderls.direction = direction;

    localStorage.setItem("order", JSON.stringify(orderls));
  };

  const createDirectionAPI = (direc) => {
    apiAxios
      .post("/direction/createDirection", direc, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        addDirectionLocalStorage(data.idDirection);
        //console.log(data);
      })
      .catch((error) => console.log(error));
  };

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

    const direction = {
      street,
      number: parseInt(number, 10),
      flat: parseInt(floor, 10),
      apartment: dep,
      postalCode: parseInt(postalcode, 10),
      location: locality,
      province,
    };

    createDirectionAPI(direction);

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
