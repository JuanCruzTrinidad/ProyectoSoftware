import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./Categories.css";

const Categories = () => {
	const list = [
		{ id: 1, name: "Zapatillas", nameGoogle: "Zapatos" },
		{ id: 2, name: "Botines", nameGoogle: "Botas" },
		{ id: 3, name: "Camisetas", nameGoogle: "Camisas" },
	];

	const { useState } = React;
	const [data, setData] = useState(list);

	const [columns, setColumns] = useState([
		{ title: "ID", field: "id", type: "numeric", align: "left", hidden: true},
		{
			title: "Nombre",
			field: "name",
		},
		{ title: "Taxonomia Google", field: "nameGoogle", type: "text" },
	]);

	return (
		<div className="container-fluid contenedor">
			<div className="p-5">
				<MaterialTable
					title="Categorias"
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
						actionsColumnIndex: 2
					}}
					editable={{
						onRowAdd: (newData) =>
							new Promise((resolve, reject) => {
								setTimeout(() => {
									setData([...data, newData]);
									console.log(list);
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
			</div>
		</div>
	);
};

export default Categories;
