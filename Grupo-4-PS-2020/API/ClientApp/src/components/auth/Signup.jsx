import React, { useState } from "react";
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
  const [hashpw, sethashpw] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

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
              if(res === true) {
                localStorage.setItem("token", data[0]);
                history.push("/Home");
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
              Registro
            </h1>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required={true}
              autoFocus={true}
              value={name}
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
              placeholder="Lastname"
              required={true}
              autoFocus={true}
              value={lastname}
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
              placeholder="Birthdate"
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
              placeholder="Email address"
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
              placeholder="Password"
              required={true}
              value={passwordd}
              onChange={handleChangePassword}
            />
            <label htmlFor="inputPassword">Contraseña</label>
          </div>
          <div className="checkbox mb-2">
            <label>
              <input type="checkbox" value="remember-me" /> Recuerdame
            </label>
          </div>
          <button
            className="btn btn-lg btn-block boton"
            style={{
              "backgroundColor": "#00A5CF",
              color: "white",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Registrarse
          </button>
          <div className="mb-3">
            <a
              style={{ float: "right", paddingTop: "4px", color: "#457B9D", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                history.push("/Login");
              }}
            >
              Ya tienes cuenta? Entra!
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
