import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Cadastro} />
          <Route path="/login" component={Login} />
          <Route path="/inicio" component={Inicio} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
