import React, { Fragment, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Provinces from '../../../helpers/Provinces.json';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
  },
}));

export default function ShippingForm(props) {
  const classes = useStyles();

  const [localityslist, setlocalityslist] = useState([]);

  const {
    street,
    setstreet,
    number,
    setnumber,
    floor,
    setfloor,
    dep,
    setdep,
    postalcode,
    setpostalcode,
    locality,
    setlocality,
    province,
    setprovince,
    error,
  } = props;

  const localitysAPI = async (province) => {
    const url = `https://apis.datos.gob.ar/georef/api/localidades?provincia=${province}&campos=nombre&max=1500&orden=nombre`;

    let response = await fetch(url);
    let data = await response.json();
    return data;
  };


  useEffect(() => {
    if (province !== "") {
      localitysAPI(province).then((data) => setlocalityslist(data.localidades));
    }
  }, [province]);

  return (
    <Fragment>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Domicilio de entrega
      </Typography>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ textAlign: "center" }}
      >
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
            id="standard-select-currency"
            required
            select
            label="Provincia"
            value={province}
            onChange={(e) => setprovince(e.target.value)}
            style={{ width: "32ch" }}
          >
            {Provinces.provinces.map((prov) => (
              <MenuItem key={prov.id} value={prov.nombre}>
                {prov.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-currency"
            required
            select
            label="Localidad"
            value={locality}
            onChange={(e) => setlocality(e.target.value)}
            style={{ width: "32ch" }}
          >
            {localityslist.map((loc) => (
              <MenuItem key={loc.id} value={loc.nombre}>
                {loc.nombre}
              </MenuItem>
            ))}
          </TextField>
        </div>
        {error ? (
          <Typography variant="subtitle1" color="error" gutterBottom>
            Por favor, complete todos los campos obligatorios para continuar
          </Typography>
        ) : null}
      </form>
    </Fragment>
  );
}
