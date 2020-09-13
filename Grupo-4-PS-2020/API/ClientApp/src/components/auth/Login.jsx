import React, { useState } from "react";
import "../../styles/floating-labels.css";
import {productoAxios} from '../../config/axios';
import { useHistory } from "react-router";

export const Login = ({settokenJWT}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory()
  const handleSubmitForm = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    productoAxios.post("/user/login", formData)
    .then(
      ({data}) => {
        settokenJWT(data);
        localStorage.setItem("token", data);
        history.push("/Home")
    }
  )
    .catch(err => console.log(err));

    
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
              Deportes Online
            </h1>
          </div>
          <div className="form-label-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              required={true}
              autoFocus={true}
              value={email}
              onChange={handleChangeEmail}
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required={true}
              value={password}
              onChange={handleChangePassword}
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            className="btn btn-lg btn-block boton"
            style={{ "background-color": "#00A5CF", color: "white", fontWeight: 'bold'}}
          >
            Ingresar
          </button>
          <div className="mb-3">
          <a style={{ float: "right", paddingTop: "4px", color: '#457B9D' }} onClick={e => {
            e.preventDefault();
            history.push("/signup");
          }}>
              ¿No tenes cuenta? Registrate!
            </a>
            <a style={{ float: "right", paddingTop: "4px", color: '#457B9D' }} href="http://">
              Recuperar contraseña
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
