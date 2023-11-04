import React, { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'
import axios from 'axios';

function ProductoProvider({ children }) {

    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            const data = await response.data;
            setProductos(data)
        } catch (error) {
            console.log('Error :', error)
        }
    };

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    )
}

export default ProductoProvider;
