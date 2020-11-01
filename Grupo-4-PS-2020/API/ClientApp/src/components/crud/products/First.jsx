import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Grid,
  makeStyles,
  MobileStepper,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { apiAxios } from "../../../config/axios";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export const First = ({ nextStep, product, setProduct }) => {
  const images = [
    {
      label: "",
      imgPath: product.urlImage,
    },
    {
      label: "",
      imgPath: product.urlVideo,
    },
  ];
  const currencies = [
    {
      value: "ARS",
      label: "ARS",
    },
    {
      value: "BRL",
      label: "BRL",
    },
    {
      value: "EUR",
      label: "EUR",
    },
    {
      value: "USD",
      label: "USD",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [categorieslist, setcategorieslist] = useState([]);
  const [subCategorieslist, setSubCategorieslist] = useState([]);
  const theme = useTheme();
  const maxSteps = images.length;

  useEffect(() => {
    getCategoriesAPI();
  }, []);
  useEffect(() => {
    getSubCategoriesAPI(product.category);
  }, [product.category]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getCategoriesAPI = () => {
    apiAxios
      .get("/category/allcategories", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        setcategorieslist(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const getSubCategoriesAPI = (idCategory) => {
    console.log(idCategory);
    apiAxios
      .get(`/subcategory/subcategoryByCategory?idCategory=${idCategory}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        setSubCategorieslist(data);
      })
      .catch((error) => console.log(error));
  };

  const useStyles = makeStyles({
    root: {
      minWidth: 400,
      minHeight: 450,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    img: {
      maxHeight: 250,
      maxWidth: 400,
      overflow: "hidden",
      display: "block",
    },
  });

  const classes = useStyles();

  return (
    <Container maxwidht="md" spacing={5}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <h3>Nuevo producto</h3>
              <form>
                <Grid container alignContent="center">
                  <TextField
                    id="name"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                    label="Nombre"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>
                <Grid container alignContent="center">
                  <TextField
                    id="shortDescription"
                    label="Descripción corta"
                    value={product.shortDescription}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        shortDescription: e.target.value,
                      })
                    }
                    multiline
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>
                <Grid container alignContent="center">
                  <TextField
                    id="largeDescription"
                    label="Descripción Larga"
                    value={product.largeDescription}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        largeDescription: e.target.value,
                      })
                    }
                    multiline
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>
                <Grid container alignContent="center" spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      id="category"
                      select
                      label="Categoría"
                      fullWidth
                      value={product.category}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          category: parseInt(e.target.value, 10),
                        })
                      }
                      SelectProps={{
                        native: true,
                      }}
                      variant="outlined"
                      margin="dense"
                    >
                      <option
                        key={"categoryNull"}
                        value="categoryNull"
                      ></option>
                      {categorieslist.map((option) => (
                        <option
                          key={option.idCategory}
                          value={option.idCategory}
                        >
                          {option.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      label="SubCategoría"
                      fullWidth
                      value={product.subcategory}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          subcategory: parseInt(e.target.value, 10),
                        })
                      }
                      SelectProps={{
                        native: true,
                      }}
                      variant="outlined"
                      margin="dense"
                    >
                      <option
                        key={"subcategoryNull"}
                        value="subcategoryNull"
                      ></option>
                      {subCategorieslist.map((option) => (
                        <option
                          key={option.idSubcategory}
                          value={option.idSubcategory}
                        >
                          {option.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <Grid container alignContent="center" spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      id="urlImage"
                      label="Url Imagen"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      value={product.urlImage}
                      onChange={(e) =>
                        setProduct({ ...product, urlImage: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="urlVideo"
                      label="Url Video"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      value={product.urlVideo}
                      onChange={(e) =>
                        setProduct({ ...product, urlVideo: e.target.value })
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container alignContent="center" spacing={3}>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      label="Moneda"
                      fullWidth
                      value={product.money}
                      onChange={(e) =>
                        setProduct({ ...product, money: e.target.value })
                      }
                      SelectProps={{
                        native: true,
                      }}
                      variant="outlined"
                      margin="dense"
                    >
                      {currencies.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="price"
                      label="Precio"
                      variant="outlined"
                      margin="dense"
                      type="number"
                      fullWidth
                      value={product.price}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          price: parseInt(e.target.value, 10),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="ofert"
                      label="Oferta"
                      variant="outlined"
                      margin="dense"
                      type="number"
                      fullWidth
                      value={product.ofert}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          ofert: parseInt(e.target.value, 10),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Checkbox
                      checked={product.visibility}
                      onChange={(e) =>
                        setProduct({ ...product, visibility: e.target.checked })
                      }
                      icon={<VisibilityOffIcon />}
                      checkedIcon={<VisibilityIcon />}
                      color="primary"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography style={{ marginTop: 10 }} align="center">
                      {" "}
                      Visible{" "}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignContent="center" spacing={3}>
                  <Grid item xs={6}>
                    <Button variant="outlined" color="secondary">
                      Cancelar
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(e) => nextStep()}
                    >
                      Continuar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container spacing={3}>
                <Breadcrumbs aria-label="breadcrumb">
                  {categorieslist.map((x) => {
                    if (x.idCategory === product.category) {
                      return (
                        <Typography color="textPrimary">{x.name}</Typography>
                      );
                    }
                  })}
                  {subCategorieslist.map((x) => {
                    if (x.idSubcategory === product.subcategory) {
                      return (
                        <Typography color="textPrimary">{x.name}</Typography>
                      );
                    }
                  })}
                  <Typography color="textPrimary">{product.name}</Typography>
                </Breadcrumbs>
              </Grid>
              <Grid
                container
                spacing={3}
                style={{ marginTop: 20 }}
                justify="center"
              >
                {activeStep === 0 ? (
                  <img
                    className={classes.img}
                    src={images[0].imgPath}
                    alt={images[0].label}
                  />
                ) : (
                  <iframe
                    width="400"
                    height="250"
                    marginTop="20"
                    src={images[1].imgPath}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}
                {product.urlImage !== "" ? (
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
                ) : (
                  <></>
                )}
              </Grid>
              <Grid container spacing={3}>
                <Typography variant="body2" gutterBottom>
                  {product.largeDescription}
                </Typography>
              </Grid>
              <Grid container spacing={3} justify="flex-end">
                {product.price !== 0 && (
                  <Typography variant="h4" gutterBottom>
                    ${product.price}
                  </Typography>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
