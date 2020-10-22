import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export const SellerComments = () => {
    return (
        <>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
                Comentarios al vendedor
    </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Comentario"
                        multiline
                        rows={5}
                        defaultValue="Inserte aquí su comentario, nos interesa escucharte!"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid container alignContent="flex-end" justify="flex-end" alignItems="flex-end">
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary" fullWidth>
                            Enviar y finalizar compra
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}
