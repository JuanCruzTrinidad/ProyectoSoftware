import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "../categories/Categories.css";
import { useHistory } from "react-router";
import { apiAxios } from "../../../config/axios";
import Spinner from "../../ui/Spinner";

const Discount = () => {
  const history = useHistory();
  //Si no esta logeado no debe poder entrar a esta pagina
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (token === null || role !== "ROLE_ADMIN") {
    history.push("/");
  }

  //States
  const [disclist, setdisclist] = useState([]);
  const [showtable, setshowtable] = useState(false);

  //Conexion a API
  const getDiscountsAPI = () => {
    apiAxios
      .get("/discount/allDiscount", {
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
        setdisclist(data);
        setshowtable(true);
      })
      .catch((error) => console.log(error));
  };

  const createDiscountAPI = (newdisc) => {
    apiAxios
      .post("/discount/createDiscount", newdisc, {
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
				getDiscountsAPI();
				console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const updateDiscountAPI = (disc) => {
    apiAxios
      .post("/discount/updateDiscount", disc, {
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

  const deleteDiscountAPI = (discid) => {
    apiAxios
      .delete("/discount/deleteDiscount", {
        params: { idDiscount: discid },
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
      field: "idDiscount",
      type: "numeric",
      align: "left",
      hidden: true,
    },
    {
      title: "Codigo",
      field: "code",
      type: "string",
    },
    { title: "Porcentaje", field: "percentage", type: "numeric", align: "left" },
  ]);

  useEffect(() => {
    getDiscountsAPI();
    // eslint-disable-next-line
  }, []);

  //Se muestra la tabla cuando en la primer carga de la pag se cargue la tabla.
  return showtable ? (
    <div className="container-fluid contenedor">
      <div className="p-5">
        <MaterialTable
          title="Codigos de descuento"
          columns={columns}
          data={disclist}
          options={{
            rowStyle: {
              backgroundColor: "#E0F6EF",
            },
            headerStyle: {
              backgroundColor: "#C8EFE3",
              color: "#001014",
            },
            actionsColumnIndex: 2,
            pageSize: 10,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                createDiscountAPI(newData);
                setTimeout(() => {
                  // setcatlist([...catlist, newData]);
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                const dataUpdate = [...disclist];
                const index = oldData.tableData.id;
                newData.idDiscount = oldData.idDiscount;
                dataUpdate[index] = newData;
                setdisclist([...dataUpdate]);
                updateDiscountAPI(newData);
                setTimeout(() => {
                  resolve();
                }, 2000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                const dataDelete = [...disclist];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setdisclist([...dataDelete]);
                deleteDiscountAPI(oldData.idDiscount);
                setTimeout(() => {
                  resolve();
                }, 2000);
              }),
          }}
        />
      </div>
    </div>
  ) : (
    <div style={{ padding: "200px" }}>
      <Spinner />
    </div>
  );
};

export default Discount;
