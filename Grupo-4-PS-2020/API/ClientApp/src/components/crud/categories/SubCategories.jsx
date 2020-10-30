import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./Categories.css";
import { useHistory } from "react-router";
import { apiAxios } from "../../../config/axios";
import Spinner from "../../ui/Spinner";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';


const SubCategories = () => {
  //States
  const [subcatlist, setsubcatlist] = useState([]);
  const [showtable, setshowtable] = useState(false);
  const [columns, setColumns] = useState([]);

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
        const optionsCategories = Object.fromEntries(
          data.map((item) => [item.idCategory, `${item.idCategory} - ${item.name}`])
        );
        setColumns([
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
          {
            title: "Categoria",
            field: "category.idCategory",
            lookup: optionsCategories,
          },
        ]);
        setshowtable(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSubcategoriesAPI();
    getCategoriesAPI();
    // eslint-disable-next-line
  }, []);

  return showtable ? (
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
            pageSize: 10,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                createSubcategoryAPI(newData);
                setTimeout(() => {
                  // setsubcatlist([...subcatlist, newData]);
                  resolve();
                }, 6500);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                updateSubcategoryAPI(newData);
                const dataUpdate = [...subcatlist];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setsubcatlist([...dataUpdate]);
                setTimeout(() => {
                  resolve();
                }, 1500);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                deleteSubcategoryAPI(oldData.idSubcategory);
                const dataDelete = [...subcatlist];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setsubcatlist([...dataDelete]);
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

export default SubCategories;
