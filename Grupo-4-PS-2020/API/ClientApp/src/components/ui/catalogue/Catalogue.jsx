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
  const [visual, setvisual] = useState("tiles");

  const listaproductos = [
    { id: 1, name: "Botines1" },
    { id: 2, name: "Botines2" },
    { id: 3, name: "Botines3" },
    { id: 4, name: "Botines4" },
    { id: 5, name: "Botines5" },
  ];

  const listacategorias = [
    {id: 1, name: "Categoria1" },
    {id: 2, name: "Categoria2" },
    {id: 3, name: "Categoria3" },
    {id: 4, name: "Categoria4" }
  ]

  return (
    <div className="contenedor">
      <Container maxWidth={"lg"} className="tilescolumn">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Search />
            <Sidebar 
              visual={visual} 
              setvisual={setvisual} 
              listacategorias={listacategorias}
            />
          </Grid>
          {visual === "tiles" ? (
            <Grid item xs={9}>
              {listaproductos.map((prod, index) => (
                <Tile key={prod.id} prod={prod} />
              ))}
            </Grid>
          ) : (
            <Fragment>
              <Grid item xs={9}>
                <div class="card-group">
                  {listaproductos.map((prod, index) => (
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
