import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./Categories.css";
import { useHistory } from "react-router";
import { apiAxios } from "../../../config/axios";

const Categories = () => {
  //States
  const [lista, setlista] = useState([]);

  const history = useHistory();

  //Si no esta logeado no debe poder entrar a esta pagina
  if (localStorage.getItem("token") === null) {
    history.push("/");
  }

  useEffect(() => {
    apiAxios
      .get("/category/allcategories")
      .then(({ data }) => {
        setlista(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const createCategoryAPI = (newcat) => {
    apiAxios
      .post("/category/createCategory", newcat, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        setlista(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  // const list = [
  //   { id: 1, name: "Zapatillas", nameGoogle: "Zapatos" },
  //   { id: 2, name: "Botines", nameGoogle: "Botas" },
  //   { id: 3, name: "Camisetas", nameGoogle: "Camisas" },
  // ];

  // const [data, setData] = useState(list);

  const [columns, setColumns] = useState([
    {
      title: "ID",
      field: "idCategory",
      type: "numeric",
      align: "left",
      hidden: true,
    },
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
          data={lista}
          options={{
            rowStyle: {
              backgroundColor: "#E0F6EF",
            },
            headerStyle: {
              backgroundColor: "#C8EFE3",
              color: "#001014",
            },
            actionsColumnIndex: 2,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  createCategoryAPI(newData);
                  setlista([...lista, newData]);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...lista];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setlista([...dataUpdate]);
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...lista];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setlista([...dataDelete]);
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
