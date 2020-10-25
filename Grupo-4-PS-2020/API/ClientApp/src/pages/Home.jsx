import React from 'react'
import Slider from '../components/ui/SliderHome';
import { FeaturedProducts } from '../components/ui/FeaturedProducts';
import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { CarruoselCategorys } from '../components/ui/CarruoselCategorys';

export const Home = ({tokenJWT}) => {

    return (
        <>
        <Container maxWidth="md" style={{marginTop: 10}}>
            <Grid container justify="center" alignContent="center" alignItems="center" spacing={4}>
                <Grid item xs={12}> 
                    <Slider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">Productos Destacados</Typography>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <FeaturedProducts/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">Categorias</Typography>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <CarruoselCategorys />
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
