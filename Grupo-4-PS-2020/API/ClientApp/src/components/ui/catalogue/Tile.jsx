import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ButtonBase,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import "./catalogue.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 5,
    marginLeft: 20,
    maxWidth: 900,
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Tile = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt="Imagen producto"
              src="https://material-ui.com/static/images/grid/complex.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                Nombre producto
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <del>$21.50</del>
              </Typography>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

    // <div className="card mb-1">
    // 	<div className="row">
    // 		<div className="col-md-3 ml-3">
    // 			<img
    // 				src="https://dexter.vteximg.com.br/arquivos/ids/485866-1000-1000/ADF34384_1.jpg?v=637018356491800000"
    // 				className="img-fluid align-content-center"
    // 			/>
    // 		</div>
    // 		<div className="col-md-8 p-4">
    // 			<h4 className="card-title">Titulardo super ultra super titulardo</h4>
    // 			<p className="card-text">
    // 				<del>Precio oferta</del>
    // 			</p>
    // 			<p className="card-text">Precio</p>
    // 		</div>
    // 	</div>
    // </div>
  );
};

export default Tile;
