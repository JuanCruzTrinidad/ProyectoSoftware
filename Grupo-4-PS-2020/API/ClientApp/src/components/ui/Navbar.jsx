import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import "../../index.css";

export const NavbarDU = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");

	return (
		<>
			<Navbar style={{ backgroundColor: "#25A18E" }}>
				<Navbar.Brand
					onClick={(e) => {
						e.preventDefault();
						history.push("/");
					}}
				>
					<img
						src="https://www.nicepng.com/png/full/338-3384104_logo-replikat-innovacion-imagen-negro-transparente-logos-con.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
					></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link
							onClick={(e) => {
								e.preventDefault();
								history.push("/");
							}}
						>
							Deporte Online
						</Nav.Link>
						<NavDropdown title="Menú" id="basic-nav-dropdown">
							<NavDropdown.Item
								onClick={(e) => {
									e.preventDefault();
									history.push("/catalogue");
								}}
							>
								Catálogo
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={(e) => {
									e.preventDefault();
									history.push("/us");
								}}
							>
								Nosotros
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={(e) => {
									e.preventDefault();
									history.push("/contact");
								}}
							>
								Contacto
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Collapse className="justify-content-end">
					{token === null ? (
						<>
							<Navbar.Brand
								style={{ color: "#0E141B", cursor: "pointer" }}
								onClick={(e) => {
									e.preventDefault();
									history.push("/Login");
								}}
							>
								Ingresar
							</Navbar.Brand>
							<Navbar.Brand
								style={{ color: "#0E141B", cursor: "pointer" }}
								onClick={(e) => {
									e.preventDefault();
									history.push("/signup");
								}}
							>
								Registrarse
							</Navbar.Brand>
						</>
					) : (
						<>
							<Navbar.Brand
								style={{ color: "#0E141B", cursor: "pointer" }}
								onClick={(e) => {
									e.preventDefault();
									localStorage.removeItem("user");
									localStorage.removeItem("token");
									history.replace("/");
									window.location.reload();
								}}
							>
								Desconectarse
							</Navbar.Brand>
						</>
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
