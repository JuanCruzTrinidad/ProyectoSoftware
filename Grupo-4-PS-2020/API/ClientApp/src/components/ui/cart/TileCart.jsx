import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useHistory } from "react-router";
import Quantity from "./Quantity";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingRight: "15px",
    marginTop: 5,
    marginLeft: 20,
    maxHeight: 150,
  },
  image: {
    marginLeft: theme.spacing(1),
    width: 150,
    height: 150,
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const TileCart = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const { idProducto, nombre, precio, precioOferta, imagen } = props;

  const handleClickDelete = () => {
    let cartlocalstorage = localStorage.getItem("cart");
    cartlocalstorage = JSON.parse(cartlocalstorage);

    cartlocalstorage = cartlocalstorage.filter(prod => prod.idProducto != idProducto);

    localStorage.setItem("cart", JSON.stringify(cartlocalstorage));
    window.location.reload();
  };

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt={nombre} src={imagen} />
          </ButtonBase>
        </Grid>
        <Grid xs={12} sm container direction="row">
          <Grid xs container direction="column" justify="center">
            <Typography
              variant="h4"
              style={{ cursor: "pointer" }}
              onClick={(e) => history.push(`/product/${idProducto}`)}
            >
              {nombre}
            </Typography>
          </Grid>
          <Grid
            xs={6}
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Quantity />
          </Grid>

          <Grid item>
            <div
              style={{ textAlign: "end", paddingBottom: "15px", color: "red" }}
            >
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={(e) => handleClickDelete()}
              />
            </div>
            {precioOferta === 0 ? (
              <Fragment>
                <div className="mb-4"></div>
                <Typography variant="h4">$ {precio}</Typography>
              </Fragment>
            ) : (
              <Fragment>
                <Typography color="textSecondary" style={{ textAlign: "end" }}>
                  <del>$ {precioOferta}</del>
                </Typography>
                <Typography variant="h4">$ {precio}</Typography>
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TileCart;
