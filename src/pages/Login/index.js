import React, { Component } from "react";
import "./styles.css";

class Login extends Component {
    render() {
        return(
            <div className="pagina">   
            <div className="caixaLogin">
                <h1>Login</h1>
                <h2>Digite seu Login:</h2>
                <div className="entradaLogin"></div>
                <input type="text"/>
                <h2>Digite sua senha:</h2>
                <input type="password"/>
                <div className="entradaSenha"></div>
                <Login to={`/Inicio`}>
                    <div className="botaoEntrar">Entrar</div>
                </Login>
            </div>
        </div>  
            );
    }
}

export default Login;