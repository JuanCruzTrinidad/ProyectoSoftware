import { Breadcrumbs, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, MenuItem, Select, TextField, Tooltip } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AddCommentIcon from '@material-ui/icons/AddComment';
import MediaCard from '../catalogue/Card';


const imagesCard = [
    {
        label: 'Remera',
        imgPath:
            'https://http2.mlstatic.com/D_NQ_NP_835776-MLA43129713174_082020-O.webp',
    },
    {
        label: 'Remera boquita',
        imgPath:
            'https://http2.mlstatic.com/D_NQ_NP_835776-MLA43129713174_082020-O.webp',
    }
];

const listaproductos = [
    { id: 1, name: "Botines1" },
    { id: 2, name: "Botines2" },
    { id: 3, name: "Botines3" }
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 600,
        overflow: 'hidden',
        width: 'auto',
        margin: 'auto'
    },
}));

export const OneProduct = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = imagesCard.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () =>{
        let variable = [];
        variable = listComments;
        variable.push(comment);
        setListComments(variable);
        handleClose();
        setComment({});
    }

    const [value, setValue] = React.useState(2);

    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [comment, setComment] = useState({
        title: '',
        comment: '',
        rating: 0
    })
    const [listComments, setListComments] = useState([])

    return (
        <>
            <Container maxWidth="md" spacing={4} style={{ marginTop: '2%' }}>
                <Grid container justify="center" spacing={6}>
                    <Grid item xs={6}>
                        <Paper elevantion={3} style={{ padding: 20, height: 500 }}>
                            <div className={classes.root}>
                                <img
                                    className={classes.img}
                                    src={imagesCard[activeStep].imgPath}
                                    alt={imagesCard[activeStep].label}
                                />
                                <MobileStepper
                                    steps={maxSteps}
                                    position="static"
                                    variant="text"
                                    activeStep={activeStep}
                                    nextButton={
                                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                            Next
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                        </Button>
                                    }
                                    backButton={
                                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                        Back
                                    </Button>
                                    }
                                />
                            </div>
                            <Typography variant="body2" style={{ marginTop: '5%' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam, ipsa molestias laborum sint sed consectetur? Optio eum laudantium iusto illo placeat, nisi vero modi, libero nesciunt porro nostrum consequatur.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevantion={3} style={{ height: 500 }} >
                            <Grid container justify="center">
                                <Typography variant="h4" align="center" style={{ padding: 20 }}>Producto </Typography>
                            </Grid>
                            <Grid container>
                                <Box component="fieldset" borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        readOnly
                                        style={{ marginLeft: 30 }}
                                    />
                                </Box>
                                <Tooltip title={"Añadir comentario"}>
                                    <AddCommentIcon style={{ cursor: 'pointer', marginLeft: '82%' }} onClick={handleClickOpen} />
                                </Tooltip>
                            </Grid>
                            <Grid container direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                style={{ marginLeft: '6%' }}
                            >
                                <Typography variant="h5" style={{ color: "gray", fontStyle: 'italic' }} ><del>$5000</del></Typography>
                            </Grid>
                            <Grid container direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                style={{ marginLeft: '4%' }}>
                                <Typography variant="h4" style={{ marginBottom: 20, fontStyle: 'italic' }}>$4500</Typography>
                            </Grid>
                            <Grid container style={{ marginBottom: '8%' }} spacing={4} justify="center">
                                <Grid item xs={5}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={color}
                                        onChange={e => setColor(e.target.value)}
                                        fullWidth
                                    >
                                        <MenuItem value={10}>Azul</MenuItem>
                                        <MenuItem value={20}>Rojo</MenuItem>
                                        <MenuItem value={30}>Verde</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={5}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={size}
                                        onChange={e => setSize(e.target.value)}
                                        fullWidth
                                    >
                                        <MenuItem value={10}>S</MenuItem>
                                        <MenuItem value={20}>M</MenuItem>
                                        <MenuItem value={30}>L</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                            <Grid container justify="center" spacing={4}>
                                <Button color="primary" variant="contained" style={{ padding: 10, width: '80%', marginBottom: 10 }}>
                                    Comprar
                                </Button>
                                <Button color="primary" variant="contained" fullWidth style={{ padding: 10, width: '80%' }}>
                                    Agregar al carrito
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={5} justify="center" style={{ marginTop: '2%' }}>
                    <div class="card-group">
                        {listaproductos.map((prod, index) => (
                            <Grid item xs={4}>
                                <MediaCard key={prod.id} prod={prod} style={{ margin: '2%' }} />
                            </Grid>
                        ))}
                    </div>
                </Grid>
                <Grid container spacing={5} justify="center">
                    {
                        listComments.map(c => {
                            return (
                                <Paper elevation={3} style={{ height: 150, width: '78%', marginTop: '4%', padding: '2%' }}>
                                    <Grid container justify="flex-start">
                                        <Box component="fieldset" borderColor="transparent">
                                            <Rating
                                                name="simple-controlled"
                                                value={c.rating}
                                                readOnly
                                                size="small"
                                            />
                                        </Box>
                                        <Tooltip title={"Añadir comentario"}>
                                            <AddCommentIcon style={{ cursor: 'pointer', marginLeft: '82%' }} onClick={handleClickOpen} />
                                        </Tooltip>
                                    </Grid>
                            <Typography variant="h5" style={{ fontStyle: 'oblique' }}>{c.title}</Typography>
                            <Typography variant="body2" >{c.comment}</Typography>
                                </Paper>
                            )
                        })
                    }
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Valoración</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Si gusta pueda añadir una valoración sobre este producto.
                                    </DialogContentText>
                            <Grid container justify="center">
                                <Box component="fieldset" borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={comment.rating}
                                        onChange={(event, newValue) => {
                                            console.log(newValue, event)
                                            setComment({...comment, rating: newValue});
                                        }}

                                    />
                                </Box>
                            </Grid>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Título del comentario"
                                value={comment.title}
                                onChange={e => setComment({...comment, title: e.target.value})}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Comentario"
                                value={comment.comment}
                                onChange={e => setComment({...comment, comment: e.target.value})}
                                multiline
                                rows={2}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                                    </Button>
                            <Button onClick={event => handleSubmit} color="primary">
                                Valorar
                                    </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Container>

        </>
    )
}
