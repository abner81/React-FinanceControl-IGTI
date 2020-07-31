import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NovoLancamento from "./NovoLancamento";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/novo-lancamento" component={NovoLancamento} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
