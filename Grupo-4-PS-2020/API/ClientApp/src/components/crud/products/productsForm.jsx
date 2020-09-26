import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import StepWizard from 'react-step-wizard';
import { First } from './First';
import NavWizard from './NavWizard';
import { Second } from './Second';
import styles from './wizard.less';

export const ProductsForm = () => {

    const onChangeStep = (e) =>{console.log(e)};

    const [state, updateState] = useState({
        form: {},
    });
    const setInstance = SW => updateState({
        ...state,
        SW,
    });

    const [product, setProduct] = useState({
        name: '',
        largeDescription:'',
        shortDescription:'',
        category: 0,
        subcategory: 0,
        urlImage: '',
        urlVideo: '',
        money: '',
        price: 0
    })

    useEffect(() => {
        console.log(product);
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

                    <Second />

                </StepWizard>
            </Grid>
        </Container>
    )
}
