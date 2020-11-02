import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";
import Axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 280,
    marginBottom: 10,
    marginLeft: 15,
    height: "auto",
    display:"block"
  },
  img: {
    maxWidth: "80%",
    height: 220,
    padding: 10,
    margin: 5,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
}
});

export default function MediaCard({ prod }) {
  const classes = useStyles();
  const history = useHistory();
  const [price, setprice] = useState(0)
  const [priceOfert, setpriceOfert] = useState(0)

  const { idProducto, nombre, precio, precioOferta, imagen, moneda } = prod;

  const setPrice = () => {

    var multiple = 0;
    switch(moneda){
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

    let newPrecio = precio * multiple
    newPrecio = Math.round(newPrecio)
    let newprecioOferta = precioOferta * multiple
    newprecioOferta = Math.round(newprecioOferta)
    setprice(newPrecio);
    setpriceOfert(newprecioOferta);
  }

  useEffect(() => {
    setPrice();
  }, [])
 
  return (
    <Card className={classes.root} >
      <CardActionArea onClick={(e) => history.push(`/product/${idProducto}`)}>
        <CardMedia className={classes.img} image={imagen} title={nombre} />
        <CardContent>
          {precioOferta === 0 ? (
            <Fragment>
              <div className="mb-4"></div>
              <Typography gutterBottom variant="h5" component="h2">
                $ {price}
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              <Typography color="textSecondary">
                <del>$ {priceOfert}</del>
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                $ {price}
              </Typography>
            </Fragment>
          )}
          <Typography variant="body1" color="textSecondary">
            {nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
