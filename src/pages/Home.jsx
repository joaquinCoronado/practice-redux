import React, { useEffect } from "react";
import Producto from "../components/Producto";
import { useDispatch, useSelector } from "react-redux";
import { traerProductosAction } from "../redux/actions/productoActions";

const Home = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerProductosAction());
  }, [dispatch]);

  let { productos } = useSelector(state => state.productos);

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
          {productos.map(producto => (
            <Producto key={producto.id} item={producto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
