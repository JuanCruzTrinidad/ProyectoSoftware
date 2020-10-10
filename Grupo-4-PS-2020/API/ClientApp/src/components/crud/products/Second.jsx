import { Button, Container, Grid } from '@material-ui/core';
import { EditAttributes } from '@material-ui/icons';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'

export const Second = ({previousStep, nextStep, setatributes, atributes, handleSubmit}) => {

	const [data, setData] = useState([]);	
    const [columns, setColumns] = useState([
        { title: "Color", field: "color"},
		{ title: "Talle", field: "size"},
		{title: "Cantidad", field: "count", type:"numeric"},
		{title: 'Peso', field: 'weight', type: "numeric"},
		{title: 'Ancho', field: 'width', type: "numeric"},
		{title: 'Alto', field: 'heigth', type: "numeric"},
		{title: 'Profundidad', field: 'depth', type: "numeric"}
    ]);
	
	useEffect(() => {

		var variable = [];
		console.log(data)
		if(data.length > 0){
			variable = [];
			data.map( d => {
			variable.push({
				idproduct: 0,
				color: d.color,
				size:  d.size,
				count: parseInt(d.count, 10),
				weight: parseFloat(d.weight, 10),
				width: parseFloat(d.width, 10),
				heigth: parseFloat(d.heigth, 10),
				depth: parseFloat(d.depth, 10)})
			})
		setatributes(variable);
		console.log(atributes)
		}
	}, [data])

    return (
        <Container maxwidht="md" spacing={5} style={{marginTop:20}}>
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
						actionsColumnIndex: -1
					}}
					// style={{width: 700}}
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
						handleSubmit();
					}}>
						Finalizar
					</Button>
				</Grid>
			</Grid>
        </Container>
    )
}
