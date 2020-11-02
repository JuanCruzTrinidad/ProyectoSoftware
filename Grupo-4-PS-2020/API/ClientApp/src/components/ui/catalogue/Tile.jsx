import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import "./catalogue.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useHistory } from "react-router";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 8,
    marginLeft: 20,
    maxWidth: 900,
    maxHeight: 160,
  },
  image: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    width: 150,
    height: 160,
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Tile = ({ prod }) => {
  const history = useHistory();
  const classes = useStyles();
  const [price, setprice] = useState(0);
  const [priceOfert, setpriceOfert] = useState(0);

  const { idProducto, nombre, precio, precioOferta, imagen, moneda } = prod;

  const setPrice = () => {
    var multiple = 0;
    switch (moneda) {
      case "ARS":
        multiple = 1;
        break;
      case "BRL":
        multiple = 0.073;
        break;
      case "EUR":
        multiple = 0.011;
        break;
      case "USD":
        multiple = 0.0127665007;
        break;
      default:
        multiple = 1;
        break;
    }

    let newPrecio = precio * multiple;
    newPrecio = Math.round(newPrecio);
    let newprecioOferta = precioOferta * multiple;
    newprecioOferta = Math.round(newprecioOferta);
    setprice(newPrecio);
    setpriceOfert(newprecioOferta);
  };

  useEffect(() => {
    setPrice();
  }, []);

  return (
    <Paper className={classes.paper}>
      <CardActionArea onClick={(e) => history.push(`/product/${idProducto}`)}>
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={nombre} src={imagen} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ paddingTop: "8px" }}
                >
                  {nombre}
                </Typography>
                {precioOferta === 0 ? (
                  <Fragment>
                    <div className="mb-4"></div>
                    <Typography variant="h5">$ {price}</Typography>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Typography variant="subtitle1" color="textSecondary">
                      <del>$ {priceOfert}</del>
                    </Typography>
                    <Typography variant="h5">$ {price}</Typography>
                  </Fragment>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Paper>
  );
};

export default Tile;
