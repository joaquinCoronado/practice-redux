import React, { useState } from "react";

const EditarProducto = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState();

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="price">Precio</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <div
                style={{ width: "100%" }}
                className="waves-effect waves-light btn-small teal"
              >
                Guardar
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProducto;
