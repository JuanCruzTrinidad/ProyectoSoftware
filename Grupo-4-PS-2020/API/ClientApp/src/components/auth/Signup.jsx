import React, { useState } from "react";

export const Signup = () => {

  // states
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [birthdate, setbirthdate] = useState('');
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = { name, lastname, birthdate, email, password };
    console.log(data);
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
              Sign up
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
              onChange={e => {setname(e.target.value)}}
            />
            <label htmlFor="inputName">Name</label>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              className="form-control"
              placeholder="Lastname"
              required={true}
              autoFocus={true}
              value={lastname}
              onChange={e => {setlastname(e.target.value)}}
            />
            <label htmlFor="inputLastname">Lastname</label>
          </div>
          <div className="form-label-group">
            <input
              type="date"
              className="form-control"
              placeholder="Birthdate"
              required={true}
              autoFocus={true}
              value={birthdate}
              onChange={e => {setbirthdate(e.target.value)}}
            />
            <label htmlFor="inputBirthdate">Birthdate</label>
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
            type="submit"
          >
            Sign up
          </button>
          <div className="mb-3">
            <a
              style={{ float: "right", paddingTop: "4px", color: "#457B9D" }}
              href="http://localhost:3000/login"
            >
              Ya tienes cuenta? Entra!
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
