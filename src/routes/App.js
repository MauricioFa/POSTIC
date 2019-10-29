import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import Pedidos from "../containers/Pedidos";
import Clientes from "../containers/Clientes";
import Productos from "../containers/Productos";
import Configuracion from "../containers/Configuracion";
import NotFound from "../containers/NotFound";
import Registrar from "../containers/Registrar";
import Login from '../containers/Login';
import LogUp from '../containers/LogUp';
import RecoverPassword from '../containers/RecoverPassword';

const App = () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/registrar" component={Registrar} />
      <Route exact path="/pedidos" component={Pedidos} />
      <Route exact path="/clientes" component={Clientes} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/configuracion" component={Configuracion} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/logUp' component={LogUp} />
      <Route exact path='/recoverPassword' component={RecoverPassword} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
