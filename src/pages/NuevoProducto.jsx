import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearNuevoProductoAction } from "../redux/actions/productoActions";

const NuevoProducto = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const agregarProducto = producto =>
    dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = e => {
    e.preventDefault();
    console.log("submit");
    agregarProducto({ name, price });
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <div className="row">
        <form className="col s12" onSubmit={submitNuevoProducto}>
          <p>Agregar Producto</p>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor="name">Producto</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="price"
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              <label className="active" htmlFor="price">
                Precio
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button
                style={{ width: "100%" }}
                className="waves-effect waves-light btn-small teal"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoProducto;
