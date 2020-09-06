import React, { useState } from 'react'
import '../../styles/floating-labels.css'

export const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmitForm = () =>{
        const data = {email, password};
        console.log(data);
    }

    const handleChangeEmail = ({target}) =>{ setemail(target.value) }

    const handleChangePassword = ({target}) =>{ setpassword(target.value)}

    return (
        <>
        <div className="container-login">
            <form className="form-signin" onSubmit={handleSubmitForm}>
                <div className="text-center mb-4">
                    <img className="mb-5" src="https://www.nicepng.com/png/full/338-3384104_logo-replikat-innovacion-imagen-negro-transparente-logos-con.png" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Deportes Unla</h1>
                </div>
                <div className="form-label-group">
                    <input type="email" 
                    className="form-control" 
                    placeholder="Email address" 
                    required={true} 
                    autoFocus={true}
                    value={email}
                    onChange={handleChangeEmail}/>
                    <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                    <input type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    required={true}
                    value={password}
                    onChange={handleChangePassword} />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <div className="mb-3">
                  <a style={{float: "right", paddingTop: "4px"}} href="http://">Recuperar contraseña</a>
                </div>
            </form>
        </div>
        </>
    )
}
