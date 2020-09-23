import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./Categories.css";

const SubCategories = () => {

	const list = [
		{ id: 1, name: "Zapatillas", nameGoogle: "Zapatos", categorie: 0 },
		{ id: 2, name: "Botines", nameGoogle: "Botas", categorie: 1 },
		{ id: 3, name: "Camisetas", nameGoogle: "Camisas", categorie: 1 },
	];

	const optionsCategories = {0: 'Categoria 0', 1: 'Categoria 1', 2: 'Categoria 2'};

	//States
	const { useState } = React;
	const [data, setData] = useState(list);
	const [columns, setColumns] = useState([
		{ title: "ID", field: "id", type: "numeric", align: "justify"},
		{
			title: "Nombre",
			field: "name",
		},
		{ title: "Taxonomia Google", field: "nameGoogle", type: "text" },
		{ title: "Categoria", field: "categorie", lookup: optionsCategories }
	]);

	return (
		<div className="container-fluid contenedor">
			<div className="p-5">
				<MaterialTable
					title="Categorias"
					columns={columns}
					data={data}
					options={{
						rowStyle: {
							backgroundColor: "#E0F6EF",
						},
						headerStyle: {
							backgroundColor: "#C8EFE3",
							color: "#001014",
						},
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

export default SubCategories;
