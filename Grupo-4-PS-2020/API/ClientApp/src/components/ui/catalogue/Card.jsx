import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
			maxWidth: 300,
			marginBottom: 10,
			marginLeft: 5,
    },
    media: {
      height: 140,
    },
  });
  
export default function MediaCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://http2.mlstatic.com/D_NQ_NP_2X_873920-MLA41133435494_032020-F.webp"
            title="Imagen producto"
          />
          <CardContent>
						<Typography gutterBottom variant="h5" component="h2">
            	$precio
          	</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             Nombre nombre nombre producto producto producto
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }