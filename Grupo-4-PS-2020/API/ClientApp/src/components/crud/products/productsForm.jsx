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

    const createProductAPI = (newProduct) => {
        apiAxios
          .post("/product/createProduct", newProduct, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
              "Access-Control-Allow-Headers":
                "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
              "Content-Type": "application/json",
            //   Authorization: `${token}`,
            },
          })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((error) => console.log(error));
      };

    const handleSubmit = () => {
        createProductAPI(product);
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
        atributes: []
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
