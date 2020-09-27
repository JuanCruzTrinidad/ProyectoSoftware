import {
	ButtonBase,
	Container,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";

import React from "react";
import Tile from "./Tile";
import "./catalogue.css";
import Sidebar from "./Sidebar";

const Catalogue = () => {

	return (
		<Container maxWidth={"md"}>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Sidebar />
				</Grid>
				<Grid item xs={9}>
          <Tile />
				</Grid>
			</Grid>
		</Container>
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
