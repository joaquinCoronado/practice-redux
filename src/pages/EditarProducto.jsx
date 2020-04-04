import React, { useState } from "react";

const EditarProducto = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState(0);

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <p>Editar Producto</p>
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
              <div
                style={{ width: "100%" }}
                className="waves-effect waves-light btn-small teal"
              >
                Guardar Cambios
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProducto;
