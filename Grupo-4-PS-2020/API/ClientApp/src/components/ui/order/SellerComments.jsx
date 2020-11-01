import { Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

export const SellerComments = (props) => {
  const { comment, setcomment } = props;

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: "center", paddingBottom: "2%" }}
      >
        Comentario al vendedor
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Escriba aquí"
            multiline
            value={comment}
            rows={5}
            variant="outlined"
            onChange={(e) => setcomment(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid
          container
          alignContent="flex-end"
          justify="flex-end"
          alignItems="flex-end"
        ></Grid>
      </Grid>
    </>
  );
};
