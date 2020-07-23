import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
          login:"login",
          senha:"senha",
        };
    }
    render() {
        const {login,senha} = this.state;
        return(

            <div className="pagina">   
            <div className="caixaCadastro">
                <h1>Login</h1>
                <h2>Digite seu Login:</h2>
                <input type="text"/>
                <div className="entradaLogin"></div>
                <h2>Digite sua senha:</h2>
                <input type="password"/>
                
                <Link to={`/Inicio`}>
                    <div className="botaoLogin">Entrar</div>
                </Link>
            </div>
        </div>     

            // <div className="pagina">   
            //     <div className="caixaLogin">
            //         <h1>Login</h1>
            //         <h2>Digite seu Login:</h2>
            //         <input type="text"/>
            //         <h2>Digite sua senha:</h2>
            //         <input type="password"/>
            //         <Login to={`/Inicio`}>
            //             <div className="botaoEntrar">Entrar</div>
            //         </Login>
            //     </div>
            // </div>  
        );
    }
}

export default Login;