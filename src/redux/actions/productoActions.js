import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  TRAER_PRODUCTOS,
  TRAER_PRODUCTOS_EXITO,
  TRAER_PRODUCTOS_ERROR,
  TRAER_PRODUCTO,
  TRAER_PRODUCTO_EXITO,
  TRAER_PRODUCTO_ERROR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
  BORRAR_PRODUCTO,
  BORRAR_PRODUCTO_EXITO,
  BORRAR_PRODUCTO_ERROR,
} from "../types";

import clienteAxios from "../../config/axios";
import Swal from "sweetalert2";

export function crearNuevoProductoAction(producto) {
  console.log(producto);
  return async dispatch => {
    dispatch(agregarProducto());
    try {
      await clienteAxios.post("/productos", producto);
      dispatch(agregarProductoExito(producto));
      Swal.fire("Correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      dispatch(agregarProductoError());
      Swal.fire({
        icon: "error",
        title: "Algo salio mal",
        text: "Algo falló, intenta de nuevo más tarde",
      });
    }
  };
}

const agregarProducto = () => ({ type: AGREGAR_PRODUCTO });

const agregarProductoExito = producto => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = () => ({ type: AGREGAR_PRODUCTO_ERROR });

export function traerProductosAction() {
  return async dispatch => {
    dispatch(traerProductos());
    try {
      let response = await clienteAxios.get("/productos");
      dispatch(traerProductosExito(response.data));
    } catch (error) {
      dispatch(traerProductosError());
    }
  };
}

const traerProductos = () => ({ type: TRAER_PRODUCTOS });

const traerProductosExito = productos => ({
  type: TRAER_PRODUCTOS_EXITO,
  payload: productos,
});

const traerProductosError = () => ({ type: TRAER_PRODUCTOS_ERROR });

export function traerProductoAction(id) {
  return async dispatch => {
    dispatch(traerProducto());
    try {
      let producto = await clienteAxios.get(`/productos/${id}`);
      dispatch(traerProductoExito(producto.data));
    } catch (error) {
      dispatch(traerProductoError());
    }
  };
}

const traerProducto = () => ({
  type: TRAER_PRODUCTO,
});

const traerProductoExito = producto => ({
  type: TRAER_PRODUCTO_EXITO,
  payload: producto,
});

const traerProductoError = () => ({ type: TRAER_PRODUCTO_ERROR });

export function editarProductoAction(producto) {
  return async dispatch => {
    dispatch(editarProducto());
    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto);
      dispatch(editarProdoctoExito(producto));
      Swal.fire("Editado", "El producto fue editado correctamente.", "success");
    } catch (error) {
      dispatch(editarProductoError());
      Swal.fire("Error!", "Erro al editar el producto", "error");
    }
  };
}

const editarProducto = () => ({ type: EDITAR_PRODUCTO });

const editarProdoctoExito = producto => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: producto,
});

const editarProductoError = () => ({ type: EDITAR_PRODUCTO_ERROR });

export function borrarProductoAction(id) {
  return async dispatch => {
    dispatch(borrarProducto());
    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(borrarProductoExito(id));
      Swal.fire("Eliminado!", "El producto fue eliminado.", "success");
    } catch (error) {
      dispatch(borrarProductoError());
      Swal.fire("Error!", "Erro al borrar el producto", "error");
    }
  };
}

const borrarProducto = () => ({ type: BORRAR_PRODUCTO });
const borrarProductoExito = id => ({
  type: BORRAR_PRODUCTO_EXITO,
  payload: id,
});
const borrarProductoError = () => ({ type: BORRAR_PRODUCTO_ERROR });
