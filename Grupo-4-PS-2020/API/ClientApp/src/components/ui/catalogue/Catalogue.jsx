import {
  ButtonBase,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import Tile from "./Tile";
import "./catalogue.css";
import Sidebar from "./Sidebar";
import MediaCard from "./Card";
import Search from "./Search";
import PaginationOutlined from "./PaginationOutlined";

const Catalogue = () => {
  //States
  const [visual, setvisual] = useState("cards");
  const [search, setsearch] = useState("");
  const [order, setorder] = useState("Default");

  const listaproductos = [
    { id: 1, name: "Botinesa1", price: 10.5 },
    { id: 2, name: "Botinesb2", price: 20.5 },
    { id: 3, name: "Botinesc3", price: 5.5 },
    { id: 4, name: "Botinesd4", price: 10 },
    { id: 5, name: "Botinese5", price: 30 },
  ];

  const listacategorias = [
    { id: 1, name: "Categoria1" },
    { id: 2, name: "Categoria2" },
    { id: 3, name: "Categoria3" },
    { id: 4, name: "Categoria4" },
  ];

  //Ordenar productos
  if (order === "Menor precio") {
    listaproductos.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (order === "Mayor precio") {
    listaproductos.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (order === "Nombre ascendente") {
    listaproductos.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "Nombre descendente") {
    listaproductos.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="contenedor">
      <Container maxWidth={"lg"} className="tilescolumn">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Search search={search} setsearch={setsearch} />
            <Sidebar
              visual={visual}
              setvisual={setvisual}
              listacategorias={listacategorias}
              order={order}
              setorder={setorder}
            />
          </Grid>
          {listaproductos.length === 0 ? (
            <p>No hay productos que coincidan con su busqueda, intente otra vez.</p>
          ) : visual === "tiles" ? (
            <Grid item xs={9}>
              {listaproductos.map((prod) => (
                <Tile key={prod.id} prod={prod} />
              ))}
            </Grid>
          ) : (
            <Fragment>
              <Grid item xs={9}>
                <div class="card-group">
                  {listaproductos.map((prod) => (
                    <MediaCard key={prod.id} prod={prod} />
                  ))}
                </div>
              </Grid>
            </Fragment>
          )}
        </Grid>
        <Grid container>
          <PaginationOutlined />
        </Grid>
      </Container>
    </div>
  );
};

export default Catalogue;
