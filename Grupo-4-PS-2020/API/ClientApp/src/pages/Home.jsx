import React, { useEffect, useState } from 'react'
import Slider from '../components/ui/SliderHome';
import { FeaturedProducts } from '../components/ui/FeaturedProducts';
import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { CarruoselCategorys } from '../components/ui/CarruoselCategorys';
import { apiAxios } from '../config/axios';

export const Home = ({ tokenJWT }) => {

    const [categoryList, setcategoryList] = useState([])
    const [categoryRandom, setcategoryRandom] = useState({})
    const [products, setproducts] = useState([])

    const getCategoriesAPI = () => {
        apiAxios
            .get("/category/allcategories")
            .then(({ data }) => {
                setcategoryList(data);
                console.log(data);
                let i = Math.floor(Math.random() * (data.length));
                console.log(data[i])
                setcategoryRandom(data[i]);
                getProductsByCategoryAPI(data[i].idCategory);
            })
            .catch((error) => console.log(error));
    };

    const getProductsByCategoryAPI = (catid) => {
        apiAxios
        .get("/product/productByCategory", {
          params: { idCategory: catid },
        })
        .then(({ data }) => {
          setproducts(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
      }
    useEffect(() => {
        getCategoriesAPI();
    }, [])
    return (
        <>
            <Container maxWidth="md" style={{ marginTop: 10 }}>
                <Grid container justify="center" alignContent="center" alignItems="center" spacing={4}>
                    <Grid item xs={12}>
                        <Slider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Productos en Oferta</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <FeaturedProducts />
                    </Grid>
                    {
                        categoryRandom && (
                            <>
                                <Grid item xs={12}>
                                    <Typography variant="h3">Productos Destacados - {categoryRandom.name}</Typography>
                                    <Divider />
                                </Grid>
                                <Grid item xs={12}>
                                    <FeaturedProducts products={products} custom />
                                </Grid>
                            </>
                        )
                    }
                    <Grid item xs={12}>
                        <Typography variant="h3">Categorias</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <CarruoselCategorys />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
