import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#25A18E" }}
        >
          <a
            className="navbar-brand"
            style={{ color: "#0E141B", cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              history.push("/Home");
            }}
          >
            <img 
            src="https://www.nicepng.com/png/full/338-3384104_logo-replikat-innovacion-imagen-negro-transparente-logos-con.png" width="30" height="30" class="d-inline-block align-top mr-2" alt=""></img>
            Deporte Online
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* <ul className="navbar-nav">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/Home");
                  }}
                >
                  Home{" "}
                </a>
              </li>
            </ul> */}
            {token === null ? (
              <ul className="navbar-nav ml-auto">
                <li style={{ float: "inline-end" }}>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/Login");
                    }}
                  >
                    Ingresar
                  </a>
                </li>
                <li style={{ float: "inline-end" }}>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/signup");
                    }}
                  >
                    Registrarse
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li style={{ float: "inline-end" }}>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.removeItem("user");
                      localStorage.removeItem("token");
                      history.replace("/Home");
                      window.location.reload();
                    }}
                  >
                    Desconectarse
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
