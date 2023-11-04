import React, { useContext } from 'react'
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';

export const ComprasPage = () => {

    const { productos } = useContext(ProductosContext)
    const { listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }
    const handleAumentar = (id) => {

    }
    const handleDisminuir = (id) => {

    }
    return (
        <div className='container'>
            <div className='dataContainer'>
                <h1 className='title'>Comprar producto</h1>
                <div className='info'>
                    {productos?.map((producto) => {
                        return (
                            <Card
                                key={producto.id}
                                imagen={producto.image}
                                titulo={producto.title}
                                descripcion={producto.description}
                                precio={producto.price}
                                handleAgregar={() => handleAgregar(producto)}
                                handleQuitar={() => handleQuitar(producto.id)}
                            >
                            </Card>)
                    })}
                </div>
            </div>
        </div>
    )
}
