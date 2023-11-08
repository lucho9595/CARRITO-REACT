import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

export const Navbar = () => {

    const { listaCompras } = useContext(CarritoContext);

    const sumar = () => {
        const result = listaCompras.compras
        let total = 0;
        for (let i = 0; i < result.length; i++) {
            total += result[i].cantidad;
        }
        return total;

    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">Carrito</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" aria-current="page" href="#">Compras</NavLink>
                        </li>
                    </ul>
                    <NavLink to='/carrito'>
                        <Badge badgeContent={sumar()} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
