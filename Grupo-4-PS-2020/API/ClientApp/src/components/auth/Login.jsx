import React, { useState } from "react";
import "../../styles/floating-labels.css";
import { apiAxios } from "../../config/axios";
import { useHistory } from "react-router";
import bcrypt from "bcryptjs";

export const Login = () => {
  //States
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  //Si el usuario esta logeado no debe poder entrar a esta pagina
  if (localStorage.getItem("token") !== null) {
    history.push("/");
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    apiAxios
      .post("/user/login", formData)
      .then(({ data }) => {
        const pw = password.slice(0, -1); //Hay un rico bug, le tenemos que sacar la ultima letra para que funcione el login
        bcrypt.compare(pw, data[1]).then((res) => {
          if (res === true) {
            localStorage.setItem("role", data[3]);
            localStorage.setItem("iduser", data[2]);
            localStorage.setItem("user", email);
            localStorage.setItem("token", data[0]);
            history.replace("/");
            window.location.reload();
          }
        });
      })
      .catch(() => (
        <div className="alert alert-danger" role="alert">
          Usuario no valido.
        </div>
      ));
  };

  const handleChangeEmail = ({ target }) => {
    setemail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setpassword(target.value);
  };

  return (
    <>
      <div className="container-login">
        <form className="form-signin" onSubmit={handleSubmitForm}>
          <div className="text-center mb-4">
            <img
              className="mb-5"
              src="https://www.nicepng.com/png/full/338-3384104_logo-replikat-innovacion-imagen-negro-transparente-logos-con.png"
              alt=""
              width="72"
              height="72"
            />
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ color: "#0E141B" }}
            >
              Ingresar
            </h1>
          </div>
          <div className="form-label-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required={true}
              autoFocus={true}
              value={email}
              onChange={handleChangeEmail}
            />
            <label htmlFor="inputEmail">Email</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required={true}
              value={password}
              onChange={handleChangePassword}
            />
            <label htmlFor="inputPassword">Contraseña</label>
          </div>
          <div className="checkbox mb-2">
            <label>
              <input type="checkbox" value="remember-me" /> Recordar
            </label>
          </div>
          <button
            className="btn btn-lg btn-block boton"
            style={{
              "background-color": "#00A5CF",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Ingresar
          </button>
          <div className="mb-3">
            <a
              style={{
                float: "right",
                paddingTop: "4px",
                color: "#457B9D",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                history.push("/signup");
              }}
            >
              ¿No tenes cuenta? Registrate!
            </a>
            <a
              style={{
                float: "left",
                paddingTop: "4px",
                color: "#457B9D",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                history.push("/recoverpw");
              }}
            >
              Recuperar contraseña
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
