import React from "react";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#25A18E" }}
        >
          <a className="navbar-brand" href="#" style={{ color: "#0E141B" }}>
            Deportes Online
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
            <ul className="navbar-nav">
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
            </ul>
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
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
