import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CarritoPage } from './pages/CarritoPage'
import { ComprasPage } from './pages/ComprasPage'
import ProductoProvider from './context/ProductoProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CarritoApp = () => {
    return (
        <>
            <ProductoProvider>
                <CarritoProvider>
                    <Navbar />
                    <div className='container'>
                        <Routes>
                            <Route path='/' element={<ComprasPage />} />
                            <Route path='/carrito' element={<CarritoPage />} />
                            <Route path='/*' element={<Navigate to='/' />} />
                        </Routes>
                    </div>
                </CarritoProvider>
            </ProductoProvider>
        </>
    )
}
