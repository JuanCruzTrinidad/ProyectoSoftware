import { Button, Container, Grid } from '@material-ui/core';
import { EditAttributes } from '@material-ui/icons';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'

export const Second = ({previousStep, nextStep, setatributes, atributes}) => {

    const colors = { 1:"Azul", 2: "Rojo",3: "Amarillo" };
	const sizes = {  1: "XL", 2: "L", 3: "M"  };

	const [data, setData] = useState([]);	
    const [columns, setColumns] = useState([
        { title: "Color", field: "color", lookup:colors},
		{ title: "Talle", field: "size", lookup:sizes},
		{title: "Cantidad", field: "count", type:"number"}
    ]);
	
	useEffect(() => {

		var variable = [];
		if(data.length > 0){
			variable = atributes;
			data.map( d => {
			variable.push({
				idproduct: 0,
				color: colors[parseInt(d.color, 10)],
				size:  sizes[parseInt(d.size, 10)],
				count: parseInt(d.count, 10),
				sku: '' })
			})

		setatributes(variable);
		console.log(atributes)
		}
	}, [data])

    return (
        <Container maxwidht="md" spacing={5} style={{marginTop:20, marginLeft: 100}}>
            <Grid container spacing={4} justify="center">
                <MaterialTable
					title="Talle - Color"
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
						actionsColumnIndex: 3
					}}
					style={{width: 700}}
					editable={{
						onRowAdd: (newData) =>
							new Promise((resolve, reject) => {
								setTimeout(() => {
									setData([...data, newData]);
									resolve();
								}, 1000);
							}),
						onRowUpdate: (newData, oldData) =>
							new Promise((resolve, reject) => {
								setTimeout(() => {
									const dataUpdate = [...data];
									const index = oldData.tableData.id;
									dataUpdate[index] = newData;
									setData([...dataUpdate]);
									resolve();
								}, 1000);
							}),
						onRowDelete: (oldData) =>
							new Promise((resolve, reject) => {
								setTimeout(() => {
									const dataDelete = [...data];
									const index = oldData.tableData.id;
									dataDelete.splice(index, 1);
									setData([...dataDelete]);
									resolve();
								}, 1000);
							}),
					}}
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
						Siguiente
					</Button>
				</Grid>
			</Grid>
        </Container>
    )
}
