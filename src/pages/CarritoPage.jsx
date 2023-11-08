import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

    const { listaCompras, eliminarCompra, aumentarCantidad, disminuirCantidad } = useContext(CarritoContext)

    const handleDelete = (id) => {
        eliminarCompra(id);
    };

    const calcularTotal = () => {
        return listaCompras.compras.reduce((total, compra) => total + compra.price * compra.cantidad, 0).toFixed(2)
    };

    const handlePrint = () => {
        print()
    }

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
                                <td>
                                    <button className='btn btn-outline-primary' onClick={() => disminuirCantidad(compra.id)}>-</button>
                                    <button className='btn btn-primary'>{compra.cantidad}</button>
                                    <button className='btn btn-outline-primary' onClick={() => aumentarCantidad(compra.id)}>+</button>
                                </td>
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

                    <th><b>Total a pagar: </b></th>
                    <td></td>
                    <td></td>
                    <td>${calcularTotal()}</td>

                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary"
                    onClick={handlePrint}
                    disabled={listaCompras.compras < 1}
                >Comprar</button>
            </div>
        </>
    );
};