import { Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';



const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
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
        width: '100%',
    },
}));

export const OneProduct = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const [value, setValue] = React.useState(2);



    return (
        <>
            <Paper elevation={3} style={{ margin: 30, width: '60%', marginLeft: 200 }}>
                Categoría\Subcategoría
             </Paper>
            <Container maxWidth="md">
                <Grid container justify="center" spacing={8}>
                    <Grid item xs={6}>
                        <Paper elevantion={3} style={{ padding: 20, height: 500 }}>
                            <div className={classes.root}>
                                <img
                                    className={classes.img}
                                    src={tutorialSteps[activeStep].imgPath}
                                    alt={tutorialSteps[activeStep].label}
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
                        </Paper>

                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevantion={3} style={{ height: 500, width: 400 }}>
                            <Grid container justify="center">
                                <Typography variant="h4" align="center" style={{padding: 30}}>Producto </Typography>
                            </Grid>
                            <Grid container>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        style={{ marginLeft: 30 }}
                                    />
                                </Box>
                                <Typography variant="h3" style={{padding: 30}}>$4500</Typography>
                                
                            </Grid>
                            <Grid container justify="center" spacing={4}>
                            <Button color="primary" variant="contained"  style={{padding: 10, width:'80%', marginBottom:10}}>
                                    Comprar
                                </Button>
                                <Button color="primary" variant="contained" fullWidth style={{padding: 10, width:'80%'}}>
                                    Agregar al carrito
                                </Button>
                            </Grid>



                        </Paper>
                    </Grid>

                </Grid>
            </Container>

        </>
    )
}
