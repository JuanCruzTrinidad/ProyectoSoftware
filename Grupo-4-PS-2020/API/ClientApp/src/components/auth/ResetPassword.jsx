import React, {useState} from 'react'
import { useHistory, useParams } from "react-router";

const ResetPassword = () => {
    const history = useHistory();

    //Id del usuario
    let {id} = useParams();

    //States
    const [password, setpassword] = useState('');
    const [password2, setpassword2] = useState('');

    const handleSubmitForm = (e) => {
      e.preventDefault();
    }
  
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
                Resetear contraseña
              </h1>
            </div>
            <div className="form-label-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required={true}
              value={password}
              minlength="6"
              maxlength="60"
              onChange={e => setpassword(e.target.value)}
            />
            <label htmlFor="inputPassword">Nueva contraseña</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required={true}
              value={password2}
              minlength="6"
              maxlength="60"
              onChange={(e) => setpassword2(e.target.value)}
            />
            <label htmlFor="inputPassword">Repita la nueva contraseña</label>
          </div>
            <button
              className="btn btn-lg btn-block boton"
              style={{
                "background-color": "#00A5CF",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Confirmar
            </button>
          </form>
        </div>
      </>
    );
}
 
export default ResetPassword;