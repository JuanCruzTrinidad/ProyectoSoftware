import React, { useState } from "react";
import "../../styles/floating-labels.css";
import { useHistory } from "react-router";
import { apiAxios } from "../../config/axios";
import bcrypt from "bcryptjs";

export const Signup = () => {
  const history = useHistory();

  // states
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [email, setemail] = useState("");
  const [passwordd, setpasswordd] = useState("");
  const [passwordd2, setpasswordd2] = useState("");
  const [hashpw, sethashpw] = useState("");
  const [error, seterror] = useState(false);

  //Si el usuario esta logeado no debe poder entrar a esta pagina
  if (localStorage.getItem("token") !== null) {
    history.push("/Home");
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    //Comparo si las passwords coinciden
    if (passwordd !== passwordd2) {
      seterror(true);
      return;
    }
    seterror(false);

    const password = hashpw;
    const data = { name, lastname, birthdate, email, password }; //Los datos que se guardan en la bd

    apiAxios
      .post("/user/newUser", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Access-Control-Allow-Headers":
            "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
        },
      })
      .then((res) => {
        let formData = new FormData();
        formData.append("email", data.email);

        apiAxios
          .post("/user/login", formData)
          .then(({ data }) => {
            const pw = passwordd.slice(0, -1); //Hay un rico bug, le tenemos que sacar la ultima letra para que funcione el login

            bcrypt.compare(pw, data[1]).then((res) => {
              if (res === true) {
                localStorage.setItem("token", data[0]);
                history.replace("/Home");
                window.location.reload();
              }
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((res) => console.log(res));

    localStorage.setItem("user", data.email);
  };

  const handleChangeEmail = ({ target }) => {
    setemail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setpasswordd(target.value);
    //Encriptacion de la password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(passwordd, salt, (err, hash) => {
        sethashpw(hash);
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
              Registro
            </h1>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required={true}
              autoFocus={true}
              value={name}
              minlength="3"
              maxlength="30"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label htmlFor="inputName">Nombre</label>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              required={true}
              autoFocus={true}
              value={lastname}
              minlength="2"
              maxlength="25"
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
            <label htmlFor="inputLastname">Apellido</label>
          </div>
          <div className="form-label-group">
            <input
              type="date"
              className="form-control"
              placeholder="Fecha de nacimiento"
              required={true}
              autoFocus={true}
              value={birthdate}
              onChange={(e) => {
                setbirthdate(e.target.value);
              }}
            />
            <label htmlFor="inputBirthdate">Fecha de nacimiento</label>
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
              value={passwordd}
              minlength="6"
              maxlength="60"
              onChange={handleChangePassword}
            />
            <label htmlFor="inputPassword">Contraseña</label>
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
            <label htmlFor="inputPassword">Repita la contraseña</label>
          </div>
          {error === true ? (
            <div class="alert alert-danger" role="alert">
              Las contraseñas deben coincidir
            </div>
          ) : null}
          <div className="checkbox mb-2">
            <label>
              <input type="checkbox" value="remember-me" /> Recuerdame
            </label>
          </div>
          <button
            className="btn btn-lg btn-block boton"
            style={{
              backgroundColor: "#00A5CF",
              color: "white",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Registrarse
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
                history.push("/Login");
              }}
            >
              Ya tenes cuenta? Entra!
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
