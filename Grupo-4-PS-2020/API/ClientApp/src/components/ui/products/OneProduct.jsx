import { Container, Grid, MenuItem, Select, Tooltip } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import AddCommentIcon from "@material-ui/icons/AddComment";
import MediaCard from "../catalogue/Card";
import { useHistory, useParams } from "react-router";
import { apiAxios } from "../../../config/axios";
import Spinner from "../Spinner";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Comments } from "./Comments";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 600,
    overflow: "hidden",
    width: "auto",
    margin: "auto",
  },
}));

export const OneProduct = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  //States
  const [activeStep, setActiveStep] = useState(0);
  const [product, setproduct] = useState({});
  const [value, setValue] = useState(2);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [show, setshow] = useState(false);
  const [disabled, setdisabled] = useState(true); //Disabled select del talle
  const [relationalsProduct, setrelationalsProduct] = useState([]);
  const [open, setOpen] = useState(false);

  //Parametro que llega desde la url
  let { idproduct } = useParams();

  const getProductById = (idprod) => {
    apiAxios
      .get("/product/ProductId", {
        params: { idProducto: idprod },
      })
      .then(({ data }) => {
          var multiple = 0;
          switch (data.moneda) {
            case 'ARS': multiple = 78.33;
            break;
            case 'BRL': multiple = 5.74;
            break;
            case 'EUR': multiple = 0.86;
            break;
            case 'USD': multiple = 1;
            break;
            default: multiple = 78.33;
            break;
          }
          data.precio = data.precio * multiple;
          data.precio = Math.round(data.precio);
          data.precioOferta = data.precioOferta * multiple;
          data.precioOferta = Math.round(data.precioOferta);
          setproduct(data);
          setshow(true);
          getProductsBySubcategoryAPI(data.subcategory.idSubcategory);
        })
      .catch((error) => console.log(error));
  };

  const getProductsBySubcategoryAPI = (subcatid) => {
    apiAxios
      .get("/product/productBySubcategory", {
        params: { idSubcategory: subcatid },
      })
      .then(({ data }) => {
        console.log(data);
        const result = data.filter(
          (d) => d.idProducto !== parseInt(idproduct, 10)
        );
        setrelationalsProduct(result.slice(0, 3));
      })
      .catch((error) => console.log(error));
  };

  const imagesCard = [
    {
      label: product.nombre,
      imgPath: product.imagen,
    },
    {
      label: product.nombre,
      imgPath: product.video,
    },
  ];

  const maxSteps = imagesCard.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickCarrito = (type) => {
    if (color === "" || size === "") {
      alert("Los espacios de color y talle no deben quedar vacios");
    } else {
      let cartlocalstorage = localStorage.getItem("cart");

      //Pongo el atributo seleccionado en el objeto
      product.atributoselecc = product.atributos.filter(
        (atrib) => atrib.color === color && atrib.talle === size
      );
      if (
        cartlocalstorage === null ||
        cartlocalstorage === undefined ||
        cartlocalstorage === "[]"
      ) {
        product.cant = 1;
        localStorage.setItem("cart", JSON.stringify([product]));
      } else {
        cartlocalstorage = JSON.parse(cartlocalstorage);
        //Mismo producto con el mismo sku que esta en el carrito
        const auxprod = cartlocalstorage.filter(
          (prod) =>
            prod.idProducto === product.idProducto &&
            prod.atributoselecc[0].sku === product.atributoselecc[0].sku
        )[0];

        if (auxprod === undefined) {
          product.cant = 1;
          cartlocalstorage.push(product);
          localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
          if (type === "cart") alert("Producto agregado al carrito");
        } else {
          //Si el producto tiene el mismo sku que el producto en carrito
          product.cant = auxprod.cant + 1;

          //Filtro el producto exactamente igual del carrito
          cartlocalstorage = cartlocalstorage.filter(
            (prod) =>
              prod.idProducto != product.idProducto &&
              prod.atributoselecc[0].sku != product.atributoselecc[0].sku
          );

          cartlocalstorage.push(product);
          localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
          if (type === "cart") alert("Producto agregado al carrito");
        }
      }
      if (type === "buy") history.push("/cart");
    }
  };

  const handleDeleteProduct = (e, idproduct) => {
    apiAxios
      .post("product/deleteProduct", idproduct, {
        params: { id: idproduct },
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log(error));

    history.push('/catalogue');
  };

  useEffect(() => {
    if (color !== "") {
      setdisabled(false);
    }
  }, [color]);

  useEffect(() => {
    getProductById(idproduct);
  }, [idproduct]);

  useEffect(() => {}, [product.valoraciones]);

  return show ? (
    <>
      <Container maxWidth="md" spacing={4} style={{ marginTop: "2%" }}>
        <Grid container justify="center" spacing={6}>
          <Grid item xs={6}>
            <Paper elevantion={3} style={{ padding: 20, height: 500 }}>
              <div className={classes.root}>
                {activeStep === 0 ? (
                  <img
                    className={classes.img}
                    src={imagesCard[0].imgPath}
                    alt={imagesCard[0].label}
                  />
                ) : (
                  <iframe
                    width="400"
                    height="250"
                    marginTop="20"
                    src={imagesCard[1].imgPath}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  variant="text"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Siguiente
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Anterior
                    </Button>
                  }
                />
              </div>
              <Typography variant="body2" style={{ marginTop: "5%" }}>
                {product.descripcionLarga}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevantion={3} style={{ height: 500 }}>
              {token !== null && role === "ROLE_ADMIN" ? (
                <Grid container justify="flex-end">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/admin/products/" + idproduct);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <DeleteIcon
                    onClick={e => handleDeleteProduct(e, idproduct)}
                    style={{ cursor: "pointer" }}
                  />
                </Grid>
              ) : null}
              <Grid container justify="center">
                <Typography variant="h4" align="center" style={{ padding: 20 }}>
                  {product.nombre}
                </Typography>
              </Grid>
              <Grid container>
                <Box component="fieldset" borderColor="transparent">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    readOnly
                    style={{ marginLeft: 30 }}
                  />
                </Box>
                <Tooltip title={"Añadir comentario"}>
                  <AddCommentIcon
                    style={{ cursor: "pointer", marginLeft: "82%" }}
                    onClick={handleClickOpen}
                  />
                </Tooltip>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{ marginLeft: "6%" }}
              >
                <Typography
                  variant="h5"
                  style={{ color: "gray", fontStyle: "italic" }}
                >
                  {product.precioOferta !== 0 ? (
                    <del>$ {product.precioOferta}</del>
                  ) : null}
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{ marginLeft: "4%" }}
              >
                <Typography
                  variant="h4"
                  style={{ marginBottom: 20, fontStyle: "italic" }}
                >
                  ${product.precio}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginBottom: 20, fontStyle: "italic" }}
                >
                  {product.moneda}
                </Typography>
              </Grid>
              <Grid
                container
                style={{ marginBottom: "8%" }}
                spacing={4}
                justify="center"
              >
                <Grid item xs={5}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    fullWidth
                  >
                    {product.atributos.map((atrib) => (
                      <MenuItem key={atrib.color} value={atrib.color}>
                        {atrib.color}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={5}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    fullWidth
                  >
                    {disabled ? (
                      <MenuItem value="">Primero elija un color</MenuItem>
                    ) : (
                      product.atributos
                        .filter((atrib) => atrib.color === color)
                        .map((atrib) => (
                          <MenuItem key={atrib.talle} value={atrib.talle}>
                            {atrib.talle}
                          </MenuItem>
                        ))
                    )}
                  </Select>
                </Grid>
              </Grid>
              <Grid container justify="center" spacing={4}>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ padding: 10, width: "80%", marginBottom: 10 }}
                  onClick={(e) => handleClickCarrito("buy")}
                >
                  Comprar
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={{ padding: 10, width: "80%" }}
                  onClick={(e) => handleClickCarrito("cart")}
                >
                  Agregar al carrito
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={5} justify="center">
          <div className="card-group">
            {relationalsProduct.map((prod, index) => (
              <Grid item xs={4} key={prod.idProducto} style={{ margin: 30 }}>
                <MediaCard key={prod.idProducto} prod={prod} />
              </Grid>
            ))}
          </div>
        </Grid>
        {product.valoraciones.length > 0 && (
          <Comments
            listComments={product.valoraciones}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
            idproduct={idproduct}
          />
        )}
        {product.valoraciones.length > 0 && (
          <Comments
            listComments={product.valoraciones}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
            idproduct={idproduct}
          />
        )}
      </Container>
    </>
  ) : (
    <div style={{ padding: "200px" }}>
      <Spinner />
    </div>
  );
};
