import React, { useReducer } from 'react'
import { CarritoContext } from './CarritoContext';

const ADD_COMPRA = 'ADD_COMPRA';
const ADD_COUNT = 'ADD_COUNT';
const REST_COUNT = 'REST_COUNT';
const DELETE_COMPRA = 'DELETE_COMPRA';

const initialState = {
    compras: [],
    backCompras: [],
};

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_COMPRA:
            return {
                ...state,
                compras: [...state.compras, action.payload],
            };
        case ADD_COUNT:
            return {
                ...state,
                compras: state.compras.map(item =>
                    item.id === action.payload ? { ...item, cantidad: item.cantidad + 1 } : item
                ),
            };
        case REST_COUNT:
            return {
                ...state,
                compras: state.compras.map(item =>
                    item.id === action.payload && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
                ),
            };
        case DELETE_COMPRA:
            return {
                ...state,
                compras: state.compras.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: ADD_COMPRA,
            payload: compra
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: ADD_COUNT,
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: REST_COUNT,
            payload: id
        }
        dispatch(action)
    }

    const eliminarCompra = (id) => {
        const action = {
            type: DELETE_COMPRA,
            payload: id
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad }}>
            {children}
        </CarritoContext.Provider>
    )
}
