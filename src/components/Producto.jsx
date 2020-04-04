import React from "react";

import "../css/producto.css";

const Producto = ({ item }) => {
  let { name, price } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <div className="row-btn-container">
          <div
            href="!#"
            className="row-btn btn-floating waves-effect waves-light teal"
          >
            <i className="material-icons left">edit</i>
          </div>
          <div className="row-btn btn-floating waves-effect waves-light teal">
            <i className="material-icons left">delete_forever</i>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Producto;
