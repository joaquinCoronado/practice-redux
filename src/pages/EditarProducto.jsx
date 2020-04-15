import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  traerProductoAction,
  editarProductoAction,
} from "../redux/actions/productoActions";

const EditarProducto = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState(0);

  let { id } = useParams();
  let dispatch = useDispatch();
  let { selectProduct, loading } = useSelector(state => state.productos);

  useEffect(() => {
    dispatch(traerProductoAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    setName(selectProduct.name);
    setPrice(selectProduct.price);
  }, [loading]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editarProductoAction({ id, name, price }));
  };

  return (
    <div>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <p>Editar Producto</p>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label className="active" htmlFor="name">
                Producto
              </label>
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
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProducto;
