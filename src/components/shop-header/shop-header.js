import React from 'react';

import "./shop-header.css"

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header-row">
            <a href="/#" className="logo text-dark">BookStore</a>
            <a href="/#" className="shop-cart">
                <i class="bi bi-cart-check"></i>
                {numItems} items (${total})
            </a>
        </header>
    )
}

export default ShopHeader