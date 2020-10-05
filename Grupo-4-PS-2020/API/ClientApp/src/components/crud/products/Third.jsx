import { Button, Container, Grid } from '@material-ui/core'
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'

export const Third = ({product, atributes, currentStep, previousStep, nextStep}) => {

	const columns= [
        { title: "Color", field: "color"},
		{ title: "Talle", field: "size"},
		{title: "Cantidad", field: "count", type:"number"},
		{title: 'SKU', field: 'sku'}
	];

	const [data, setdata] = useState([])

	useEffect(() => {
		let variable = []
			atributes.map(a => {
					variable.push({
					color: a.color, 
					size: a.size, 
					count: a.count, 
					sku: `${product.name.slice(0, 2)}-${a.color}-${a.size}` })
			})
			if(variable.length > 1){
				variable.shift()
			}
			
			setdata(variable);
	}, [currentStep])

    return (
        <Container maxwidht="md" spacing={5} style={{marginTop:20, marginLeft: 100, marginBottom: 40}}>
            <Grid container spacing={4} justify="center">
            <MaterialTable
					title={product.name}
					columns={columns}
					data={data}
					options={
						{
						rowStyle: {
							backgroundColor: "#E0F6EF",
						},
						headerStyle: {
							backgroundColor: "#C8EFE3",
							color: "#001014",
						},
						actionsColumnIndex: -1
					}}
					style={{width: 700}}
				/>
            </Grid>
			<Grid container spacing={2} container style={{marginTop:30	}}
				direction="row"
				justify="space-between"
				alignItems="flex-end">
				<Grid item xs={4}>
					<Button color="primary" variant="outlined" fullWidth onClick={e => {
						e.preventDefault();
						previousStep();
					}}>
						Anterior
					</Button>
				</Grid>
				<Grid item xs={4}>
				<Button color="primary" variant="outlined" fullWidth onClick={e => {
						e.preventDefault();
						nextStep();
					}}>
						Finalizar
					</Button>
				</Grid>
			</Grid>
        </Container>
    )
}
