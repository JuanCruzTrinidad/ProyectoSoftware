import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginBottom: 1,
  },
}));

const ProductsDetail = (props) => {
  const { idProducto, nombre, precio, atributoselecc, cant} = props;

  const history = useHistory();
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={9} className="pl-1">
          <Typography
            variant="subtitle1"
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={(e) => history.push(`/product/${idProducto}`)}
          >
            {nombre}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            SKU: {atributoselecc[0].sku} - Talle: {atributoselecc[0].talle} -
            Color: {atributoselecc[0].color}
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="subtitle1" className="pl-2">
            $ {precio} x {cant}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductsDetail;
