import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../redux/actions/productoActions";
import Swal from "sweetalert2";
import "../css/producto.css";

const Producto = ({ item }) => {
  let { name, price, id } = item;
  let dispatch = useDispatch();

  const handleClick = e => {
    Swal.fire({
      title: "¿Esetás seguro?",
      text: `El producto ${name} será eliminado`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Borrar producto",
    }).then(result => {
      if (result.value) {
        dispatch(borrarProductoAction(id));
      }
    });
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <div className="row-btn-container">
          <Link to={`/productos/editar/${id}`}>
            <div className="row-btn btn-floating waves-effect waves-light teal">
              <i className="material-icons left">edit</i>
            </div>
          </Link>

          <div
            className="row-btn btn-floating waves-effect waves-light teal"
            onClick={handleClick}
          >
            <i className="material-icons left">delete_forever</i>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Producto;
