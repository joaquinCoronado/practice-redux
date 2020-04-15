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

const initialState = {
  productos: [],
  loading: false,
  error: false,
  selectProduct: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return { ...state, loading: true };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
      return { ...state, error: true, loading: false };
    case TRAER_PRODUCTOS:
      return { ...state, loading: true };
    case TRAER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: action.payload,
      };
    case TRAER_PRODUCTOS_ERROR:
      return { ...state, error: true, loading: false };
    case TRAER_PRODUCTO:
      return { ...state, loading: true };
    case TRAER_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        selectProduct: action.payload,
      };
    case TRAER_PRODUCTO_ERROR:
      return { ...state, loading: false, error: true, selectProduct: {} };
    case EDITAR_PRODUCTO:
      return { ...state, loading: true };
    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        selectProduct: action.payload,
      };
    case EDITAR_PRODUCTO_ERROR:
      return { ...state, error: true, loading: false };
    case BORRAR_PRODUCTO:
      return { ...state, loading: true };
    case BORRAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: state.productos.filter(
          producto => producto.id !== action.payload
        ),
      };
    case BORRAR_PRODUCTO_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
