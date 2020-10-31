import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./Categories.css";
import { useHistory } from "react-router";
import { apiAxios } from "../../../config/axios";
import Spinner from "../../ui/Spinner";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const Categories = () => {
  //States
  const [catlist, setcatlist] = useState([]);
  const [showtable, setshowtable] = useState(false);

  const history = useHistory();

  //Si no esta logeado no debe poder entrar a esta pagina
  const token = localStorage.getItem("token");
  if (token === null) {
    history.push("/");
  }

  //Conexion a API
  const getCategoriesAPI = () => {
    apiAxios
      .get("/category/allcategories", {
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
        setcatlist(data);
        console.log(data);
        setshowtable(true);
      })
      .catch((error) => console.log(error));
  };

  const createCategoryAPI = (newcat) => {
    apiAxios
      .post("/category/createCategory", newcat, {
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
        getCategoriesAPI();
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const updateCategoryAPI = (cat) => {
    apiAxios
      .post("/category/updateCategory", cat, {
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

  const deleteCategoryAPI = (catid) => {
    apiAxios
      .delete("category/deleteCategory", {
        params: { idCategory: catid },
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
      type: "string",
    },
    { title: "Taxonomia Google", field: "nameGoogle", type: "string" },
  ]);

  useEffect(() => {
    getCategoriesAPI();
    // eslint-disable-next-line
  }, []);

  //Se muestra la tabla cuando en la primer carga de la pag se cargue la tabla.
  return showtable ? (
    <div className="container-fluid contenedor">
      <div className="p-5">
        <MaterialTable
          title="Categorias"
          columns={columns}
          data={catlist}
          options={{
            rowStyle: {
              backgroundColor: "#E0F6EF",
            },
            headerStyle: {
              backgroundColor: "#C8EFE3",
              color: "#001014",
            },
            actionsColumnIndex: 2,
            pageSize: 10
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                createCategoryAPI(newData);
                setTimeout(() => {
                  // setcatlist([...catlist, newData]);
                  resolve();
                }, 6500);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                const dataUpdate = [...catlist];
                const index = oldData.tableData.id;
                newData.idCategory = oldData.idCategory;
                dataUpdate[index] = newData;
                setcatlist([...dataUpdate]);
                updateCategoryAPI(newData);
                setTimeout(() => {
                  resolve();
                }, 1500);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                const dataDelete = [...catlist];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setcatlist([...dataDelete]);
                deleteCategoryAPI(oldData.idCategory);
                setTimeout(() => {
                  resolve();
                }, 1500);
              }),
          }}
          actions={[
            {
              icon: LiveHelpIcon,
              isFreeAction: true,
              onClick: () => window.open('https://www.google.com/basepages/producttype/taxonomy-with-ids.es-ES.txt'),
              tooltip: 'Información sobre Taxonomía de Google.'
            }
          ]}
        />
      </div>
    </div>
  ) : (
    <div style={{ padding: "200px" }}>
      <Spinner />
    </div>
  );
};

export default Categories;
