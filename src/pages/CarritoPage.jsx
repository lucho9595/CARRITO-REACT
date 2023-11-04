import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

    const { listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad } = useContext(CarritoContext)

    const handleDelete = (id) => {
        eliminarCompra(id);
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.compras.length !== 0 ? (
                        listaCompras.compras.map((compra) => (
                            <tr key={compra.id}>
                                <td>{compra.title}</td>
                                <td>{compra.price}</td>
                                <td>1</td> {/* Asumiendo que tienes la cantidad en cada compra */}
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(compra.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No hay productos en el carrito.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button className="btn btn-primary">Comprar</button>
            </div>
        </>
    );
};