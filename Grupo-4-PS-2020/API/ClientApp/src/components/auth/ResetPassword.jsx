import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { apiAxios } from "../../config/axios";
import bcrypt from "bcryptjs";

const ResetPassword = () => {
  const history = useHistory();

  //Id del usuario
  let { iduser } = useParams();

  //States
  const [passwordd, setpasswordd] = useState("");
  const [passwordd2, setpasswordd2] = useState("");
  const [password, sethashpassword] = useState(''); //Password hasheada

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const id = parseInt(iduser, 10);
    const info = {id, password};

    console.log(info);

    apiAxios
      .post("/user/resetpw", info, {
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
  }

  const handleChangePassword = ({ target }) => {
    setpasswordd(target.value);
    //Encriptacion de la password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(passwordd, salt, (err, hash) => {
        sethashpassword(hash);
      });
    });
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
              Resetear contraseña
            </h1>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required={true}
              value={passwordd}
              minlength="6"
              maxlength="60"
              onChange={handleChangePassword}
            />
            <label htmlFor="inputPassword">Nueva contraseña</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required={true}
              value={passwordd2}
              minlength="6"
              maxlength="60"
              onChange={(e) => setpasswordd2(e.target.value)}
            />
            <label htmlFor="inputPassword">Repita la nueva contraseña</label>
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
            Confirmar
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
