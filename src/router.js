import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import NuevoProducto from "./pages/NuevoProducto";
import EditarProducto from "./pages/EditarProducto";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos/nuevo" component={NuevoProducto} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
