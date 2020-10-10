import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import StepWizard from 'react-step-wizard';
import { apiAxios } from '../../../config/axios';
import { First } from './First';
import NavWizard from './NavWizard';
import { Second } from './Second';
import { Third } from './Third';
import styles from './wizard.less';

export const ProductsForm = () => {

    const onChangeStep = (e) =>{
        updateState({...state, currentStep: e.currentStep})
    };
    const [state, updateState] = useState({
        form: {},
        currentStep: 0
    });
    const setInstance = SW => updateState({
        ...state,
        SW,
    });
    const token = localStorage.getItem("token");
    
    const createProductAPI = (createProduct) => {
        apiAxios
          .post("/product/createProduct", createProduct, {
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
            atributes.map(a =>  atributoslist.push({
                sku: 0,
                talle: a.size,
                color: a.color,
                cantidad: a.count,
                peso: a.weight,
                ancho: a.width,
                alto: a.heigth,
                profundidad: a.depth,
                producto: {
                    idProducto: data.idProducto
                }
            }));
            apiAxios.post("/attribute/createAttribute", atributoslist ,{
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
                  "Access-Control-Allow-Headers":
                    "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
                  "Content-Type": "application/json",
                   Authorization: `${token}`,
                },
              })
          })
          .catch((error) => console.log(error));
      };

    const handleSubmit = () => {
        setProduct({...product, atributes: atributes})
        console.log(product)
        let createProduct = {
            idProducto: product.id,
            nombre: product.name,
            descripcionCorta: product.shortDescription,
            descripcionLarga: product.largeDescription,
            visible: product.visibility,
            precio: product.price,
            precioOferta: product.price,
            imagen: product.urlImage,
            video: product.urlVideo,
            subcategory:{
                idSubcategory:product.subcategory
            }
        }
        createProductAPI(createProduct);
    };

    const [product, setProduct] = useState({
        id: 0,
        name: '',
        largeDescription:'',
        shortDescription:'',
        category: 0,
        subcategory: 0,
        urlImage: '',
        urlVideo: '',
        money: '',
        price: 0,
        atributes: [],
        visibility: true
    })

    const [atributes, setatributes] = useState([])

    useEffect(() => {
    }, [product])

    const { SW, demo } = state;

    return (
        <Container maxWidth="md" fixed>
            <Grid container>
                <StepWizard
                    onStepChange={onChangeStep}
                    nav={<NavWizard />}
                    instance={setInstance}>

                    <First product={product} setProduct={setProduct}/>
                    <Second atributes={atributes} setatributes={setatributes} handleSubmit={handleSubmit}/>
                    {/* <Third atributes={atributes}  product={product} currentStep={state.currentStep}/>                 */}
                </StepWizard>
            </Grid>
        </Container>
    )
}
