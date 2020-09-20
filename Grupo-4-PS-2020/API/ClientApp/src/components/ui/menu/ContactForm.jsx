import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
	const history = useHistory();

	// states
	const [name, setname] = useState("");
	const [subject, setsubject] = useState("");
	const [email, setemail] = useState("");
	const [message, setmessage] = useState("");

	const handleSubmitForm = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="container">
				<form onSubmit={handleSubmitForm}>
					<div className="text-center mt-4 mb-5">
						<h1 style={{ color: "#0E141B" }}>CONTACTO</h1>
					</div>
					<div className="row">
						<div className="col">
							<div className="form-label-group">
								<input
									type="text"
									className="form-control"
									placeholder="Nombre"
									required={true}
									autoFocus={true}
									minLength="3"
									maxLength="30"
									value={name}
									onChange={(e) => setname(e.target.value)}
								/>
								<label htmlFor="inputName">Nombre</label>
							</div>
						</div>
						<div className="col">
							<div className="form-label-group">
								<input
									type="text"
									className="form-control"
									placeholder="Email"
									required={true}
									autoFocus={true}
									minLength="3"
									maxLength="30"
									value={email}
									onChange={(e) => setemail(e.target.value)}
								/>
								<label htmlFor="inputName">Email</label>
							</div>
						</div>
						<div className="col">
							<div className="form-label-group">
								<input
									type="text"
									className="form-control"
									placeholder="Asunto"
									required={true}
									autoFocus={true}
									minLength="3"
									maxLength="30"
									value={subject}
									onChange={(e) => setsubject(e.target.value)}
								/>
								<label htmlFor="inputName">Asunto</label>
							</div>
						</div>
					</div>

					<div className="form-label-group">
						<textarea
							className="form-control"
							placeholder="Mensaje"
							required={true}
							autoFocus={true}
							style={{ minHeight: "200px" }}
							value={message}
							onChange={(e) => setmessage(e.target.value)}
						/>
					</div>
					<button
						className="btn btn-lg btn-block boton mb-5"
						style={{
							backgroundColor: "#00A5CF",
							color: "white",
							fontWeight: "bold",
						}}
						type="submit"
					>
						Enviar
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
