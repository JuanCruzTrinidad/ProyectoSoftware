import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import ShippingForm from "./ShippingForm";
import Details from "./Details";
import { useHistory } from "react-router";
import { apiAxios } from "../../../config/axios";
import { SellerComments } from "./SellerComments";
import PaymentMethod from "./PaymentMethod";

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
    "Detalle de la compra",
    "Pago",
    "Comentarios",
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

  //States paymentMethod
  const [paymentmethod, setpaymentmethod] = useState("");
  const [typedoc, settypedoc] = useState("");
  const [doc, setdoc] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [expiry, setexpiry] = useState("");
  const [cvc, setcvc] = useState("");
  const [paydone, setpaydone] = useState(false);

  //State sellercomment
  const [comment, setcomment] = useState("");

  //States details
  const [subtotalship, setsubtotalship] = useState(0);
  const [percentage, setpercentage] = useState(0);
  const [subtotalprod, setsubtotalprod] = useState(0);
  const [discountid, setdiscountid] = useState();

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

  //Se pone el idPayment en order de localstorage
  const addPaymentMethodLocalStorage = (idpm) => {
    var orderls = localStorage.getItem("order");
    orderls = JSON.parse(orderls);

    const payment = {
      idPayment: idpm,
    };
    orderls.payment = payment;

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
        localStorage.setItem("direction", JSON.stringify(data)); //Agrego la dire al ls

        addDirectionLocalStorage(data.idDirection);
      })
      .catch((error) => console.log(error));
  };

  const getPaymentMethodsAPI = async () => {
    await apiAxios
      .get("/payment/allPayment", {
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
        const payment = {
          name: paymentmethod,
        };

        if (data.length === 0) {
          //Si la bd esta vacia
          createPaymentMethodAPI(payment);
        } else {
          const paymentmethodDB = data.filter((p) => p.name === paymentmethod);

          if (paymentmethodDB.length !== 0) {
            //Si existe en la bd
            addPaymentMethodLocalStorage(paymentmethodDB[0].idPayment);
          } else {
            //Si no se encuentra crear paymentmethod
            createPaymentMethodAPI(payment);
          }
        }
      })
      .catch((error) => console.log(error));
  };

  const createPaymentMethodAPI = (pm) => {
    apiAxios
      .post("/payment/createPayment", pm, {
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
        console.log(data);

        //Guarda id en ls order
        addPaymentMethodLocalStorage(data.idPayment);
      })
      .catch((error) => console.log(error));
  };

  const sendMailPedidoAPI = (idpedido) => {
    apiAxios
      .get("/pedido/pedidomail", {
        params: {
          idPedido: idpedido
        },
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
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const createOrderDetailAPI = (idpedido) => {
    var cartls = localStorage.getItem("cart");
    cartls = JSON.parse(cartls);

    cartls.map((prod) => {
      let detallePedido = {
        fk_pedido: idpedido,
        fk_atributos: prod.atributoselecc[0].sku,
        cantidad: prod.cant,
      };

      apiAxios
        .post("/detallePedido/createDetallePedido", detallePedido, {
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
          console.log(data);
        })
        .catch((error) => console.log(error));
    });

    setTimeout(() => {
      localStorage.removeItem("cart");
      localStorage.removeItem("order");
      localStorage.removeItem("shippingcost");
      localStorage.removeItem("direction");
      sendMailPedidoAPI(idpedido);
    }, 1500);
  };

  const createOrderAPI = () => {
    var orderls = localStorage.getItem("order");
    orderls = JSON.parse(orderls);

    apiAxios
      .post("/pedido/createPedido", orderls, {
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
        createOrderDetailAPI(data.idPedido);
      })
      .catch((error) => console.log(error));
  };

  const handleNext = () => {
    //Si esta en ShippingForm
    switch (activeStep) {
      case 0: //ShippingForm
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

        //Agrego el usuario al pedido
        var orderls = localStorage.getItem("order");
        orderls = JSON.parse(orderls);
        var userls = localStorage.getItem("iduser");
        userls = JSON.parse(userls);

        const user = {
          id: userls,
        };

        orderls.user = user;
        localStorage.setItem("order", JSON.stringify(orderls));
        break;
      case 1: //Details
        //Add shippingcost, discount, descuento y total al localstorage
        var orderls = localStorage.getItem("order");
        orderls = JSON.parse(orderls);

        let discount;
        if (discountid === undefined) {
          discount = null;
        } else {
          discount = {
            idDiscount: discountid,
          };
        }

        orderls.shippingCost = subtotalship;
        orderls.descuento = ((subtotalprod + subtotalship) * percentage) / 100;
        orderls.total =
          subtotalship +
          subtotalprod -
          ((subtotalprod + subtotalship) * percentage) / 100;
        orderls.discount = discount;
        localStorage.setItem("order", JSON.stringify(orderls));
        break;
      case 2: //PaymentMethod
        if (
          paymentmethod.length === 0 ||
          ((paymentmethod === "creditcard" || paymentmethod === "debitcard") &&
            (typedoc.length === 0 || doc.length === 0)) ||
          ((paymentmethod === "creditcard" || paymentmethod === "debitcard") &&
            (cardnumber.length === 0 ||
              expiry.length === 0 ||
              cvc.length === 0)) ||
          (paymentmethod === "mercadopago" && paydone === false)
        ) {
          seterror(true);
          return;
        }
        seterror(false);

        //Get paymentmethods de la bd
        getPaymentMethodsAPI();

        break;
      case 3: //SellerComments
        //Agrego comment al local storage
        var orderls = localStorage.getItem("order");
        orderls = JSON.parse(orderls);

        orderls.coment = comment;
        localStorage.setItem("order", JSON.stringify(orderls));

        createOrderAPI();
        break;
      default:
        break;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 2) {
      setpaymentmethod("");
      setpaydone(false);
    } else if (activeStep === 0){
      history.push('/cart');
    }

    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
        return (
          <Details
            postalcode={postalcode}
            province={province}
            subtotalship={subtotalship}
            setsubtotalship={setsubtotalship}
            percentage={percentage}
            setpercentage={setpercentage}
            subtotalprod={subtotalprod}
            setsubtotalprod={setsubtotalprod}
            discountid={discountid}
            setdiscountid={setdiscountid}
          />
        );
      case 2:
        return (
          <PaymentMethod
            paymentmethod={paymentmethod}
            setpaymentmethod={setpaymentmethod}
            typedoc={typedoc}
            settypedoc={settypedoc}
            doc={doc}
            setdoc={setdoc}
            error={error}
            seterror={seterror}
            cardnumber={cardnumber}
            setcardnumber={setcardnumber}
            expiry={expiry}
            setexpiry={setexpiry}
            cvc={cvc}
            setcvc={setcvc}
            paydone={paydone}
            setpaydone={setpaydone}
          />
        );
      case 3:
        return <SellerComments comment={comment} setcomment={setcomment} />;
      default:
        return "Unknown stepIndex";
    }
  }

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
                <div className="pb-5 pt-5" style={{ textAlign: "center" }}>
                  <Typography className={classes.instructions}>
                    La compra fue completada. Muchas gracias!
                  </Typography>
                  <Button onClick={(e) => history.push("/")}>Ir al Home</Button>
                </div>
              </div>
            ) : (
              <div>
                <Typography component={"span"} className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div className="pb-5 pt-5" style={{ textAlign: "right" }}>
                  <Button
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Atras
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#007A9A" }}
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1
                      ? "Enviar y finalizar compra"
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
