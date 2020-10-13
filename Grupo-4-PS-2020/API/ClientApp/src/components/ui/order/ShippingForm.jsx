import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
  },
}));

export default function ShippingForm() {
  const classes = useStyles();

  const [street, setstreet] = useState("");
  const [number, setnumber] = useState("");
  const [floor, setfloor] = useState("");
  const [dep, setdep] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [locality, setlocality] = useState("");
  const [province, setprovince] = useState("");

  return (
    <Fragment>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Domicilio de entrega
      </Typography>
      <form className={classes.root} noValidate autoComplete="off" style={{textAlign: "center"}}>
        <div>
          <TextField
            required
            id="standard-required"
            label="Calle"
            value={street}
            onChange={(e) => setstreet(e.target.value)}
            style={{ width: "32ch" }}
          />
          <TextField
            required
            id="standard-required"
            label="Numero"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
            style={{ width: "15ch" }}
          />
          <TextField
            id="standard-required"
            label="Piso"
            value={floor}
            onChange={(e) => setfloor(e.target.value)}
            style={{ width: "15ch" }}
          />
          <TextField
            id="standard-required"
            label="Departamento"
            value={dep}
            onChange={(e) => setdep(e.target.value)}
            style={{ width: "15ch" }}
          />
          <TextField
            required
            id="standard-required"
            label="Codigo Postal"
            value={postalcode}
            onChange={(e) => setpostalcode(e.target.value)}
            style={{ width: "15ch" }}
          />
          <TextField
            required
            id="standard-required"
            label="Localidad"
            value={locality}
            onChange={(e) => setlocality(e.target.value)}
            style={{ width: "32ch" }}
          />
          <TextField
            required
            id="standard-required"
            label="Provincia"
            value={province}
            onChange={(e) => setprovince(e.target.value)}
            style={{ width: "32ch" }}
          />
        </div>
      </form>
    </Fragment>
  );
}
