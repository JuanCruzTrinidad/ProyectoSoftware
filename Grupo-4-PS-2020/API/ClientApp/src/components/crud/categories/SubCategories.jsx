import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./Categories.css";
import { useHistory } from "react-router";
import { apiAxios } from "../../../config/axios";
import Spinner from "../../ui/Spinner";

const SubCategories = () => {
  //States
  const [subcatlist, setsubcatlist] = useState([]);
  const [showtable, setshowtable] = useState(false);

  const history = useHistory();

  //Si no esta logeado no debe poder entrar a esta pagina
  const token = localStorage.getItem("token");
  if (localStorage.getItem("token") === null) {
    history.push("/");
  }

  //Conexion a API
  const getSubcategoriesAPI = () => {
    apiAxios
      .get("/subcategory/allsubcategories", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        setsubcatlist(data);
        console.log(data);
        setshowtable(true);
      })
      .catch((error) => console.log(error));
  };

  const createSubcategoryAPI = (newsubcat) => {
    apiAxios
      .post("/subcategory/createSubcategory", newsubcat, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        getSubcategoriesAPI();
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const updateSubcategoryAPI = (subcat) => {
    apiAxios
      .post("/subcategory/updateSubcategory", subcat, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const deleteSubcategoryAPI = (subcatid) => {
    apiAxios
      .delete("/subcategory/deleteSubcategory", {
        params: { idSubcategory: subcatid },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const list = [
    { id: 1, name: "Zapatillas", nameGoogle: "Zapatos", categorie: 0 },
    { id: 2, name: "Botines", nameGoogle: "Botas", categorie: 1 },
    { id: 3, name: "Camisetas", nameGoogle: "Camisas", categorie: 1 },
  ];

  const optionsCategories = {
    0: "Categoria 0",
    1: "Categoria 1",
    2: "Categoria 2",
  };

  //const [data, setData] = useState(list);

  const [columns, setColumns] = useState([
    {
      title: "ID",
      field: "id",
      type: "numeric",
      align: "justify",
      hidden: true,
    },
    {
      title: "Nombre",
      field: "name",
      type: "string",
    },
    { title: "Taxonomia Google", field: "nameGoogle", type: "string" },
    { title: "Categoria", field: "category", lookup: optionsCategories },
  ]);

  useEffect(() => {
    getSubcategoriesAPI();
  }, []);

  return (
    <div className="container-fluid contenedor">
      <div className="p-5">
        <MaterialTable
          title="Subcategorias"
          columns={columns}
          data={subcatlist}
          options={{
            rowStyle: {
              backgroundColor: "#E0F6EF",
            },
            headerStyle: {
              backgroundColor: "#C8EFE3",
              color: "#001014",
            },
            actionsColumnIndex: 3,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setsubcatlist([...subcatlist, newData]);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...subcatlist];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setsubcatlist([...dataUpdate]);
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...subcatlist];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setsubcatlist([...dataDelete]);
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
