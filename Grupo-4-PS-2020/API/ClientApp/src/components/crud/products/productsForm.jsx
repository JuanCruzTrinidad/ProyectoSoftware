import { Container, Grid } from "@material-ui/core";
import Axios from "axios";
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
        console.log(data);
        setProduct({
          ...product,
          id: data.idProducto,
          name: data.nombre,
          largeDescription: data.descripcionLarga,
          shortDescription: data.descripcionCorta,
          urlImage: data.imagen,
          urlVideo: data.video,
          visibility: data.visible,
          price: data.precio,
          ofert: data.precioOferta,
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
    Axios.get(
      "https://api.currencyfreaks.com/latest?apikey=3d7f042396b94479be9821c08c21da3a&symbols=ARS,BRL,EUR,USD"
    )
      .then((response) => {
        var values = Object.values(response.data.rates);
        var divider = 0;
        switch (product.money) {
          case "ARS":
            divider = parseFloat(values[0], 10);
            break;
          case "BRL":
            divider = parseFloat(values[1], 10);
            break;
          case "EUR":
            divider = parseFloat(values[2], 10);
            break;
          case "USD":
            divider = parseFloat(values[3], 10);
            break;
          default:
            divider = parseFloat(values[3], 10);
            break;
        }
        let priceOld = product.price;
        let ofertOld = product.ofert;
        newPrice = priceOld / divider;
        newOfert = ofertOld / divider;
        newPrice = Math.round(newPrice);
        newOfert = Math.round(newOfert);
        debugger;
        setProduct({ ...product, price: newPrice, ofert: newOfert });
      })
      .finally(() => {
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
      });

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
      </Grid>
    </Container>
  );
};
