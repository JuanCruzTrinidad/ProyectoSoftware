import React, { useState } from "react";
import { useHistory } from "react-router";
import { apiAxios } from "../../config/axios";

export const RecoverPassword = () => {
  const history = useHistory();

  //State
  const [email, setemail] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    apiAxios
    .post("/user/recoverpw", email, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        "Access-Control-Allow-Headers":
          "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      history.push("/");
    })
    .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-login">
        <form className="form-signin" onSubmit={handleSubmitForm}>
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="https://www.nicepng.com/png/full/338-3384104_logo-replikat-innovacion-imagen-negro-transparente-logos-con.png"
              alt=""
              width="72"
              height="72"
            />
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ color: "#0E141B" }}
            >
              Deportes Online
            </h1>
          </div>
          <div className="form-label-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required={true}
              autoFocus={true}
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <label htmlFor="inputEmail">Email</label>
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-block boton"
            style={{
              "background-color": "#00A5CF",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Recuperar contraseña
          </button>
        </form>
      </div>
    </>
  );
};
