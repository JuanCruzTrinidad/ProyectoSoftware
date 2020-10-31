import { Card, CardActionArea, CardContent, CardHeader, Grid, Icon, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';

export const CategoryCards = ({categoryName}) => {
    console.log("render")
    const history = useHistory();
    return (
        <>
           <Card style={{height: 150, width: 150, padding: 20}} elevation={3} variant="outlined">
            <CardActionArea onClick={(e) => history.push('/catalogue')}>
                    <CardContent>
                        <Grid container justify="center" alignItems="center" alignContent="center">
                                <Grid item xs={4}>
                                    <Icon fontSize="large">store_mall_directory</Icon>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" align="center"> {categoryName}</Typography>
                                </Grid>
                        </Grid>
                </CardContent>
                </CardActionArea>
           </Card>
        </>
    )
}
