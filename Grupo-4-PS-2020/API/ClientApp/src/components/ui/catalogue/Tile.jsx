import React from "react";

const Tile = () => {
	return (
			<div className="card mb-1">
				<div className="row">
					<div className="col-md-3 ml-3">
						<img
							src="https://dexter.vteximg.com.br/arquivos/ids/485866-1000-1000/ADF34384_1.jpg?v=637018356491800000"
							className="img-fluid align-content-center"
						/>
					</div>
					<div className="col-md-8 p-4">
						<h4 className="card-title">Titulardo super ultra super titulardo</h4>
						<p className="card-text"><del>Precio oferta</del></p>
						<p className="card-text">Precio</p>						
					</div>
			</div>
			</div>
	);
};

export default Tile;
