import React, { Fragment } from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import ProductsDetail from "./Details/ProductsDetail";
import TotalDetail from "./Details/TotalDetail";

const Details = (props) => {
  const {
    postalcode,
    province,
    subtotalship,
    setsubtotalship,
    percentage,
    setpercentage,
    subtotalprod,
    setsubtotalprod,
    discountid,
    setdiscountid
  } = props;

  var cartlist = localStorage.getItem("cart");
  cartlist = JSON.parse(cartlist);
  return (
    <Fragment>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Detalle del total
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "center" }}
            className="pb-3"
          >
            Productos
          </Typography>
          <Grid item xs={9} style={{ marginLeft: "auto", marginRight: "auto" }}>
            {cartlist.length !== 0 ? (
              cartlist.map((prod, index) => (
                <ProductsDetail
                  key={index}
                  idProducto={prod.idProducto}
                  nombre={prod.nombre}
                  precio={prod.precio}
                  atributoselecc={prod.atributoselecc}
                  cant={prod.cant}
                  setsubtotalship={setsubtotalship}
                />
              ))
            ) : (
              <Typography variant="h6" align="center" gutterBottom>
                No hay productos en el carrito
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "center" }}
            className="pb-3"
          >
            Total
          </Typography>
          <Grid item xs={9} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <TotalDetail
              postalcode={postalcode}
              province={province}
              subtotalship={subtotalship}
              setsubtotalship={setsubtotalship}
              percentage={percentage}
              setpercentage={setpercentage}
              subtotalprod={subtotalprod}
              setsubtotalprod={setsubtotalprod}
              discountid={discountid}
              setdiscountid={setdiscountid}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
