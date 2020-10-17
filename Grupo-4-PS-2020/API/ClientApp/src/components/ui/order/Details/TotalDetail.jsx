import React, { Fragment, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import {
  ButtonBase,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const TotalDetail = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">Subtotal productos</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">$dsfas</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Subtotal envio</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">$dsfas</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">$dsfas</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TotalDetail;
