import { Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import StepWizard from "react-step-wizard";
import { apiAxios } from "../../../config/axios";
import { First } from "./First";
import NavWizard from "./NavWizard";
import { Second } from "./Second";

export const ProductsForm = () => {
  let { id } = useParams();
  const history = useHistory();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (token === null || role !== "ROLE_ADMIN") {
    history.push("/");
  }

  const [state, updateState] = useState({
    form: {},
    currentStep: 0,
  });

  const { SW, demo } = state;

  const [product, setProduct] = useState({
    id: 0,
    name: "",
    largeDescription: "",
    shortDescription: "",
    category: 0,
    subcategory: 0,
    urlImage: "",
    urlVideo: "",
    money: "",
    price: 0,
    ofert: 0,
    atributes: [],
    visibility: true,
  });
  const [atributes, setatributes] = useState([]);
  useEffect(() => {}, [product.id]);

  useEffect(() => {
    if (id !== undefined) {
      getProductById(id);
    }
  }, [id]);

  const onChangeStep = (e) => {
    updateState({ ...state, currentStep: e.currentStep });
  };
  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });

  const getProductById = (id) => {
    apiAxios
      .get("/product/ProductId", {
        params: { idProducto: id },
      })
      .then(({ data }) => {
        let multiple = 0
        switch(data.moneda){
          case 'ARS': multiple = 78.33;
          break;
          case 'BRL': multiple = 5.74;
          break;
          case 'EUR': multiple = 0.8547;
          break;
          case 'USD': multiple = 1;
          break;
          default: multiple = 78.33;
          break;
      }  

      let newPrecio = data.precio * multiple;
      newPrecio = newPrecio.toFixed(4);
      let newprecioOferta = data.precioOferta * multiple;
      newprecioOferta = newprecioOferta.toFixed(4);

        setProduct({
          ...product,
          id: data.idProducto,
          name: data.nombre,
          largeDescription: data.descripcionLarga,
          shortDescription: data.descripcionCorta,
          urlImage: data.imagen,
          urlVideo: data.video,
          visibility: data.visible,
          price: newPrecio,
          ofert: newprecioOferta,
          // price: data.precio,
          // ofert: data.precioOferta,
          category: data.subcategory.category.idCategory,
          subcategory: data.subcategory.idSubcategory,
          money: data.moneda,
        });
        let variable = [];
        data.atributos.map((d) =>
          variable.push({
            sku: d.sku,
            color: d.color,
            size: d.talle,
            weight: d.peso,
            count: d.cantidad,
            heigth: d.alto,
            width: d.ancho,
            depth: d.profundidad,
          })
        );
        setatributes(variable);
        console.log(variable);
      })
      .catch((error) => console.log(error));
  };

  const handleUploadExcel = (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    let formData = new FormData();
    var file = event.target.files[0];
    formData.append("file", file);
    apiAxios.post("/product/import-excel", formData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        "Access-Control-Allow-Headers":
          "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
    });
  };

  const createProductAPI = (createProduct, actionProdut) => {
    apiAxios
      .post(`/product/${actionProdut}`, createProduct, {
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
        let atributoslist = [];
        let atributosUpdate = [];
        atributes.map((a) => {
          if (a.sku === 0) {
            atributoslist.push({
              sku: 0,
              talle: a.size,
              color: a.color,
              cantidad: a.count,
              peso: a.weight,
              ancho: a.width,
              alto: a.heigth,
              profundidad: a.depth,
              producto: {
                idProducto: data.idProducto,
              },
            });
          } else {
            atributosUpdate.push({
              sku: a.sku,
              talle: a.size,
              color: a.color,
              cantidad: a.count,
              peso: a.weight,
              ancho: a.width,
              alto: a.heigth,
              profundidad: a.depth,
              producto: {
                idProducto: data.idProducto,
              },
            });
          }
        });
        apiAxios.post("/attribute/createAttribute", atributoslist, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            "Access-Control-Allow-Headers":
              "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        apiAxios.post("/attribute/updateAttribute", atributosUpdate, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            "Access-Control-Allow-Headers":
              "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    var newPrice = 0;
    var newOfert = 0;
    var divider = 0;
    switch (product.money) {
      case "ARS":
        divider = 0.0127665007;
        break;
      case "BRL":
        divider = 0.17421602787;
        break;
      case "EUR":
        divider = 1.17;
        break;
      case "USD":
        divider = 1;
        break;
      default:
        divider = 1;
        break;
    }
    let priceOld = product.price;
    let ofertOld = product.ofert;
    newPrice = priceOld * divider;
    newOfert = ofertOld * divider;
    newPrice = newPrice.toFixed(4);
    newOfert = newOfert.toFixed(4);
    setProduct({ ...product, price: newPrice, ofert: newOfert });

    let createProduct = {
      idProducto: product.id,
      nombre: product.name,
      descripcionCorta: product.shortDescription,
      descripcionLarga: product.largeDescription,
      visible: product.visibility,
      precio: newPrice,
      precioOferta: newOfert,
      imagen: product.urlImage,
      video: product.urlVideo,
      moneda: product.money,
      subcategory: {
        idSubcategory: product.subcategory,
      },
    };
    console.log(createProduct);
    if (product.id > 0) {
      createProductAPI(createProduct, "updateProduct");
    } else {
      createProductAPI(createProduct, "createProduct");
    }

    history.replace("/");
  };

  return (
    <Container maxWidth="md" fixed>
      <Grid container>
        <StepWizard
          onStepChange={onChangeStep}
          nav={<NavWizard />}
          instance={setInstance}
        >
          <First
            product={product}
            setProduct={setProduct}
            key={`${product.id}`}
          />
          <Second
            atributes={atributes}
            setatributes={setatributes}
            handleSubmit={handleSubmit}
            product={product}
          />
        </StepWizard>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            style={{ width: 800, heigth: 200, margin: 30, padding: 20 }}
          >
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={3}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="subir-excel"
                  accept="*"
                  onChange={(e) => handleUploadExcel(e)}
                />
                <label htmlFor="subir-excel">
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    component="span"
                  >
                    Subir desde Excel
                  </Button>
                </label>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
