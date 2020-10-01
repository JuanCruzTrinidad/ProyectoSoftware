import {
  ButtonBase,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import React, {Fragment, useState} from "react";
import Tile from "./Tile";
import "./catalogue.css";
import Sidebar from "./Sidebar";
import MediaCard from "./Card";
import Search from "./Search";

const Catalogue = () => {

  const [visual, setvisual] = useState('cards');

  return (
    <div className="contenedor">
      <Container maxWidth={"lg"} className="tilescolumn">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Search />
            <Sidebar
              visual={visual}
              setvisual={setvisual}
            />
          </Grid>
          {visual === "tiles" ?
            <Grid item xs={9}>
              <Tile />
              <Tile />
              <Tile />
            </Grid> 
          :
            <Fragment >
              <Grid item xs={9}>
            <div class="card-group">
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </div>
            </Grid>
            </Fragment>
          }
        </Grid>
      </Container>
    </div>
  );
};

{
  /* <div className="container">
<div className="row">
  <Container maxwidht="md">
    <Grid container xs={"md"}>
      <Grid item xs={2}>
        <Card />
        <CardContent />
      </Grid>
    </Grid>
  </Container>
  <div className="col-md-8">
    <Tile />
  </div>
</div>
</div> */
}

export default Catalogue;
