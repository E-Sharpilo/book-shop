import React from 'react';
import { Link } from 'react-router-dom'
import "./shop-header.css"

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header-row">
            <Link to="/" className="logo text-dark">BookStore</Link>
            <Link to="/cart" className="shop-cart">
                <i className="bi bi-cart-check"></i>
                {numItems} items (${total})
            </Link>
        </header>
    )
}

export default ShopHeader