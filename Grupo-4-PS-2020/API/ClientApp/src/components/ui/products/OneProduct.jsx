import {
  Breadcrumbs,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  MenuItem,
  Portal,
  Select,
  TextField,
  Tooltip,
} from "@material-ui/core";
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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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

  //States
  const [activeStep, setActiveStep] = useState(0);
  const [product, setproduct] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(2);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [comment, setComment] = useState({
    title: "",
    comment: "",
    rating: 0,
  });
  const [listComments, setListComments] = useState([]);
  const [show, setshow] = useState(false);
  const [disabled, setdisabled] = useState(true); //Disabled select del talle
  const [relationalsProduct, setrelationalsProduct] = useState([])

  //Parametro que llega desde la url
  let { idproduct } = useParams();

  const getProductById = (idprod) => {
    apiAxios
      .get("/product/ProductId", {
        params: { idProducto: idprod },
      })
      .then(({ data }) => {
        setproduct(data);
        console.log(data);
        setshow(true);
        getProductsBySubcategoryAPI(data.subcategory.idSubcategory)
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
        setrelationalsProduct(data.slice(0, 3))
    })
    .catch((error) => console.log(error));
  }

  const imagesCard = [
    {
      label: product.nombre,
      imgPath: product.imagen,
    },
    {
      label: product.nombre,
      imgPath: product.imagen,
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

  const handleSubmit = () => {
    let variable = [];
    variable = listComments;
    variable.push(comment);
    setListComments(variable);
    handleClose();
    setComment({});
  };

  const handleClickCarrito = () => {
    if (color === "" || size === "") {
      alert("Los espacios de color y talle no deben quedar vacios");
    } else {
      var cartlocalstorage = localStorage.getItem("cart");
      product.atributoselecc = product.atributos.filter(
        (atrib) => atrib.color === color && atrib.talle === size
      );
      product.cant = 1;
      if (cartlocalstorage === null || cartlocalstorage === []) {
        localStorage.setItem("cart", JSON.stringify([product]));
        alert("Producto agregado al carrito");
      } else {
        cartlocalstorage = JSON.parse(cartlocalstorage);
        cartlocalstorage.push(product);
        localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
        alert("Producto agregado al carrito");
      }
    }
  };

  const handleClickComprar = () => {
    if (color === "" || size === "") {
      alert("Los espacios de color y talle no deben quedar vacios");
    } else {
      var cartlocalstorage = localStorage.getItem("cart");
      product.color = color;
      product.talle = size;
      product.cant = 1;
      if (cartlocalstorage === null || cartlocalstorage === []) {
        localStorage.setItem("cart", JSON.stringify([product]));
        alert("Producto agregado al carrito");
      } else {
        cartlocalstorage = JSON.parse(cartlocalstorage);
        cartlocalstorage.push(product);
        localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
      }
      history.push("/cart");
    }
  };

  const handleDeleteProduct = (e) => {
      e.preventDefault();
      let token = localStorage.getItem("token");
      apiAxios.post("/product/deleteProduct", idproduct,{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
           Authorization: `${token}`,
        },
      })
  }

  useEffect(() => {
    if (color !== "") {
      setdisabled(false);
    }
  }, [color]);

  useEffect(() => {
    getProductById(idproduct)
  }, []);

  return show ? (
    <>
      <Container maxWidth="md" spacing={4} style={{ marginTop: "2%" }}>
        <Grid container justify="center" spacing={6}>
          <Grid item xs={6}>
            <Paper elevantion={3} style={{ padding: 20, height: 500 }}>
              <div className={classes.root}>
                <img
                  className={classes.img}
                  src={imagesCard[activeStep].imgPath}
                  alt={imagesCard[activeStep].label}
                />
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
            <Grid container justify="flex-end">
                  <EditIcon onClick={e =>{
                    e.preventDefault();
                    history.push('/admin/product/'+idproduct)
                  }}
                  style={{cursor: "pointer"}}/>
                  <DeleteIcon onClick={handleDeleteProduct}
                  style={{cursor: "pointer"}}/>
                </Grid>
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
                  $ {product.precio}
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
                  onClick={(e) => handleClickComprar()}
                >
                  Comprar
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={{ padding: 10, width: "80%" }}
                  onClick={(e) => handleClickCarrito()}
                >
                  Agregar al carrito
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={5}
          justify="center"
          style={{ marginTop: "2%" }}
        >
          <div className="card-group">
            {relationalsProduct.map((prod, index) => (
              <Grid item xs={4} key={prod.idProducto}>
                <MediaCard  key={prod.idProducto} prod={prod} style={{ margin: "2%" }} />
              </Grid>
            ))}
          </div>
        </Grid>
        <Grid container spacing={5} justify="center">
          {listComments.map((c) => {
            return (
              <Paper
                elevation={3}
                style={{
                  height: 150,
                  width: "78%",
                  marginTop: "4%",
                  padding: "2%",
                }}
              >
                <Grid container justify="flex-start">
                  <Box component="fieldset" borderColor="transparent">
                    <Rating
                      name="simple-controlled"
                      value={c.rating}
                      readOnly
                      size="small"
                    />
                  </Box>
                  <Tooltip title={"Añadir comentario"}>
                    <AddCommentIcon
                      style={{ cursor: "pointer", marginLeft: "82%" }}
                      onClick={handleClickOpen}
                    />
                  </Tooltip>
                </Grid>
                <Typography variant="h5" style={{ fontStyle: "oblique" }}>
                  {c.title}
                </Typography>
                <Typography variant="body2">{c.comment}</Typography>
              </Paper>
            );
          })}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Valoración</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Si gusta pueda añadir una valoración sobre este producto.
              </DialogContentText>
              <Grid container justify="center">
                <Box component="fieldset" borderColor="transparent">
                  <Rating
                    name="simple-controlled"
                    value={comment.rating}
                    onChange={(event, newValue) => {
                      console.log(newValue, event);
                      setComment({ ...comment, rating: newValue });
                    }}
                  />
                </Box>
              </Grid>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Título del comentario"
                value={comment.title}
                onChange={(e) =>
                  setComment({ ...comment, title: e.target.value })
                }
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Comentario"
                value={comment.comment}
                onChange={(e) =>
                  setComment({ ...comment, comment: e.target.value })
                }
                multiline
                rows={2}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Valorar
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Container>
    </>
  ) : (
    <div style={{ padding: "200px" }}>
      <Spinner />
    </div>
  );
};
