import React from "react";
import Producto from "../components/Producto";

const Home = () => {
  return (
    <div>
      <p>
        <span>Listado de productos</span>
      </p>
      <table className="striped centered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <Producto item={{ name: "Lapiz", price: 15 }} />
          <Producto item={{ name: "Mochila", price: 895 }} />
          <Producto item={{ name: "MacBook Pro", price: 15000 }} />
        </tbody>
      </table>
    </div>
  );
};

export default Home;
